import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createConfig, http, WagmiProvider} from 'wagmi';

import {Connect} from './components/Connect';
import {useEffect} from 'react';
import {openfortInstance} from './main';

import { RelayKitProvider } from '@reservoir0x/relay-kit-ui'
import { convertViemChainToRelayChain } from '@reservoir0x/relay-sdk'
import '@reservoir0x/relay-kit-ui/styles.css'
import { arbitrumSepolia, baseSepolia } from 'viem/chains';
import { injected } from 'wagmi/connectors';

const queryClient = new QueryClient();

const chains = [convertViemChainToRelayChain(arbitrumSepolia), convertViemChainToRelayChain(baseSepolia)]

const wagmiConfig = createConfig({
  chains: [arbitrumSepolia, baseSepolia],
  connectors: [injected()],
  transports: {
    [arbitrumSepolia.id]: http(),
    [baseSepolia.id]: http(),
  },
});


export default function App() {
  useEffect(() => {
    if (!openfortInstance) return;
    openfortInstance.getEthereumProvider(); // EIP-6963
  }, [openfortInstance]);

  return (
    <QueryClientProvider client={queryClient}>
      <RelayKitProvider options={{
          appName: 'Relay Demo',
          baseApiUrl: 'https://api.testnets.relay.link',
          duneApiKey: import.meta.env.VITE_API_DUNE,
          chains
        }}>
        <WagmiProvider config={wagmiConfig}>
          <Connect />
        </WagmiProvider>
      </RelayKitProvider>
    </QueryClientProvider>
  );
}
