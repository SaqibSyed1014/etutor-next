"use client";

import Link from "next/link";
import {ArrowRight, BrandLogo, CaretDown} from "@/assets/icons/common-icons.tsx";
import {Facebook, Instagram, Linkedin, Twitter, Youtube} from "@/assets/icons/icons.tsx";
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel} from "@/components/ui/dropdown-menu.tsx";
import {useState} from "react";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper.tsx";
import {SocialMediaLinks} from "@/components/tiny/tiny-collection.tsx";

const Footer = () => {
  const [selectedLang, selectLang] = useState('eng');

  const languages = [
    {
      value: 'eng',
      label: 'English'
    },
    {
      value: 'germ',
      label: 'German'
    },
    {
      value: 'fre',
      label: 'French'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <BrandLogo />
            </Link>
            <p className="text-gray-500 mt-5 mb-6">
              Aliquam rhoncus ligula est, non pulvinar elit <br /> convallis nec. Donec mattis dolo at
            </p>
            <SocialMediaLinks />
          </div>

          <div>
            <p className="text-white font-medium mb-5">TOP 4 CATEGORY</p>
            <ul className="flex gap-2 flex-col items-start">
              <li>
                <Link href="/category/development" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Development
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link href="/category/finance" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Finance & Accounting
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link href="/category/design" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Design
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link href="/category/business" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Business
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white font-medium mb-5">QUICK LINKS</p>
            <ul className="flex gap-2 flex-col items-start">
              <li>
                <Link href="/about" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  About
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link href="/become-instructor" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Become Instructor
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Contact
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link href="/career" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Career
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Coming Soon
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link href="/404" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  404 Not Found
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white font-medium mb-5">SUPPORT</p>
            <ul className="flex gap-2 flex-col items-start">
              <li>
                <Link href="/help" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Help Center
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link href="/faq" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  FAQs
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link href="/terms" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Terms & Condition
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group">
                  Privacy Policy
                  <ArrowRight classes="opacity-0 group-hover:opacity-100 text-etutor-primary" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white font-medium mb-5 uppercase">Downlaod our app</p>
            <ul className="flex gap-3 flex-col items-start">
              <li>
                <img src="/images/app-store.png" />
              </li>
              <li>
               <img src="/images/play-store.png" />
              </li>
            </ul>
          </div>


        </div>

      </div>

      <div className="container">
        <div className=" py-9 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center shadow-[0_1px_0_0_#363B4780_inset]">
          <p className="text-gray-500 text-sm">
            © 2023 - E-tutor. Designed by <span className="text-white">Templatecookie</span>. All rights reserved
          </p>

          <DropdownMenuWrapper
              options={languages}
              selected={selectedLang}
              onChange={selectLang}
              triggerClasses="text-base !text-gray-500 px-[18px] py-3 border border-gray-800 justify-between min-w-[200px]"
              contentContentClasses="min-w-[200px] bg-gray-800"
          />

        </div>
      </div>
    </footer>
  );
};

export default Footer;
