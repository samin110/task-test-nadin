import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white h-full flex flex-col p-6 gap-y-6 text-center text-2xl border-r border-gray-300">
      <NavLink to="/">Dashboard</NavLink>

      <NavLink to="/todos">Todos</NavLink>

      <NavLink to="/weather">Weather</NavLink>

      <NavLink to="/profile"> Profile</NavLink>
    </div>
  );
};

export default Sidebar;
