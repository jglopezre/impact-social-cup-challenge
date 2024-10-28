import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import { FormDataMutationContextProvider } from './contexts/formDataMutationContext.tsx';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ErrorModalContextProvider } from './contexts/ErrorModalContext.tsx';
import { SuccessModalContextProvider } from './contexts/SuccessModalContext.tsx';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <ErrorModalContextProvider>
      <FormDataMutationContextProvider>
        <SuccessModalContextProvider>
          <App />
        </SuccessModalContextProvider>
      </FormDataMutationContextProvider>
    </ErrorModalContextProvider>
  </ApolloProvider> 
)
