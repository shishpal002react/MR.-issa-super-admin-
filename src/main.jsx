import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ReactNotifications/>
    <App />
  </BrowserRouter>
);
