'use client';

import Minimal from "@/components/layouts/Minimal";
import {useEffect} from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);
    return (
        <>
            <Minimal slot="auth">
                {children}
            </Minimal>
        </>
    )
}

export default Layout;
