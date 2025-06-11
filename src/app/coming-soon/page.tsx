'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import Link from "next/link";
import Minimal from "@/components/layouts/Minimal";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);
const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const { toast } = useToast();

    // Calculate time remaining until launch date
    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +launchDate - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        // Update countdown every second
        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [launchDate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Validate email
            const emailSchema = z.string().email("Please enter a valid email address");
            emailSchema.parse(email);

            // Email is valid
            toast({
                title: "Thank you!",
                description: "We'll notify you when we launch.",
            });

            setEmail("");
            setEmailError("");

        } catch (error) {
            if (error instanceof z.ZodError) {
                setEmailError(error.errors[0].message);
            }
        }
    };

    return (
        <>
            <Minimal slot="comingSoon">
                <div className="flex flex-col justify-between flex-1">
                    <div className="container pt-3 pb-20">
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            {/* Left side - Content */}
                            <div className="w-full max-w-[648px]">
                                <div className="flex flex-col gap-4 mb-10">
                                    <div className="text-primary-500 text-lg font-semibold">COMING SOON</div>
                                    <h1 className="text-4xl md:text-6xl font-semibold">
                                        We are going to launch our website very soon. Stay tune
                                    </h1>
                                </div>

                                {/* Countdown timer */}
                                <div className="flex gap-4">
                                    <div
                                        className="bg-gray-50 w-[116px] h-[108px] flex flex-col items-center justify-center text-gray-900">
                                        <div className="text-3xl font-semibold">
                                            {String(timeLeft.days).padStart(2, '0')}
                                        </div>
                                        <div className="text-sm">Days</div>
                                    </div>
                                    <div
                                        className="bg-gray-50 w-[116px] h-[108px] flex flex-col items-center justify-center text-gray-900">
                                        <div className="text-3xl font-semibold">
                                            {String(timeLeft.hours).padStart(2, '0')}
                                        </div>
                                        <div className="text-sm">Hours</div>
                                    </div>
                                    <div
                                        className="bg-gray-50 w-[116px] h-[108px] flex flex-col items-center justify-center text-gray-900">
                                        <div className="text-3xl font-semibold">
                                            {String(timeLeft.minutes).padStart(2, '0')}
                                        </div>
                                        <div className="text-sm">Mins</div>
                                    </div>
                                    <div
                                        className="bg-gray-50 w-[116px] h-[108px] flex flex-col items-center justify-center text-gray-900">
                                        <div className="text-3xl font-semibold">
                                            {String(timeLeft.seconds).padStart(2, '0')}
                                        </div>
                                        <div className="text-sm">Sec</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right side - Illustration */}
                            <div className="w-full md:w-2/3 flex justify-center relative">
                                <img
                                    src="/images/illustrations/saly-2.png"
                                    alt="Coming Soon Illustration"
                                    className="w-full h-full object-cover"
                                />

                                {/* Notification form */}
                                <div
                                    className="max-w-[648px] w-full flex flex-col gap-6 absolute bottom-0 bg-white shadow-[0_16px_80px_0_#0000001F] p-8">
                                    <h2 className="text-2xl font-semibold">Get notified when we launch</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex gap-4">
                                            <div className="flex-1">
                                                <Input
                                                    type="email"
                                                    placeholder="Email address"
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                        if (emailError) setEmailError("");
                                                    }}
                                                    className={emailError ? "border-red-500" : ""}
                                                />
                                            </div>
                                            <Button type="submit">
                                                Notify Me
                                            </Button>
                                        </div>
                                        {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                                    </form>

                                    <p>*Don't worry we will not spam you 😊</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container py-6">
                        <div className="flex justify-between items-center text-sm">
                            <p className="text-gray-900">
                                © 2025 - Eduguard. Designed by <span className="font-medium">DevDock</span>. All
                                rights reserved
                            </p>

                            <div className="flex gap-6 items-center">
                                <Link href="/faqs">FAQs</Link>
                                <Link href="/">Privacy Policy</Link>
                                <Link href="/">Terms & Condition</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Minimal>
        </>
    );
};

export default ComingSoon;
