import Todos from "./pages/todos/todos";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import { Routes, Route } from "react-router-dom";
import Weather from "./pages/weather/weather";
import Profile from "./pages/profile/profile";
import Layout from "./layout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
