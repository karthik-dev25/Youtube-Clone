import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import appStore from "./store/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
      <Header />
      </Provider>
    </div>
  );
}

export default App;
