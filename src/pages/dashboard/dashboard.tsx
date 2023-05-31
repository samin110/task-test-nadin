import { clock } from "./utils/clock";
import { timeOfDay } from "./utils/time-of-day";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-6xl">{clock()}</h1>
      <div className="text-5xl mt-10">Good {timeOfDay()} , Amin</div>
    </div>
  );
};

export default Dashboard;
