import { useEffect } from "react";
import DashboardFooter from "../dashboardKits/DashboardFooter";
import DashboardHeader from "../dashboardKits/DashboardHeader";
import DashboardSidebar from "../dashboardKits/DashboardSidebar";

const DashboardWrapper = ({children, title}) => {
    useEffect(() => {
        document.title = title;
    }, [title])
    return (
        <div>
            <DashboardHeader />
            <div className="flex overflow-hidden bg-white pt-16">
                <DashboardSidebar />
                <div
                    id="main-content"
                    className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
                >
                    <main>
                        {children}
                    </main>
                    <DashboardFooter />
                </div>
            </div>
        </div>
    )
}

export default DashboardWrapper;