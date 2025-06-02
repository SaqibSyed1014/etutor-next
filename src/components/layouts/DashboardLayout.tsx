'use client';

import SideBar from "@/app/instructor/components/SideBar";
import TopBar from "@/app/instructor/components/TopBar";
import Footer from "@/app/instructor/components/Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="flex-1 flex flex-col">
                <TopBar />
                <main className="flex-1 overflow-auto bg-gray-50">
                    <div className="min-h-screen">
                        <div className="container pt-6 pb-10">
                            {children}
                        </div>
                    </div>

                    <Footer />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;
