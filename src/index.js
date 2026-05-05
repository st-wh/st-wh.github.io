import ReactDOM from "react-dom/client";
import "./custom.scss";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorkerRegistration.unregister();
