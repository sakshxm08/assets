import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home";
import { Navbar } from "./components/Navbar";
import { Upload } from "./routes/Upload";
import { Auth } from "./routes/Auth";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "upload", element: <Upload /> },

        // { path: "/auth", element: <Auth /> },
        // { path: "/dashboard", element: <Dashboard /> },
      ],
    },
    { path: "/auth", element: <Auth /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
