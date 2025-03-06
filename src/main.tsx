import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HashRouter>
            <Analytics />
            <SpeedInsights />
            <App />
        </HashRouter>
    </React.StrictMode>
);
