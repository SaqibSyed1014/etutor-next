"use client";

import Link from "next/link";
import {ArrowRight, BrandLogo} from "@/assets/icons/common-icons";
import {useState} from "react";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper";
import {SocialMediaLinks} from "@/components/common/tiny-collection";
import {usePathname} from "next/navigation";
import {courseCategories} from "@/lib/@fake-db/courseCategories";

const Footer = () => {
  const [selectedLang, selectLang] = useState('eng');
  const pathName = usePathname();

  const categories = [courseCategories.DEVELOPMENTS, courseCategories.FINANCE, courseCategories.DESIGN, courseCategories.BUSINESS]

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
              {categories.map((cat, index) => {
                return  (
                  <li key={index}>
                    <Link href={`/categories/${cat.id}`}
                          className={`flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group ${pathName === `/categories/${cat.id}`?'text-white shadow-[0px_-1.5px_0px_0px_#FF6636_inset]':''}`}>
                      {cat.title}
                      <ArrowRight classes={`opacity-0 group-hover:opacity-100 text-etutor-primary ${pathName === `/categories/${cat.id}`?'opacity-100':''}`}/>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <p className="text-white font-medium mb-5">QUICK LINKS</p>
            <ul className="flex gap-2 flex-col items-start">
              <li>
                <Link href="/about" className={`flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group ${pathName === '/about'?'text-white shadow-[0px_-1.5px_0px_0px_#FF6636_inset]':''}`}>
                  About
                  <ArrowRight classes={`opacity-0 group-hover:opacity-100 text-etutor-primary ${pathName === '/about'?'opacity-100':''}`} />
                </Link>
              </li>
              <li>
                <Link href="/become-an-instructor" className={`flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group ${pathName === '/become-an-instructor'?'text-white shadow-[0px_-1.5px_0px_0px_#FF6636_inset]':''}`}>
                  Become Instructor
                  <ArrowRight classes={`opacity-0 group-hover:opacity-100 text-etutor-primary ${pathName === '/become-an-instructor'?'opacity-100':''}`} />
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group ${pathName === '/contact'?'text-white shadow-[0px_-1.5px_0px_0px_#FF6636_inset]':''}`}>
                  Contact
                  <ArrowRight classes={`opacity-0 group-hover:opacity-100 text-etutor-primary ${pathName === '/contact'?'opacity-100':''}`} />
                </Link>
              </li>
              <li>
                <Link href="/career" className={`flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group ${pathName === '/career'?'text-white shadow-[0px_-1.5px_0px_0px_#FF6636_inset]':''}`}>
                  Career
                  <ArrowRight classes={`opacity-0 group-hover:opacity-100 text-etutor-primary ${pathName === '/career'?'opacity-100':''}`} />
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className={`flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group ${pathName === '/coming-soon'?'text-white shadow-[0px_-1.5px_0px_0px_#FF6636_inset]':''}`}>
                  Coming Soon
                  <ArrowRight classes={`opacity-0 group-hover:opacity-100 text-etutor-primary ${pathName === '/coming-soon'?'opacity-100':''}`} />
                </Link>
              </li>
              <li>
                <Link href="/404" className={`flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group ${pathName === '/404'?'text-white shadow-[0px_-1.5px_0px_0px_#FF6636_inset]':''}`}>
                  404 Not Found
                  <ArrowRight classes={`opacity-0 group-hover:opacity-100 text-etutor-primary ${pathName === '/404'?'opacity-100':''}`} />
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
                <Link href="/faqs" className={`flex gap-2 pb-1 text-gray-500 hover:text-white hover:shadow-[0px_-1.5px_0px_0px_#FF6636_inset] group ${pathName === '/faqs'?'text-white shadow-[0px_-1.5px_0px_0px_#FF6636_inset]':''}`}>
                  FAQs
                  <ArrowRight classes={`opacity-0 group-hover:opacity-100 text-etutor-primary ${pathName === '/faqs'?'opacity-100':''}`} />
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

        <div className="shadow-[0_1px_0_0_#363B4780_inset]">
          <div className="container">
            <div className="py-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © 2023 - E-tutor. Designed by <span className="text-white">DevDock</span>. All rights reserved
              </p>

              <DropdownMenuWrapper
                  options={languages}
                  selected={selectedLang}
                  onChange={selectLang}
                  variant="dark"
                  triggerClasses="text-base !text-gray-500 px-[18px] py-3 border border-gray-800 justify-between min-w-[200px]"
                  contentContentClasses="min-w-[200px] bg-gray-900 !text-gray-500"
              />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
