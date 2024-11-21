import {useAccount, useDisconnect, useEnsAvatar, useEnsName} from 'wagmi';
import {openfortInstance} from '../main';
import {useState} from 'react';
import { SwapWidget } from '@reservoir0x/relay-kit-ui';
import { baseSepolia, arbitrumSepolia } from 'viem/chains';

export function Account() {
  const {address, connector} = useAccount();
  const {disconnect} = useDisconnect();
  const {data: ensName} = useEnsName({address});
  const {data: ensAvatar} = useEnsAvatar({name: ensName!});
  const [disconnectTxt, setDisconnectTxt] = useState('Disconnect');
  const formattedAddress = formatAddress(address);

  return (
    <div>
    <div className="row">
      <div className="inline">
        {ensAvatar ? (
          <img alt="ENS Avatar" className="avatar" src={ensAvatar} />
        ) : (
          <div className="avatar" />
        )}
        <div className="stack">
          {address && (
            <div className="text">
              {ensName ? `${ensName} (${formattedAddress})` : formattedAddress}
            </div>
          )}
          <div className="subtext">
            Connected to {connector?.name} Connector
          </div>
        </div>
      </div>
      <button
        className="button"
        onClick={async () => {
          setDisconnectTxt('Disconnecting ...');
          if (connector && connector.name.includes('Openfort')) {
            await openfortInstance.logout();
          }
          disconnect();
        }}
        type="button"
      >
        {disconnectTxt}
      </button>
    </div><div className="row">

    </div>
      <SwapWidget
        defaultFromToken={{
          chainId: baseSepolia.id,
          decimals: 18,
          logoURI: 'https://ethereum-optimism.github.io/data/ETH/logo.png',
          symbol: 'ETH',
          name: 'Ethereum',
          address: "0x0000000000000000000000000000000000000000"
        }}
        defaultToToken={{
          chainId: arbitrumSepolia.id,
          decimals: 18,
          logoURI: 'https://ethereum-optimism.github.io/data/ETH/logo.png',
          symbol: 'POL',
          name: 'Polygon',
          address: "0x0000000000000000000000000000000000000000"
        }}
        defaultAmount={'0.0001'}
        onSwapError={(error) => {
          console.error('Swap Error', error)
          }
        }
        onAnalyticEvent={(eventName, data) => {
          console.log('Analytic Event', eventName, data)
        }}
      />
    </div>
  );
}

function formatAddress(address?: string) {
  if (!address) return null;
  return `${address.slice(0, 6)}…${address.slice(38, 42)}`;
}
