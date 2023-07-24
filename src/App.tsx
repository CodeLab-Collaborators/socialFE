import { MainRouter } from "./router/mainRouter";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <MainRouter />
        <ToastContainer />
      </RecoilRoot>
    </div>
  );
};

export default App;
