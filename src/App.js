import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Error from "./component/ErrorElement.js";
import LoginPage from "./component/LoginPage.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./component/Cart.js";
import { UserProvider } from "./utils/UserContext.js";

const App = () => (
  <Provider store={appStore}>
    <UserProvider>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </UserProvider>
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <LoginPage /> }, // Add this line
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
