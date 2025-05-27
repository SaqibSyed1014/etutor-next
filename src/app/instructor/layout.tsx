import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <DashboardLayout>{children}</DashboardLayout>
    )
}

export default Layout;
