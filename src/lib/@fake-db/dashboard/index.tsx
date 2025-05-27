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
