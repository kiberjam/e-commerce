import Header from "../Header";
import LeftGrid from "./LeftGrid";
import MainGrid from "./MainGrid";

const DashboardPage = () => {
  return (
    <div className=" h-full fixed w-full flex bg-blueGray-100 space-x-8 text-blueGray-800 m-0 p-0">
      <LeftGrid />
      <div className="w-full p-4 space-y-4 h-full overflow-y-auto  flex-auto">
        <Header />
        <MainGrid />
      </div>
    </div>
  );
};

export default DashboardPage;
