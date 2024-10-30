import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ErrorModalContextProvider } from './contexts/ErrorModalContext.tsx';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <ErrorModalContextProvider>
      <App />
    </ErrorModalContextProvider>
  </ApolloProvider> 
)