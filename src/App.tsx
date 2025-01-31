import { Auth0Provider } from '@auth0/auth0-react';
import { HttpMethodContextProvider } from './context/HttpMethodProvider';
import Routes from './Routes';
import env from './config/env.config';
import { HeroUIProvider } from '@heroui/react';
import { AppContextProvider } from './context/AppContextProvider';
function App() {
  console.log(env.VITE_AUTH0_CLIENT_ID, env.VITE_AUTH0_DOMAIN);
  return (
    <Auth0Provider
      domain={env.VITE_AUTH0_DOMAIN}
      clientId={env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: env.VITE_AUTH0_REDIRECT
      }}
    >
      <HttpMethodContextProvider>
        <HeroUIProvider>
          <AppContextProvider>
            <Routes />
          </AppContextProvider>
        </HeroUIProvider>
      </HttpMethodContextProvider>
    </Auth0Provider>
  );
}

export default App;
