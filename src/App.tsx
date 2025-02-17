import { Auth0Provider } from '@auth0/auth0-react';
import { HttpMethodContextProvider } from './context/HttpMethodProvider';
import Routes from './Routes';
import env from './config/env.config';
import { HeroUIProvider } from '@heroui/react';
import { AppContextProvider } from './context/AppContextProvider';
function App() {
  return (
    <Auth0Provider
      domain={env.auth0.domain}
      clientId={env.auth0.clientId}
      authorizationParams={{
        redirect_uri: env.auth0.redirect,
        audience: env.auth0.audience,
        scope: env.auth0.scope
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
