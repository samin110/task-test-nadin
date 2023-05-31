import AllRoutes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="h-screen">
      <Toaster />
      <AllRoutes />
    </div>
  );
}

export default App;
