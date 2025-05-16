'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DefaultLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;
