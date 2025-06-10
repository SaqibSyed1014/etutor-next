'use client';

import {Facebook, Instagram, Linkedin, Twitter, Youtube} from "@/assets/icons/icons";
import {CourseCategory} from "@/lib/@fake-db/courseCategories/type";
import {Star} from "@/assets/icons/common-icons";

export const StudentCount = ({ count, showIcon }: { count?: string | number; showIcon: boolean }) => {
    return (
        <div className="flex gap-1.5 items-center">
            {showIcon && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 12.5C12.7614 12.5 15 10.2614 15 7.5C15 4.73858 12.7614 2.5 10 2.5C7.23858 2.5 5 4.73858 5 7.5C5 10.2614 7.23858 12.5 10 12.5Z" stroke="#564FFD" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M2.42114 16.8743C3.18955 15.5442 4.29443 14.4398 5.6248 13.672C6.95517 12.9042 8.46417 12.5 10.0002 12.5C11.5363 12.5 13.0453 12.9043 14.3756 13.6721C15.706 14.44 16.8108 15.5444 17.5792 16.8744" stroke="#564FFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>}

            <div className="text-sm">
                <span className="text-gray-700 font-medium">{count?.toLocaleString() ?? '265.7K'}</span>
                <span className="text-gray-500"> students</span>
            </div>
        </div>
    );
};

export const CategoryBadge = ({ category } : { category: CourseCategory }) => {
    const colorVariants = {
        primary: "bg-primary-100 text-primary-700",
        secondary: "bg-secondary-100 text-secondary-700",
        warning: "bg-warning-100 text-primary-700",
        success: "bg-success-100 text-success-700",
        error: "bg-error-100 text-error-700",
        white: "bg-white",
        gray: "bg-gray-100 text-gray-700",
    };

    const colorClass = colorVariants[category.color] ?? "bg-gray-100 text-gray-700";

    return (
        <div
            className={`inline-block text-[10px] px-2 py-1 uppercase font-medium ${colorClass}`}>
            {category.title}
        </div>
    )
}


export const Rating = ({ rating, showCount, count }: { rating?: string | number; showCount: boolean; count?: string | number }) => {
    return (
        <div className="flex items-center gap-1 text-sm">
            <Star />
            <span className="font-medium text-gray-700">{ rating ?? '5.0'}</span>
            {showCount && <span className="text-gray-500">({ count ?? '357,914'})</span>}
        </div>
    )
}

export const SocialMediaLinks = ({ inverted } : { inverted?: boolean }) => {
    const socialLinks = [
        {
            name: '',
            icon: <Facebook />,
            link: ''
        },
        {
            name: '',
            icon: <Instagram />,
            link: ''
        },
        {
            name: '',
            icon: <Linkedin />,
            link: ''
        },
        {
            name: '',
            icon: <Twitter />,
            link: ''
        },
        {
            name: '',
            icon: <Youtube />,
            link: ''
        }
    ]
    return (
        <div className="flex space-x-3">
            {socialLinks.map((item, index) => {
                return (
                    <a key={index} href="#" className={`${inverted ? 'bg-gray-50 text-gray-700 hover:text-white' : 'bg-[#363B4766] text-white'} size-[46px] flex justify-center items-center p-2 hover:bg-primary-500 hover:shadow-[0_6px_20px_0_#CC522B80] transition-colors`}>
                        {item.icon}
                    </a>
                )
            })}
        </div>
    )
}

export const Stats = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 justify-between">
            <div className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path opacity="0.2"
                          d="M13.7501 25C18.2374 25 21.8751 21.3623 21.8751 16.875C21.8751 12.3877 18.2374 8.75 13.7501 8.75C9.26275 8.75 5.62506 12.3877 5.62506 16.875C5.62506 21.3623 9.26275 25 13.7501 25Z"
                          fill="#FF6636"/>
                    <path
                        d="M13.7501 25C18.2374 25 21.8751 21.3623 21.8751 16.875C21.8751 12.3877 18.2374 8.75 13.7501 8.75C9.26275 8.75 5.62506 12.3877 5.62506 16.875C5.62506 21.3623 9.26275 25 13.7501 25Z"
                        stroke="#FF6636" strokeWidth="2" strokeMiterlimit="10"/>
                    <path
                        d="M24.2831 9.05452C25.4006 8.73965 26.5727 8.66792 27.7203 8.84416C28.8678 9.0204 29.9643 9.44051 30.9359 10.0762C31.9074 10.7119 32.7315 11.5484 33.3525 12.5294C33.9736 13.5104 34.3772 14.613 34.5362 15.7632C34.6952 16.9133 34.6059 18.0841 34.2743 19.1968C33.9427 20.3094 33.3765 21.3381 32.6138 22.2136C31.8512 23.089 30.9098 23.7908 29.853 24.2718C28.7963 24.7528 27.6488 25.0017 26.4877 25.0019"
                        stroke="#FF6636" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M2.49921 30.8432C3.76817 29.0382 5.45279 27.565 7.41085 26.548C9.36891 25.531 11.5429 25.0001 13.7493 25C15.9558 24.9999 18.1298 25.5307 20.0879 26.5476C22.0461 27.5644 23.7308 29.0375 24.9999 30.8424"
                        stroke="#FF6636" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M26.4878 25C28.6944 24.9984 30.8689 25.5285 32.8272 26.5455C34.7855 27.5625 36.4699 29.0364 37.7378 30.8424"
                        stroke="#FF6636" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex flex-col items-start gap-2">
                    <h3>671k</h3>
                    <div className="text-gray-700 font-medium text-sm">Students</div>
                </div>
            </div>

            <div className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path opacity="0.2"
                          d="M12.5 33.75H7.5C7.16848 33.75 6.85054 33.6183 6.61612 33.3839C6.3817 33.1495 6.25 32.8315 6.25 32.5V7.5C6.25 7.16848 6.3817 6.85054 6.61612 6.61612C6.85054 6.3817 7.16848 6.25 7.5 6.25H12.5V33.75Z"
                          fill="#564FFD"/>
                    <path d="M17.5 17.5H27.5" stroke="#564FFD" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M17.5 22.5H27.5" stroke="#564FFD" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path
                        d="M32.5 6.25H7.5C6.80964 6.25 6.25 6.80964 6.25 7.5V32.5C6.25 33.1904 6.80964 33.75 7.5 33.75H32.5C33.1904 33.75 33.75 33.1904 33.75 32.5V7.5C33.75 6.80964 33.1904 6.25 32.5 6.25Z"
                        stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5 6.25V33.75" stroke="#564FFD" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
                <div className="flex flex-col items-start gap-2">
                    <h3>26k</h3>
                    <div className="text-gray-700 font-medium text-sm">Certified Instructor</div>
                </div>
            </div>

            <div className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path opacity="0.2"
                          d="M20.3509 34.9964C23.0934 34.9327 25.7659 34.1183 28.0778 32.6416C30.3897 31.165 32.2524 29.0827 33.4634 26.6213L33.4631 26.6211L24.9809 21.4042C24.8322 21.3127 24.666 21.2534 24.493 21.2301L20.9276 20.7495C20.6599 20.7134 20.3877 20.765 20.1517 20.8966C19.9158 21.0282 19.7288 21.2327 19.6189 21.4795L17.4784 26.2823C17.3789 26.5057 17.347 26.7533 17.3868 26.9946C17.4266 27.2359 17.5363 27.4602 17.7023 27.6397L20.6398 30.817C20.773 30.961 20.8704 31.1344 20.9241 31.3231C20.9779 31.5117 20.9865 31.7104 20.9492 31.903L20.3509 34.9962L20.3509 34.9964Z"
                          fill="#E34444"/>
                    <path opacity="0.2"
                          d="M16.8167 6.36816C18.9041 5.8801 21.074 5.87713 23.1594 6.35742L24.4065 8.5918C24.4203 8.6166 24.43 8.6433 24.4348 8.6709V8.75391C24.4302 8.78168 24.4217 8.80862 24.4084 8.83301L24.3567 8.89941L20.1516 12.7021L20.1047 12.7354L18.1917 13.791C18.1546 13.8114 18.1128 13.8223 18.0706 13.8223H14.7356L14.5706 13.8291C14.2411 13.8534 13.921 13.9494 13.6331 14.1113L13.4915 14.1982C13.1687 14.4125 12.9071 14.7055 12.7317 15.0488L12.6624 15.1992L11.6829 17.5244L11.6458 17.5166L11.5862 17.4961L11.5344 17.4609C11.5188 17.4474 11.5052 17.4319 11.4934 17.415L11.4641 17.3594L9.66821 12.5674C9.65146 12.5224 9.64854 12.474 9.65845 12.4277L9.67212 12.3828L10.9758 9.29688C12.5553 7.96724 14.4081 7.00337 16.4016 6.47266L16.8167 6.36816Z"
                          fill="#E34444" stroke="#E34444" strokeWidth="2"/>
                    <path
                        d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
                        stroke="#E34444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M33.4631 26.6211L24.9809 21.4042C24.8322 21.3127 24.666 21.2534 24.493 21.2301L20.9276 20.7495C20.6599 20.7134 20.3877 20.765 20.1517 20.8966C19.9158 21.0282 19.7288 21.2327 19.6189 21.4795L17.4784 26.2823C17.3789 26.5057 17.347 26.7533 17.3868 26.9946C17.4266 27.2359 17.5363 27.4602 17.7023 27.6397L20.6398 30.817C20.773 30.961 20.8704 31.1344 20.9241 31.3231C20.9779 31.5117 20.9865 31.7104 20.9492 31.903L20.3509 34.9962"
                        stroke="#E34444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M10.1488 8.6875L8.75131 11.9921C8.6267 12.2868 8.61981 12.618 8.73205 12.9176L10.5275 17.7095C10.601 17.9057 10.7227 18.0803 10.8813 18.2172C11.04 18.3542 11.2305 18.449 11.4354 18.493L14.7838 19.2127C14.9696 19.2526 15.1438 19.3344 15.2933 19.4518C15.4427 19.5692 15.5635 19.7191 15.6463 19.8902L16.2409 21.1186C16.3432 21.33 16.503 21.5083 16.702 21.6331C16.901 21.7578 17.1311 21.824 17.366 21.824H19.4648"
                        stroke="#E34444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M23.8215 5.49219L25.2799 8.10444C25.4178 8.35138 25.4678 8.63779 25.4219 8.91685C25.3759 9.19592 25.2367 9.45116 25.0269 9.64087L20.8221 13.4436C20.7508 13.5081 20.6722 13.5642 20.588 13.6107L18.6752 14.667C18.4902 14.7692 18.2823 14.8228 18.0709 14.8228H14.7357C14.4897 14.8228 14.2492 14.8954 14.0443 15.0314C13.8394 15.1674 13.6792 15.3609 13.5837 15.5876L12.2826 18.6764"
                        stroke="#E34444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex flex-col items-start gap-2">
                    <h3>72</h3>
                    <div className="text-gray-700 font-medium text-sm">Country Language</div>
                </div>
            </div>

            <div className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path opacity="0.2"
                          d="M8.50951 31.4905C7.07139 30.0524 8.02524 27.0331 7.29325 25.2639C6.53443 23.43 3.75 21.9539 3.75 19.9999C3.75 18.046 6.53445 16.57 7.29325 14.7361C8.02525 12.9669 7.07139 9.94764 8.50951 8.50951C9.94764 7.07139 12.9669 8.02524 14.7361 7.29325C16.5701 6.53443 18.0461 3.75 20.0001 3.75C21.954 3.75 23.43 6.53445 25.2639 7.29325C27.0331 8.02525 30.0524 7.07139 31.4905 8.50951C32.9286 9.94764 31.9748 12.9669 32.7068 14.7361C33.4656 16.5701 36.25 18.0461 36.25 20.0001C36.25 21.954 33.4656 23.43 32.7067 25.2639C31.9747 27.0331 32.9286 30.0524 31.4905 31.4905C30.0524 32.9286 27.0331 31.9748 25.2639 32.7068C23.43 33.4656 21.9539 36.25 19.9999 36.25C18.046 36.25 16.57 33.4656 14.7361 32.7067C12.9669 31.9747 9.94764 32.9286 8.50951 31.4905Z"
                          fill="#23BD33"/>
                    <path
                        d="M8.50951 31.4905C7.07139 30.0524 8.02524 27.0331 7.29325 25.2639C6.53443 23.43 3.75 21.9539 3.75 19.9999C3.75 18.046 6.53445 16.57 7.29325 14.7361C8.02525 12.9669 7.07139 9.94764 8.50951 8.50951C9.94764 7.07139 12.9669 8.02524 14.7361 7.29325C16.57 6.53443 18.0461 3.75 20.0001 3.75C21.954 3.75 23.43 6.53445 25.2639 7.29325C27.0331 8.02525 30.0524 7.07139 31.4905 8.50951C32.9286 9.94764 31.9748 12.9669 32.7068 14.7361C33.4656 16.57 36.25 18.0461 36.25 20.0001C36.25 21.954 33.4656 23.43 32.7067 25.2639C31.9747 27.0331 32.9286 30.0524 31.4905 31.4905C30.0524 32.9286 27.0331 31.9748 25.2639 32.7068C23.43 33.4656 21.9539 36.25 19.9999 36.25C18.046 36.25 16.57 33.4656 14.7361 32.7067C12.9669 31.9747 9.94764 32.9286 8.50951 31.4905Z"
                        stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26.875 16.25L17.7083 25L13.125 20.625" stroke="#23BD33" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex flex-col items-start gap-2">
                    <h3>99.9%</h3>
                    <div className="text-gray-700 font-medium text-sm">Success Rate</div>
                </div>
            </div>

            <div className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path opacity="0.2" d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z" fill="#FD8E1F"/>
                    <path d="M5 27.5L20 36.25L35 27.5" stroke="#FD8E1F" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M5 20L20 28.75L35 20" stroke="#FD8E1F" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z" stroke="#FD8E1F" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex flex-col items-start gap-2">
                    <h3>57</h3>
                    <div className="text-gray-700 font-medium text-sm">Trusted Companies</div>
                </div>
            </div>
        </div>
    )
}
