import { MainRouter } from "./router/mainRouter";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <MainRouter />
      </RecoilRoot>
    </div>
  );
};

export default App;
