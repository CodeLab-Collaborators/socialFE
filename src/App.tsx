// import { MainRouter } from "./router/mainRouter";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { store } from "./global/store";
import { MainRouter } from "./router/mainRouter";

let persistor = persistStore(store);
// import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RecoilRoot>
            <MainRouter />
            <ToastContainer />
          </RecoilRoot>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
