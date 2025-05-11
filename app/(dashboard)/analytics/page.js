import { FaUsers } from "react-icons/fa";
import { LuTestTube } from "react-icons/lu";
import { GiTestTubes } from "react-icons/gi";
import { CgSearchLoading } from "react-icons/cg";
import { END_POINTS } from "@/app/utils/endpoints";
import { API_HANDLER } from "@/app/utils/functions";

export default async function Home() {
    const analyticsData = await API_HANDLER("GET", END_POINTS.ANALYTICS.PROVIDER, null);

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card label="Patients" value={analyticsData?.patients} Icon={FaUsers} />
      <Card label="Total Tests" value={analyticsData?.reports} Icon={LuTestTube} />
      <Card
        label="Completed Test"
        value={analyticsData?.reportsByStatus?.COMPLETED || 0}
        Icon={GiTestTubes}
      />
      <Card
        label="In Process Test"
        value={analyticsData?.reportsByStatus?.IN_PROCESS || 0}
        Icon={CgSearchLoading}
      />
    </div>
  );
}

function Card({ label, value, Icon }) {
  return (
    <div className="p-5 bg-green-secondary-gradient flex flex-col justify-between rounded-md min-h-[120px]">
      <div className="text-white font-semibold flex items-center justify-between">
        <div>{label}</div>
        <div><Icon className="text-2xl" /></div>
      </div>
      <div className="text-white font-semibold text-2xl">
        {value}
      </div>
    </div>
  );
}
