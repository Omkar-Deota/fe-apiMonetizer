export default {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  SP_API_KEY: import.meta.env.VITE_API_SP_API_KEY,
  APP_ENVIRONMENT: import.meta.env.VITE_APP_ENVIRONMENT,
  auth0: {
    redirect: import.meta.env.VITE_AUTH0_REDIRECT,
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    scope: import.meta.env.VITE_AUTH0_SCOPE
  }
};
