import HistoryComp from "@/components/dashboard/HistoryComp";

import Quiz from "@/components/dashboard/Quiz";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";
import HotTopics from "../../components/dashboard/HotTopics";

type Props = {};
export const metadata = {
  title: "Dashboard",
};
const Dashboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h1 className="mr-2 text-5xl font-bold tracking-tight">Dashboard</h1>
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <Quiz />
        <HistoryComp/>
        <HotTopics/>
      </div>

      <div className="grid gap-4 mt-2 md:grid-cols-2 lg:grid-cols-7">
      
      </div>
    </main>
  );
};

export default Dashboard;
