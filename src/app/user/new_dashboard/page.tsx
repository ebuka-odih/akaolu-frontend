import Sidebar from "@/components/sideBar";
const page = () => {
  return (
    <div className="flex">
        <div className="">
      <Sidebar />
        </div>
        <div className=" h-96 w-full bg-gray-500">
        </div>

    </div>
  );
};

export default page;
