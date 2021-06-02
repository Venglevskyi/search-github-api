import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import RNBootSplash from 'react-native-bootsplash';

import Search from './src/Screens';

const App = () => {
    useEffect(() => {
        RNBootSplash.hide();
    }, []);
    return (
        <Provider store={store}>
            <PaperProvider>
                <Search />
            </PaperProvider>
        </Provider>
    );
};

export default App;
