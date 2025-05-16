'use client'

import Navbar from "@/components/Navbar";
import {Button} from "@/components/ui/button";
import {useRouter} from 'next/navigation';

const NotFound = () => {

    const router = useRouter();


    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <div className="flex items-center flex-1 relative">
                <div className="container">
                    <div className="flex flex-col items-start gap-6 w-full max-w-[534px]">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-[80px] leading-[80px] text-gray-100">Error 404</h1>
                            <h2 className="text-5xl">Oops! page not found</h2>
                        </div>
                        <p className="text-xl">
                            Something went wrong. It’s look that your requested could not be found. It's look like the
                            link is broken or the page is removed.</p>
                        <Button onClick={() => router.back()}>Go Back</Button>
                    </div>
                </div>

                <div className="h-full w-[53%] right-0 absolute">
                    <img src="/images/illustrations/404.png" alt="404 Not Found"
                        className="w-full h-full object-contain"/></div>
            </div>
        </div>
    );
};

export default NotFound;
