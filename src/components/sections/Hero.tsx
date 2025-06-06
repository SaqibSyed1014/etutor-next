'use client';

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-white to-gray-100" style={{ background: 'linear-gradient(180deg, rgba(240, 242, 245, 0) 0.02%, #F0F2F5 220.8%)' }}>
      <div className="container py-[100px] flex flex-col gap-20 lg:flex-row items-center">
        <div className="flex flex-col items-start gap-10 w-full max-w-lg xl:max-w-[648px] mb-10 lg:mb-0">
          <h1 className="text-5xl md:text-6xl xl:text-7xl">
            Learn with expert <br /> anytime anywhere
          </h1>
          <p className="text-xl xl:text-2xl">
            Our mission is to help people to find the best course
            online and learn with expert anytime, anywhere.
          </p>
          <a href="/auth/sign-up">
            <Button variant="default">
              Create Account
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 99%, 0% 100%)' }}>
        <img
            src="/images/coach-by-stand.jpg"
            alt="Students learning"
            className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
