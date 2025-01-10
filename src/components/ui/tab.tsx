import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabDemo";
import Desktop from "../Desktop";
import Mobile from "../mobile";
const tab = () => {
  return (
    <div>
      <Tabs defaultValue="desktop" className="w-full">
        <TabsList className="divide-x divide-gray-300 dark:divide-gray-900">
          <div className="col-span-6">
            <div className="flex flex-col justify-start items-start py-2 px-6">
              <span className="text-gray-800 dark:text-gray-100 text-sm ">
                Bar Chart - Interactive
              </span>
              <p className="text-gray-500 text-sm">
                Showing total visitors for the last 3 months
              </p>
            </div>
          </div>
          <TabsTrigger className="col-span-3" value="desktop">
            {" "}
            <div className="flex flex-col justify-start items-start py-2">
              <div>
                <p className="text-gray-500 text-sm">Desktop</p>
              </div>
              <div className="mt-2">
                <span className="text-gray-600 text-start dark:text-gray-100 text-lg sm:text-xl md:text-2xl">
                  24,828{" "}
                </span>
              </div>
            </div>
          </TabsTrigger>
          <TabsTrigger className="col-span-3" value="mobile">
            <div className="flex flex-col justify-start items-start py-2">
              <div>
                <p className="text-gray-500 text-sm">Mobile</p>
              </div>
              <div className="mt-2">
                <span className="text-gray-600 dark:text-gray-100 text-lg sm:text-xl md:text-2xl">
                  25,010{" "}
                </span>
              </div>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="desktop">
          <Desktop />{" "}
        </TabsContent>
        <TabsContent value="mobile"><Mobile /></TabsContent>
      </Tabs>
    </div>
  );
};

export default tab;
