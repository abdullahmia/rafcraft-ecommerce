import { useEffect } from "react";
import DashboardFooter from "../ui/DashboardFooter";
import DashboardHeader from "../ui/DashboardHeader";
import DashboardSidebar from "../ui/DashboardSidebar";

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