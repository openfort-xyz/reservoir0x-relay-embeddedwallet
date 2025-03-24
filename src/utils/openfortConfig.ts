import { Openfort } from '@openfort/openfort-js';


const openfortInstance = new Openfort({
  baseConfiguration: {
    publishableKey: import.meta.env.VITE_API_OPENFORT_PUBLISHABLE_KEY!,
  },
  shieldConfiguration: {
    shieldPublishableKey: import.meta.env.VITE_API_SHIELD_PUBLISHABLE_KEY!,
    shieldEncryptionKey: import.meta.env.VITE_API_SHIELD_ENCRYPTION_PART!,
  },
});

export default openfortInstance;