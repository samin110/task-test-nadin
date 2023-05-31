import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { toast } from "react-hot-toast";

const Login = () => {
  // *** Hooks
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // *** Functions
  const sunbmitHandler = (event: any) => {
    const name = inputRef.current?.value;

    // save username to the local storage
    localStorage.setItem("username", JSON.stringify(name));

    navigate("/");

    toast.success(`Welcome ${name?.toLocaleUpperCase()} 🥳`, {
      duration: 4000,
    });

    event.preventDefault();
  };

  return (
    <div className="my-10 h-full w-full">
      <h1 className="text-3xl text-center"> Please enter your name</h1>

      <div className="flex w-full justify-center items-center mt-10">
        <div className=" w-2/5 bg-gray-300 rounded-2xl p-5">
          <form className="flex flex-col" onSubmit={sunbmitHandler}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              color="secondary"
              sx={{ background: "#DDE6ED", borderRadius: "4px" }}
              inputRef={inputRef}
            />

            <button
              type="submit"
              className="bg-gray-700 p-2 rounded-md text-white w-20 mt-5 hover:shadow-2xl"
            >
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// git remote add origin https://github.com/samin110/task-test-nadin.git
