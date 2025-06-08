import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import appStore from "./store/appStore";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch", element: <WatchPage /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <div>
          <Header />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
