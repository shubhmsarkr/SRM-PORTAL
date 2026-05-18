import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Suppliers from "./pages/Suppliers";
import RFQ from "./pages/RFQ";
import Bidding from "./pages/Bidding";
import Orders from "./pages/Orders";
import Receiving from "./pages/Receiving";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "suppliers", Component: Suppliers },
      { path: "rfq", Component: RFQ },
      { path: "bidding", Component: Bidding },
      { path: "orders", Component: Orders },
      { path: "receiving", Component: Receiving },
      { path: "reports", Component: Reports },
      { path: "settings", Component: Settings },
    ],
  },
]);
