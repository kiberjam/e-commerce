import Header from "../Header";
import LeftGrid from "./LeftGrid";
import MainGrid from "./MainGrid";

const DashboardPage = () => {
  return (
    <div className=" min-h-screen bg-blue-50 flex space-x-8 p-4 text-blueGray-800">
      <LeftGrid />
      <div className="flex-auto p-4 space-y-4">
        <Header />
        <MainGrid />
      </div>
    </div>
  );
};

export default DashboardPage;
