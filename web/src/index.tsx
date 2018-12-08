import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Routes } from './Routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker'
import ApolloClient from 'apollo-boost';


// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });


ReactDOM.render(
	<ApolloProvider client={client}>
		<Routes />
	</ApolloProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
