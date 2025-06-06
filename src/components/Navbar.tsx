"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Bell, Heart, Cart, BrandLogo, MagnifyingGlass} from "@/assets/icons/common-icons";
import Link from 'next/link'
import {usePathname} from "next/navigation";
import {useState} from "react";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper"
import {useIsStudentPage} from "@/hooks/useStudentPage";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import SearchInput from "@/components/common/SearchInput";


const Navbar = () => {
  const pathname = usePathname();
  const [selectedLang, selectLang] = useState('eng');
  const [selectedCurrency, selectCurrency] = useState('usd');
  const [selectedBrowse, selectBrowse] = useState('');
  const isStudent = useIsStudentPage();

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

  const currency = [
    {
      value: 'usd',
      label: 'USD'
    },
    {
      value: 'euro',
      label: 'Euro'
    },
    {
      value: 'pkr',
      label: 'PKR'
    }
  ];

  const browseOptions = [
    {
      value: 'cate',
      label: 'Categories'
    },
    {
      value: 'ins',
      label: 'Instructors'
    },
    {
      value: 'course',
      label: 'Course'
    }
  ];

  return (
    <div className="w-full">
      {/* Top navbar */}
      <nav className="top-bar">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-sm text-gray-500 font-medium">
            <Link href="/" className={`${pathname === '/' && 'active'}`}>Home</Link>
            <Link href="/courses" className={`${pathname === '/courses' && 'active'}`}>Courses</Link>
            <Link href="/about" className={`${pathname === '/about' && 'active'}`}>About</Link>
            <Link href="/contact" className={`${pathname === '/contact' && 'active'}`}>Contact</Link>
            <Link href="/become-an-instructor" className={`${pathname === '/become-an-instructor' && 'active'}`}>Become an Instructor</Link>
          </div>
          <div className="flex space-x-6 text-sm">
            <DropdownMenuWrapper
                options={currency}
                selected={selectedCurrency}
                onChange={selectCurrency}
                size="sm"
                alignment="end"
                variant="dark"
            />
            <DropdownMenuWrapper
                options={languages}
                selected={selectedLang}
                onChange={selectLang}
                size="sm"
                alignment="end"
                variant="dark"
            />
          </div>
        </div>
      </nav>

      {/* Main navbar */}
      <div className="bg-white py-3 xl:py-6 px-4 xl:px-8" style={{ boxShadow: '0px -1px 0px 0px #E9EAF0 inset'}}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 xl:space-x-12">
            <Link href="/" className="flex items-center space-x-2 max-xl:[&_svg]:size-24">
              <BrandLogo />
            </Link>

            <div className="flex gap-4">
              <DropdownMenuWrapper
                  options={browseOptions}
                  selected={selectedBrowse}
                  onChange={selectBrowse}
                  defaultPlaceholder="Browse"
                  triggerClasses="min-w-[150px] xl:min-w-[200px] text-sm text-gray-700 flex items-center gap-1.5 border border-gray-100 justify-between px-[18px] py-3"
                  contentContentClasses="min-w-[150px] xl:min-w-[200px] bg-white border border-gray-100 !text-gray-900"
                  activeOptionClass="bg-gray-200"
              />

              <div className="relative hidden lg:block ">
                <SearchInput />
              </div>
            </div>


          </div>

          <div className="flex items-center space-x-6 miscellenious-links">
            <button className="text-gray-900 hover:text-etutor-primary">
              <Bell />
            </button>
            <button className="text-gray-900 hover:text-etutor-primary">
              <Heart />
            </button>
            <Link href="/shopping-cart" className={`hover:text-primary-500 ${pathname === '/shopping-cart' ? 'text-primary-500' : 'text-gray-900'}`}>
              <Cart />
            </Link>
            { isStudent ?
              <div>
                <Avatar className="size-12">
                  <AvatarImage src="/images/people/student-1.jpg"></AvatarImage>
                </Avatar>
              </div>
                :
                <div className="space-x-3">
                  <Link href="/auth/sign-up">
                    <Button
                        variant="outline"
                    >
                      Create Account
                    </Button>
                  </Link>
                  <Link href="/auth/sign-in">
                    <Button>
                      Sign in
                    </Button>
                  </Link>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
