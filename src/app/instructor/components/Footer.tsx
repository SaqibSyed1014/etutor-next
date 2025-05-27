import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-5">
            <div className="container">
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">
                        © 2021 - Eduguard. Designed by <span className="text-gray-900">Templatecookie</span>. All rights reserved
                    </p>
                    <div className="space-x-6 text-gray-600">
                        <Link href="/faqs">
                            FAQs
                        </Link>
                        <Link href="/faqs">
                            Privacy Policy
                        </Link>
                        <Link href="/faqs">
                            Terms & Condition
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
