import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import stores from 'stores';

// setTimeout(() => {
//     ReactDOM.render(<Root/>, document.getElementById('root'));
//     serviceWorker.unregister();
// }, 5000);

ReactDOM.render(
    <Provider {...stores}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
