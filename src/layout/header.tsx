import Logo from "../assets/images/logo.png";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = () => {
  return (
    <div className="h-[5rem] w-full bg-white flex border-b border-gray-300 justify-between items-center px-6 shadow-2xl">
      <button>
        <LightModeIcon sx={{ fontSize: "2.5rem" }} />
      </button>
      <p className="text-2xl">This task is for test...</p>
      <div className="w-[15rem] h-full flex justify-end">
        <img src={Logo} className="w-full h-full" />
      </div>
    </div>
  );
};

export default Header;
