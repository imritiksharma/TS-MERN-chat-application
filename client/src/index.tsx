// Imports ----------------------------------------------------------------------------------

// External -------------------------------------

import React from 'react';

import ReactDOM from 'react-dom/client';

// Application ----------------------------------

import './index.css';

import App from './App';

// Constants --------------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Rendered pplication ----------------------------------------------------------------------

root.render(
	// Redux store provider
	<App />
);
