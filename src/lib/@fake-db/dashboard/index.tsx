import React from "react";

export const statsData = [
    {
        count: 957,
        label: "Enrolled Courses",
        bgColor: "bg-primary-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M16 4C13.6266 4 11.3066 4.70379 9.33316 6.02236C7.35977 7.34094 5.8217 9.21509 4.91345 11.4078C4.0052 13.6005 3.76756 16.0133 4.23058 18.3411C4.6936 20.6689 5.83649 22.8071 7.51472 24.4853C9.19295 26.1635 11.3312 27.3064 13.6589 27.7694C15.9867 28.2324 18.3995 27.9948 20.5922 27.0866C22.7849 26.1783 24.6591 24.6402 25.9776 22.6668C27.2962 20.6935 28 18.3734 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62901 24.4853 7.51471C23.371 6.40041 22.0481 5.51649 20.5922 4.91344C19.1363 4.31038 17.5759 4 16 4ZM14 20V12L20 16L14 20Z" fill="#FF6636"/>
            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#FF6636" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M20 16L14 12V20L20 16Z" stroke="#FF6636" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
    },
    {
        count: 19,
        label: "Active Courses",
        bgColor: "bg-secondary-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M5.5 5.5V24.5L7.5 26.5H26.5V5.5H5.5Z" fill="#564FFD"/>
            <path d="M5.5 17.9091V6.5C5.5 6.23478 5.60536 5.98043 5.79289 5.79289C5.98043 5.60536 6.23478 5.5 6.5 5.5H25.5C25.7652 5.5 26.0196 5.60536 26.2071 5.79289C26.3946 5.98043 26.5 6.23478 26.5 6.5V25.5C26.5 25.7652 26.3946 26.0196 26.2071 26.2071C26.0196 26.3946 25.7652 26.5 25.5 26.5H16.9545" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 19L8 27L4 23" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    },
    {
        count: 241,
        label: "Course Instructors",
        bgColor: "bg-warning-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M11 20C14.5899 20 17.5 17.0899 17.5 13.5C17.5 9.91015 14.5899 7 11 7C7.41015 7 4.5 9.91015 4.5 13.5C4.5 17.0899 7.41015 20 11 20Z" fill="#FD8E1F"/>
            <path d="M11 20C14.5899 20 17.5 17.0899 17.5 13.5C17.5 9.91015 14.5899 7 11 7C7.41015 7 4.5 9.91015 4.5 13.5C4.5 17.0899 7.41015 20 11 20Z" stroke="#FD8E1F" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M19.4268 7.24166C20.3208 6.98977 21.2584 6.93239 22.1765 7.07338C23.0945 7.21437 23.9717 7.55046 24.749 8.05901C25.5262 8.56756 26.1855 9.23677 26.6823 10.0216C27.1791 10.8063 27.502 11.6885 27.6292 12.6086C27.7564 13.5287 27.685 14.4653 27.4197 15.3555C27.1544 16.2456 26.7014 17.0686 26.0913 17.7689C25.4812 18.4693 24.7281 19.0307 23.8827 19.4155C23.0373 19.8003 22.1193 19.9994 21.1905 19.9995" stroke="#FD8E1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.99951 24.6746C3.01468 23.2306 4.36238 22.052 5.92882 21.2384C7.49527 20.4248 9.23448 20.0001 10.9996 20C12.7648 19.9999 14.504 20.4246 16.0705 21.238C17.637 22.0515 18.9848 23.23 20.0001 24.6739" stroke="#FD8E1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.1899 20C22.9552 19.9987 24.6949 20.4228 26.2615 21.2364C27.8281 22.05 29.1757 23.2291 30.19 24.6739" stroke="#FD8E1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    },
    {
        count: 951,
        label: "Completed Courses",
        bgColor: "bg-success-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M7 7V13.887C7 18.8496 10.9693 22.963 15.9318 22.9997C17.1194 23.0088 18.297 22.7826 19.3968 22.3344C20.4966 21.8861 21.4968 21.2246 22.3398 20.388C23.1828 19.5514 23.8518 18.5563 24.3084 17.4599C24.7649 16.3635 25 15.1876 25 14V7C25 6.73478 24.8946 6.48043 24.7071 6.29289C24.5196 6.10536 24.2652 6 24 6H8C7.73478 6 7.48043 6.10536 7.29289 6.29289C7.10536 6.48043 7 6.73478 7 7Z" fill="#23BD33"/>
            <path d="M7 7V13.887C7 18.8496 10.9693 22.963 15.9318 22.9997C17.1194 23.0088 18.297 22.7826 19.3968 22.3344C20.4966 21.8861 21.4968 21.2246 22.3398 20.388C23.1828 19.5514 23.8518 18.5563 24.3084 17.4599C24.7649 16.3635 25 15.1876 25 14V7C25 6.73478 24.8946 6.48043 24.7071 6.29289C24.5196 6.10536 24.2652 6 24 6H8C7.73478 6 7.48043 6.10536 7.29289 6.29289C7.10536 6.48043 7 6.73478 7 7Z" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 28H20" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 23V28" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24.7769 16H25.9999C27.0608 16 28.0782 15.5786 28.8283 14.8284C29.5785 14.0783 29.9999 13.0609 29.9999 12V10C29.9999 9.73478 29.8945 9.48043 29.707 9.29289C29.5195 9.10536 29.2651 9 28.9999 9H24.9999" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.24576 16H5.98438C4.92351 16 3.90609 15.5786 3.15595 14.8284C2.4058 14.0783 1.98438 13.0609 1.98438 12V10C1.98438 9.73478 2.08973 9.48043 2.27727 9.29289C2.4648 9.10536 2.71916 9 2.98438 9H6.98438" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    },
];

export const additionalStats = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M16 4C13.5726 4.00002 11.2022 4.73622 9.20189 6.11139C7.20156 7.48656 5.66531 9.43604 4.79597 11.7025C3.92662 13.9689 3.76506 16.4457 4.33261 18.8058C4.90015 21.166 6.17013 23.2985 7.97486 24.9219V24.9217C8.72778 23.4405 9.87609 22.1966 11.2926 21.3279C12.709 20.4592 14.3384 19.9996 16 20C15.0111 20 14.0444 19.7068 13.2222 19.1573C12.3999 18.6079 11.759 17.827 11.3806 16.9134C11.0022 15.9998 10.9032 14.9945 11.0961 14.0245C11.289 13.0546 11.7652 12.1637 12.4645 11.4645C13.1637 10.7652 14.0546 10.289 15.0246 10.0961C15.9945 9.90315 16.9998 10.0022 17.9134 10.3806C18.8271 10.759 19.6079 11.3999 20.1574 12.2221C20.7068 13.0444 21 14.0111 21 15C21 16.3261 20.4732 17.5978 19.5355 18.5355C18.5979 19.4732 17.3261 20 16 20C17.6616 19.9996 19.291 20.4592 20.7074 21.3279C22.1239 22.1966 23.2722 23.4405 24.0252 24.9217C25.8299 23.2984 27.0999 21.1658 27.6674 18.8057C28.2349 16.4456 28.0734 13.9688 27.204 11.7024C26.3347 9.43597 24.7984 7.4865 22.7981 6.11134C20.7978 4.73618 18.4274 4.00001 16 4Z" fill="#E34444"/>
            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#E34444" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z" stroke="#E34444" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M7.9751 24.9218C8.72836 23.4408 9.87675 22.1971 11.2931 21.3284C12.7095 20.4598 14.3387 20 16.0002 20C17.6617 20 19.2909 20.4598 20.7073 21.3284C22.1237 22.1971 23.272 23.4407 24.0253 24.9217" stroke="#E34444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        count: "1,674,767", label: "Students", bgColor: "bg-error-100" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M7 5H25C25.2652 5 25.5196 5.10536 25.7071 5.29289C25.8946 5.48043 26 5.73478 26 6V25C26 25.7956 25.6839 26.5587 25.1213 27.1213C24.5587 27.6839 23.7956 28 23 28H9C8.20435 28 7.44129 27.6839 6.87868 27.1213C6.31607 26.5587 6 25.7956 6 25V6C6 5.73478 6.10536 5.48043 6.29289 5.29289C6.48043 5.10536 6.73478 5 7 5Z" fill="#23BD33"/>
            <path d="M12 16H20" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 20H20" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 5H25C25.2652 5 25.5196 5.10536 25.7071 5.29289C25.8946 5.48043 26 5.73478 26 6V25C26 25.7956 25.6839 26.5587 25.1213 27.1213C24.5587 27.6839 23.7956 28 23 28H9C8.20435 28 7.44129 27.6839 6.87868 27.1213C6.31607 26.5587 6 25.7956 6 25V6C6 5.73478 6.10536 5.48043 6.29289 5.29289C6.48043 5.10536 6.73478 5 7 5Z" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 3V7" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 3V7" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 3V7" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>, count: 3, label: "Online Courses", bgColor: "bg-success-100" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M2.99951 12.1074H28.9995L29.0002 24.0009C29.0002 24.2661 28.8949 24.5205 28.7074 24.708C28.5198 24.8955 28.2655 25.0009 28.0002 25.0009H4.00024C3.73503 25.0009 3.48067 24.8955 3.29314 24.708C3.1056 24.5205 3.00024 24.2661 3.00024 24.0009L2.99951 12.1074Z" fill="#1D2026"/>
            <path d="M28 7H4C3.44772 7 3 7.44772 3 8V24C3 24.5523 3.44772 25 4 25H28C28.5523 25 29 24.5523 29 24V8C29 7.44772 28.5523 7 28 7Z" stroke="#1D2026" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.9995 21H24.9995" stroke="#1D2026" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.9995 21H16.9995" stroke="#1D2026" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.99951 12.1074H28.9995" stroke="#1D2026" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>, count: "$7,461,767", label: "USD Total Earning", bgColor: "bg-gray-50" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M4 10L16 17L28 10L16 3L4 10Z" fill="#564FFD"/>
            <path d="M4 22L16 29L28 22" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 16L16 23L28 16" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 10L16 17L28 10L16 3L4 10Z" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>, count: "56,489", label: "Course Sold", bgColor: "bg-secondary-100" },
];

