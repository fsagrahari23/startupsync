import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer />
      <Toaster />
    </Provider>
  </BrowserRouter>
);
