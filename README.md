# Relay.link cross chain swap

**Step 1**

Ensure you are using the latest `@openfort/openfort-js` by using the latest version from [`@openfort/openfort-js`](https://www.npmjs.com/package/@openfort/openfort-js) in the `package.json` file.

**Step 2**

Create a Openfort account on Openfort Dashboard.

**Step 3**

Update `VITE_OPENFORT_PUBLISHABLE_KEY`, `VITE_SHIELD_PUBLISHABLE_KEY` and `VITE_SHIELD_ENCRYPTION_PART`:

```.env
// Openfort and Shield Publishable Key (you will find it in the Dashboard in the `API Keys` section)
VITE_DUNE=
VITE_OPENFORT_PUBLISHABLE_KEY=
VITE_SHIELD_PUBLISHABLE_KEY=
VITE_SHIELD_ENCRYPTION_PART=
```

**Step 4**

```sh
yarn && yarn dev
```
