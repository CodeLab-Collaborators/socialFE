import { MainRouter } from "./router/mainRouter";
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'
import { store } from "./global/store";
import { RecoilRoot } from "recoil"
let persistor = persistStore(store)

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Provider store={store} >
          <PersistGate loading={null} persistor={persistor}>
            <MainRouter />
          </PersistGate>
        </Provider>
      </RecoilRoot>
    </div>
  );
};

export default App;
