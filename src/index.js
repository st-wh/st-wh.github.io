import ReactDOM from "react-dom/client";
import "./custom.scss";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

serviceWorkerRegistration.unregister();
