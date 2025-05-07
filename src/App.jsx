import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import appStore from "./store/appStore";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <div>
          <Header />
        </div>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