export const activities = [
    {
        id: 1,
        type: 'comment',
        user: 'Kevin',
        action: 'comments on your lecture "What is ux" in "2021 UI/UX design with figma"',
        time: 'Just now',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face'
    },
    {
        id: 2,
        type: 'rating',
        user: 'John',
        action: 'give a 5 star rating on your course "2021 ui/ux design with figma"',
        time: '5 mins ago',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face'
    },
    {
        id: 3,
        type: 'purchase',
        user: 'Sraboni',
        action: 'purchase your course "2021 ui/ux design with figma"',
        time: '9 mins ago',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=32&h=32&fit=crop&crop=face'
    },
    {
        id: 4,
        type: 'purchase',
        user: 'Arif',
        action: 'purchase your course "2021 ui/ux design with figma"',
        time: '30 mins ago',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
    },
    {
        id: 5,
        type: 'rating',
        user: 'Jack Tin',
        action: 'give a 4 star rating on your course "2021 ui/ux design with figma"',
        time: '45 mins ago',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face'
    },
];

export const courseStatsData = [
    {
        count: '1,957',
        label: "Lecture (219.3 GB)",
        bgColor: "bg-primary-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M16 4C13.6266 4 11.3066 4.70379 9.33316 6.02236C7.35977 7.34094 5.8217 9.21509 4.91345 11.4078C4.0052 13.6005 3.76756 16.0133 4.23058 18.3411C4.6936 20.6689 5.83649 22.8071 7.51472 24.4853C9.19295 26.1635 11.3312 27.3064 13.6589 27.7694C15.9867 28.2324 18.3995 27.9948 20.5922 27.0866C22.7849 26.1783 24.6591 24.6402 25.9776 22.6668C27.2962 20.6935 28 18.3734 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62901 24.4853 7.51471C23.371 6.40041 22.0481 5.51649 20.5922 4.91344C19.1363 4.31038 17.5759 4 16 4ZM14 20V12L20 16L14 20Z" fill="#FF6636"/>
            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#FF6636" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M20 16L14 12V20L20 16Z" stroke="#FF6636" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
    },
    {
        count: '51,429',
        label: "Total Commends",
        bgColor: "bg-secondary-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M5.6786 22.1245C4.18768 19.6112 3.66554 16.64 4.21024 13.7689C4.75494 10.8979 6.329 8.32442 8.63685 6.53179C10.9447 4.73916 13.8276 3.85069 16.7441 4.0332C19.6607 4.21571 22.4103 5.45665 24.4767 7.52301C26.5431 9.58936 27.784 12.339 27.9666 15.2555C28.1491 18.1721 27.2606 21.055 25.468 23.3629C23.6754 25.6707 21.1019 27.2448 18.2309 27.7895C15.3598 28.3342 12.3887 27.8121 9.87532 26.3212L9.87534 26.3211L5.73077 27.5052C5.5593 27.5542 5.37784 27.5565 5.20521 27.5117C5.03257 27.467 4.87504 27.3769 4.74894 27.2508C4.62283 27.1247 4.53275 26.9672 4.48802 26.7945C4.44328 26.6219 4.44553 26.4404 4.49452 26.269L5.67869 22.1244L5.6786 22.1245Z" fill="#564FFD"/>
            <path d="M5.6786 22.1245C4.18768 19.6112 3.66554 16.64 4.21024 13.7689C4.75494 10.8979 6.329 8.32442 8.63685 6.53179C10.9447 4.73916 13.8276 3.85069 16.7441 4.0332C19.6607 4.21571 22.4103 5.45665 24.4767 7.52301C26.5431 9.58936 27.784 12.339 27.9666 15.2555C28.1491 18.1721 27.2606 21.055 25.468 23.3629C23.6754 25.6707 21.1019 27.2448 18.2309 27.7895C15.3598 28.3342 12.3887 27.8121 9.87532 26.3212L9.87534 26.3211L5.73077 27.5052C5.5593 27.5542 5.37784 27.5565 5.20521 27.5117C5.03257 27.467 4.87504 27.3769 4.74894 27.2508C4.62283 27.1247 4.53275 26.9672 4.48802 26.7945C4.44328 26.6219 4.44553 26.4404 4.49452 26.269L5.67869 22.1244L5.6786 22.1245Z" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5Z" fill="#564FFD"/>
            <path d="M10 17.5C10.8284 17.5 11.5 16.8284 11.5 16C11.5 15.1716 10.8284 14.5 10 14.5C9.17157 14.5 8.5 15.1716 8.5 16C8.5 16.8284 9.17157 17.5 10 17.5Z" fill="#564FFD"/>
            <path d="M22 17.5C22.8284 17.5 23.5 16.8284 23.5 16C23.5 15.1716 22.8284 14.5 22 14.5C21.1716 14.5 20.5 15.1716 20.5 16C20.5 16.8284 21.1716 17.5 22 17.5Z" fill="#564FFD"/>
        </svg>
    },
    {
        count: '241',
        label: "Students enrolled",
        bgColor: "bg-error-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M11 20C14.5899 20 17.5 17.0899 17.5 13.5C17.5 9.91015 14.5899 7 11 7C7.41015 7 4.5 9.91015 4.5 13.5C4.5 17.0899 7.41015 20 11 20Z" fill="#E34444"/>
            <path d="M11 20C14.5899 20 17.5 17.0899 17.5 13.5C17.5 9.91015 14.5899 7 11 7C7.41015 7 4.5 9.91015 4.5 13.5C4.5 17.0899 7.41015 20 11 20Z" stroke="#E34444" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M19.4268 7.24166C20.3208 6.98977 21.2584 6.93239 22.1765 7.07338C23.0945 7.21437 23.9717 7.55046 24.749 8.05901C25.5262 8.56756 26.1855 9.23677 26.6823 10.0216C27.1791 10.8063 27.502 11.6885 27.6292 12.6086C27.7564 13.5287 27.685 14.4653 27.4197 15.3555C27.1544 16.2456 26.7014 17.0686 26.0913 17.7689C25.4812 18.4693 24.7281 19.0307 23.8827 19.4155C23.0373 19.8003 22.1193 19.9994 21.1905 19.9995" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 24.6746C3.01517 23.2306 4.36287 22.052 5.92931 21.2384C7.49576 20.4248 9.23497 20.0001 11.0001 20C12.7652 19.9999 14.5045 20.4246 16.071 21.238C17.6375 22.0515 18.9853 23.23 20.0006 24.6739" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.1904 20C22.9557 19.9987 24.6953 20.4228 26.262 21.2364C27.8286 22.05 29.1761 23.2291 30.1905 24.6739" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
    {
        count: 'Beginner',
        label: "Course level",
        bgColor: "bg-success-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M27 13H5V19H27V13Z" fill="#23BD33"/>
            <path d="M5 27V5" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 7H21V13" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M27 13H5V19H27V13Z" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 19V25H5" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
    {
        count: 'Mandarin',
        label: "Course Language",
        bgColor: "bg-gray-50",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M25 6V25C25 25.5304 24.7891 26.039 24.4141 26.4141C24.039 26.7891 23.5304 27 23 27H9C8.53581 27 8.08833 26.8385 7.73242 26.5469L7.58594 26.4141C7.21087 26.039 7 25.5304 7 25V6H25Z" fill="#1D2026" stroke="#1D2026" stroke-width="2"/>
            <path d="M12 16H20" stroke="#1D2026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 20H20" stroke="#1D2026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 5H25C25.2652 5 25.5196 5.10536 25.7071 5.29289C25.8946 5.48043 26 5.73478 26 6V25C26 25.7956 25.6839 26.5587 25.1213 27.1213C24.5587 27.6839 23.7956 28 23 28H9C8.20435 28 7.44129 27.6839 6.87868 27.1213C6.31607 26.5587 6 25.7956 6 25V6C6 5.73478 6.10536 5.48043 6.29289 5.29289C6.48043 5.10536 6.73478 5 7 5Z" stroke="#1D2026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 3V7" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 3V7" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 3V7" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
    {
        count: '142',
        label: "Attach File (14.4 GB)",
        bgColor: "bg-warning-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M10 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H10V27Z" fill="#FD8E1F"/>
            <path d="M14 14H22" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 18H22" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 5V27" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
    {
        count: '19:37:51',
        label: "Hours",
        bgColor: "bg-secondary-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" fill="#564FFD"/>
            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#564FFD" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M16 9V16H23" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
    {
        count: '76,395,167',
        label: "Students viewed",
        bgColor: "bg-gray-50",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M7 7V13.887C7 18.8496 10.9693 22.963 15.9318 22.9997C17.1194 23.0088 18.297 22.7826 19.3968 22.3344C20.4966 21.8861 21.4968 21.2246 22.3398 20.388C23.1828 19.5514 23.8518 18.5563 24.3084 17.4599C24.7649 16.3635 25 15.1876 25 14V7C25 6.73478 24.8946 6.48043 24.7071 6.29289C24.5196 6.10536 24.2652 6 24 6H8C7.73478 6 7.48043 6.10536 7.29289 6.29289C7.10536 6.48043 7 6.73478 7 7Z" fill="#1D2026"/>
            <path d="M7 7V13.887C7 18.8496 10.9693 22.963 15.9318 22.9997C17.1194 23.0088 18.297 22.7826 19.3968 22.3344C20.4966 21.8861 21.4968 21.2246 22.3398 20.388C23.1828 19.5514 23.8518 18.5563 24.3084 17.4599C24.7649 16.3635 25 15.1876 25 14V7C25 6.73478 24.8946 6.48043 24.7071 6.29289C24.5196 6.10536 24.2652 6 24 6H8C7.73478 6 7.48043 6.10536 7.29289 6.29289C7.10536 6.48043 7 6.73478 7 7Z" stroke="#1D2026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 28H20" stroke="#1D2026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 23V28" stroke="#1D2026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24.7764 16H25.9994C27.0603 16 28.0777 15.5786 28.8278 14.8284C29.578 14.0783 29.9994 13.0609 29.9994 12V10C29.9994 9.73478 29.8941 9.48043 29.7065 9.29289C29.519 9.10536 29.2646 9 28.9994 9H24.9994" stroke="#1D2026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.24576 16H5.98438C4.92351 16 3.90609 15.5786 3.15595 14.8284C2.4058 14.0783 1.98438 13.0609 1.98438 12V10C1.98438 9.73478 2.08973 9.48043 2.27727 9.29289C2.4648 9.10536 2.71916 9 2.98438 9H6.98438" stroke="#1D2026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
];

export const earningStatsData = [
    {
        count: '$13,804.00',
        label: "Total Revenue",
        bgColor: "bg-primary-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M4 10L16 17L28 10L16 3L4 10Z" fill="#FF6636"/>
            <path d="M4 22L16 29L28 22" stroke="#FF6636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 16L16 23L28 16" stroke="#FF6636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 10L16 17L28 10L16 3L4 10Z" stroke="#FF6636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
    },
    {
        count: '$16,593.00',
        label: "Current Balance",
        bgColor: "bg-secondary-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M4 26V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H27C27.2652 6 27.5196 6.10536 27.7071 6.29289C27.8946 6.48043 28 6.73478 28 7V26L24 24L20 26L16 24L12 26L8 24L4 26Z" fill="#564FFD"/>
            <path d="M9.5 13H22.5" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.5 17H22.5" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 26V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H27C27.2652 6 27.5196 6.10536 27.7071 6.29289C27.8946 6.48043 28 6.73478 28 7V26L24 24L20 26L16 24L12 26L8 24L4 26Z" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
    {
        count: '$13,184.00',
        label: "Total Withdrawals",
        bgColor: "bg-error-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M2.99902 12.1074H28.999L28.9998 24.0009C28.9998 24.2661 28.8944 24.5205 28.7069 24.708C28.5193 24.8955 28.265 25.0009 27.9998 25.0009H3.99976C3.73454 25.0009 3.48019 24.8955 3.29265 24.708C3.10511 24.5205 2.99976 24.2661 2.99976 24.0009L2.99902 12.1074Z" fill="#E34444"/>
            <path d="M28 7H4C3.44772 7 3 7.44772 3 8V24C3 24.5523 3.44772 25 4 25H28C28.5523 25 29 24.5523 29 24V8C29 7.44772 28.5523 7 28 7Z" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.999 21H24.999" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.999 21H16.999" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.99902 12.1074H28.999" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
    {
        count: '$162.00',
        label: "Today Revenue",
        bgColor: "bg-success-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M5.64074 24.5016C5.67191 24.633 5.72936 24.7568 5.80962 24.8655C5.88988 24.9741 5.99129 25.0655 6.10776 25.1339C6.22423 25.2024 6.35334 25.2466 6.48733 25.2638C6.62132 25.2811 6.75742 25.2711 6.88743 25.2343C12.8486 23.5884 19.1442 23.5878 25.1057 25.2326C25.2357 25.2693 25.3717 25.2793 25.5056 25.262C25.6396 25.2448 25.7686 25.2006 25.8851 25.1322C26.0015 25.0638 26.1029 24.9725 26.1832 24.8639C26.2634 24.7553 26.3209 24.6316 26.3521 24.5002L29.5382 10.9606C29.5808 10.7793 29.572 10.5898 29.5128 10.4132C29.4535 10.2367 29.3461 10.0802 29.2027 9.96144C29.0593 9.84265 28.8856 9.76625 28.7012 9.74086C28.5167 9.71546 28.3288 9.74208 28.1586 9.8177L21.8357 12.6279C21.6073 12.7294 21.3493 12.7417 21.1124 12.6625C20.8754 12.5832 20.6767 12.4182 20.5554 12.1997L16.8738 5.57295C16.7872 5.41706 16.6605 5.28716 16.5068 5.19672C16.3531 5.10628 16.178 5.05859 15.9997 5.05859C15.8213 5.05859 15.6462 5.10628 15.4925 5.19672C15.3388 5.28716 15.2121 5.41706 15.1255 5.57295L11.444 12.1997C11.3226 12.4182 11.1239 12.5832 10.887 12.6625C10.65 12.7417 10.392 12.7294 10.1637 12.6279L3.83973 9.81728C3.66961 9.74166 3.48175 9.71505 3.29731 9.74042C3.11288 9.76579 2.93919 9.84214 2.7958 9.96088C2.65241 10.0796 2.54501 10.236 2.4857 10.4125C2.42639 10.589 2.41752 10.7785 2.46009 10.9597L5.64074 24.5016Z" fill="#23BD33"/>
            <path d="M5.64074 24.5016C5.67191 24.633 5.72936 24.7568 5.80962 24.8655C5.88988 24.9741 5.99129 25.0655 6.10776 25.1339C6.22423 25.2024 6.35334 25.2466 6.48733 25.2638C6.62132 25.2811 6.75742 25.2711 6.88743 25.2343C12.8486 23.5884 19.1442 23.5878 25.1057 25.2326C25.2357 25.2693 25.3717 25.2793 25.5056 25.262C25.6396 25.2448 25.7686 25.2006 25.8851 25.1322C26.0015 25.0638 26.1029 24.9725 26.1832 24.8639C26.2634 24.7553 26.3209 24.6316 26.3521 24.5002L29.5382 10.9606C29.5808 10.7793 29.572 10.5898 29.5128 10.4132C29.4535 10.2367 29.3461 10.0802 29.2027 9.96144C29.0593 9.84265 28.8856 9.76625 28.7012 9.74086C28.5167 9.71546 28.3288 9.74208 28.1586 9.8177L21.8357 12.6279C21.6073 12.7294 21.3493 12.7417 21.1124 12.6625C20.8754 12.5832 20.6767 12.4182 20.5554 12.1997L16.8738 5.57295C16.7872 5.41706 16.6605 5.28716 16.5068 5.19672C16.3531 5.10628 16.178 5.05859 15.9997 5.05859C15.8213 5.05859 15.6462 5.10628 15.4925 5.19672C15.3388 5.28716 15.2121 5.41706 15.1255 5.57295L11.444 12.1997C11.3226 12.4182 11.1239 12.5832 10.887 12.6625C10.65 12.7417 10.392 12.7294 10.1637 12.6279L3.83973 9.81728C3.66961 9.74166 3.48175 9.71505 3.29731 9.74042C3.11288 9.76579 2.93919 9.84214 2.7958 9.96088C2.65241 10.0796 2.54501 10.236 2.4857 10.4125C2.42639 10.589 2.41752 10.7785 2.46009 10.9597L5.64074 24.5016Z" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 20.2098C14.6593 19.9301 17.3407 19.9301 20 20.2098" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
];
