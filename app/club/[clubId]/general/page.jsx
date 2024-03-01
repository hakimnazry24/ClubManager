import SideBar from "@/components/SideBar";
import DashboardHeader from "@/components/DashboardHeader";


export default function clubGeneralPage({ params }) {
  const { clubId } = params;

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <SideBar clubId={clubId}></SideBar>
      </div>
      <div className="col-span-10">
        <DashboardHeader title={"General"}></DashboardHeader>
      </div>
    </div>
  );
}
