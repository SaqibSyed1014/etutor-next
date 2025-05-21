'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/assets/icons/common-icons";
import { Button } from "@/components/ui/button";
import { SocialMediaLinks } from "@/components/common/tiny-collection";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    slot?: 'auth' | 'comingSoon' | null;
}

const Layout = ({ children, slot = null }: LayoutProps) => {
    const pathname = usePathname();

    const renderedElements = () => {
        switch (slot) {
            case 'auth':
                return (
                    <div className="flex items-center gap-4">
                        {pathname === '/auth/sign-up' ? 'Already have an account?' : 'Don’t have account?'}
                        {pathname === '/auth/sign-up' ? (
                            <Link href="/auth/sign-in">
                                <Button variant="outline">Sign In</Button>
                            </Link>
                        ) : (
                            <Link href="/auth/sign-up">
                                <Button variant="outline">Create Account</Button>
                            </Link>
                        )}
                    </div>
                );
            case 'comingSoon':
                return <SocialMediaLinks inverted={true} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col bg-white">
            <div
                className="bg-white py-6 px-8"
                style={{ boxShadow: '0px -1px 0px 0px #E9EAF0 inset' }}
            >
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-12">
                        <Link href="/" className="flex items-center space-x-2">
                            <BrandLogo />
                        </Link>
                    </div>
                    {renderedElements()}
                </div>
            </div>
            {children}
        </div>
    );
};

export default Layout;
