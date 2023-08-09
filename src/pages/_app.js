import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store, wrapper } from '../app/store';
import { SessionProvider } from "next-auth/react";
import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [persistor, setPersistor] = useState(null);

  useEffect(() => {
    const newPersistor = persistStore(store);
    setPersistor(newPersistor);
}, []);


  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {persistor ? (
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        ) : (
            <Component {...pageProps} />
        )}
    </Provider>
    </SessionProvider>
  );
}


export default wrapper.withRedux(MyApp);



