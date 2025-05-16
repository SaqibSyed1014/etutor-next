import {
    GoogleLogo,
    LenovoLogo, LexMarkLogo, MicrosoftLogo, NetflixLogo,
    SlackLogo, VerizonLogo, YoutubeLogo
} from "@/assets/icons/icons.tsx";
import {Company, Perk, JobPosition} from "@/lib/@fake-db/collections/type.ts";



export const trustedCompanies: Company[] = [
    {
        id: '1',
        name: 'Netflix',
        logo: <NetflixLogo />,
        review: 'Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.',
        reviewer: 'Ted Sarandos',
        designation: 'Chief Executive Officer'
    },
    {
        id: '2',
        name: 'YouTube',
        logo: <YoutubeLogo />,
        review: 'Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.',
        reviewer: 'Sundar Pichai',
        designation: 'Chief Chairman'
    },
    {
        id: '3',
        name: 'Google',
        logo: <GoogleLogo />,
        review: 'Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.',
        reviewer: 'Sundar Pichai',
        designation: 'Chief Chairman'
    },
    {
        id: '4',
        name: 'Lenovo',
        logo: <LenovoLogo />,
        review: 'Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.',
        reviewer: 'Sundar Pichai',
        designation: 'Chief Chairman'
    },
    {
        id: '5',
        name: 'Slack',
        logo: <SlackLogo />,
        review: 'Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.',
        reviewer: 'Sundar Pichai',
        designation: 'Chief Chairman'
    },
    {
        id: '6',
        name: 'Verizon',
        logo: <VerizonLogo />,
        review: 'Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.',
        reviewer: 'Sundar Pichai',
        designation: 'Chief Chairman'
    },
    {
        id: '7',
        name: 'Lexmark',
        logo: <LexMarkLogo />,
        review: 'Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.',
        reviewer: 'Sundar Pichai',
        designation: 'Chief Chairman'
    },
    {
        id: '8',
        name: 'Microsoft',
        logo: <MicrosoftLogo />,
        review: 'Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.',
        reviewer: 'Satya Nadella',
        designation: 'CEO'
    }
];

export const perksAndBenefits: Perk[] = [
    {
        id: 1,
        title: "Healthy Food & Snacks",
        bgColor: "bg-primary-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M25.5 20H18.5C18.5 20 20 6 25.5 4" fill="#FF6636"/>
            <path d="M10.5 4V9" stroke="#FF6636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 14.5V28" stroke="#FF6636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 4L15 10C15 11.1935 14.5259 12.3381 13.682 13.182C12.8381 14.0259 11.6935 14.5 10.5 14.5C9.30653 14.5 8.16193 14.0259 7.31802 13.182C6.47411 12.3381 6 11.1935 6 10L7 4" stroke="#FF6636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.5 20H18.5C18.5 20 20 6 25.5 4V28" stroke="#FF6636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
    {
        id: 2,
        title: "Personal Career Growth",
        bgColor: "bg-secondary-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M27 13H5V19H27V13Z" fill="#564FFD"/>
            <path d="M5 27V5" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 7H21V13" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M27 13H5V19H27V13Z" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 19V25H5" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
    },
    {
        id: 3,
        title: "Vacation & Paid Time Off",
        bgColor: "bg-success-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M26 19.9985V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26H7C6.73478 26 6.48043 25.8946 6.29289 25.7071C6.10536 25.5196 6 25.2652 6 25V20C4.93913 20 3.92172 19.5786 3.17157 18.8284C2.42143 18.0783 2 17.0609 2 16C2 14.9391 2.42143 13.9217 3.17157 13.1716C3.92172 12.4214 4.93913 12 6 12V9C6 7.93913 6.42143 6.92172 7.17157 6.17157C7.92172 5.42143 8.93913 5 10 5H22C23.0609 5 24.0783 5.42143 24.8284 6.17157C25.5786 6.92172 26 7.93913 26 9V12C27.0609 12 28.0783 12.4214 28.8284 13.1716C29.5786 13.9217 30 14.9391 30 16C30 17.0609 29.5786 18.0783 28.8284 18.8284C28.0783 19.5786 27.0609 20 26 20V19.9985Z" fill="#23BD33"/>
            <path d="M10 17H22" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 12V9C6 7.93913 6.42143 6.92172 7.17157 6.17157C7.92172 5.42143 8.93913 5 10 5H22C23.0609 5 24.0783 5.42143 24.8284 6.17157C25.5786 6.92172 26 7.93913 26 9V12" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 21V16C10 15.2089 9.76541 14.4355 9.32588 13.7777C8.88636 13.1199 8.26164 12.6072 7.53074 12.3045C6.79983 12.0017 5.99556 11.9225 5.21964 12.0769C4.44372 12.2312 3.73098 12.6122 3.17157 13.1716C2.61216 13.731 2.2312 14.4437 2.07686 15.2196C1.92252 15.9956 2.00173 16.7998 2.30448 17.5307C2.60723 18.2616 3.11992 18.8864 3.77772 19.3259C4.43552 19.7654 5.20888 20 6 20V25C6 25.2652 6.10536 25.5196 6.2929 25.7071C6.48043 25.8946 6.73479 26 7 26H25C25.2652 26 25.5196 25.8946 25.7071 25.7071C25.8946 25.5196 26 25.2652 26 25V20C26.7911 20 27.5645 19.7654 28.2223 19.3259C28.8801 18.8864 29.3928 18.2616 29.6955 17.5307C29.9983 16.7998 30.0775 15.9956 29.9231 15.2196C29.7688 14.4437 29.3878 13.731 28.8284 13.1716C28.269 12.6122 27.5563 12.2312 26.7804 12.0769C26.0044 11.9225 25.2002 12.0017 24.4693 12.3045C23.7384 12.6072 23.1137 13.1199 22.6741 13.7777C22.2346 14.4355 22 15.2089 22 16V21" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
    {
        id: 4,
        title: "Special Allowance & Bonuse",
        bgColor: "bg-warning-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M27 10H5C4.44771 10 4 10.4477 4 11V15C4 15.5523 4.44771 16 5 16H27C27.5523 16 28 15.5523 28 15V11C28 10.4477 27.5523 10 27 10Z" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 16V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26H7C6.73478 26 6.48043 25.8946 6.29289 25.7071C6.10536 25.5196 6 25.2652 6 25V16" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 10V26" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.6569 8.58496C20.2426 9.99917 16 9.99917 16 9.99917C16 9.99917 16 5.75653 17.4142 4.34232C17.9769 3.78024 18.7398 3.46462 19.5352 3.46484C20.3305 3.46507 21.0932 3.78112 21.6556 4.34352C22.218 4.90592 22.5341 5.66864 22.5343 6.46399C22.5346 7.25934 22.2189 8.02224 21.6569 8.58496V8.58496Z" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.3433 8.58496C11.7575 9.99917 16.0001 9.99917 16.0001 9.99917C16.0001 9.99917 16.0001 5.75653 14.5859 4.34232C14.0232 3.78024 13.2603 3.46462 12.465 3.46484C11.6696 3.46507 10.9069 3.78112 10.3445 4.34352C9.7821 4.90592 9.46605 5.66864 9.46582 6.46399C9.46559 7.25934 9.78121 8.02224 10.3433 8.58496V8.58496Z" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.2" d="M26 16V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26H7C6.73478 26 6.48043 25.8946 6.29289 25.7071C6.10536 25.5196 6 25.2652 6 25V16H26Z" fill="#FD8E1F"/>
        </svg>
    },
    {
        id: 5,
        title: "Competitive Salary",
        bgColor: "bg-success-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M2.99951 12.1055H28.9995L29.0002 23.9989C29.0002 24.2642 28.8949 24.5185 28.7074 24.706C28.5198 24.8936 28.2655 24.9989 28.0002 24.9989H4.00024C3.73503 24.9989 3.48067 24.8936 3.29314 24.706C3.1056 24.5185 3.00024 24.2642 3.00024 23.9989L2.99951 12.1055Z" fill="#23BD33"/>
            <path d="M28 7H4C3.44772 7 3 7.44772 3 8V24C3 24.5523 3.44772 25 4 25H28C28.5523 25 29 24.5523 29 24V8C29 7.44772 28.5523 7 28 7Z" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.9995 21H24.9995" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.9995 21H16.9995" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.99951 12.1055H28.9995" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
    {
        id: 6,
        title: "Well-being memberships",
        bgColor: "bg-primary-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M25 19.1066L20.4004 23.7063C20.2783 23.8284 20.1266 23.9168 19.9602 23.9629C19.7938 24.009 19.6182 24.0112 19.4507 23.9693L12.2061 22.1582C12.0702 22.1242 11.943 22.062 11.8326 21.9758L5 16.6329L9.0718 8.97266L15.4868 7.10247C15.716 7.03566 15.9614 7.05303 16.1789 7.15143L20.5 9.10663H17.9142C17.7829 9.10663 17.6529 9.13249 17.5315 9.18275C17.4102 9.233 17.3 9.30666 17.2071 9.39952L12.3153 14.2913C12.214 14.3926 12.1356 14.5145 12.0855 14.6488C12.0354 14.783 12.0148 14.9264 12.0249 15.0693C12.0351 15.2122 12.0758 15.3513 12.1444 15.4771C12.213 15.6029 12.3078 15.7125 12.4224 15.7984L13.1 16.3066C13.7924 16.8259 14.6345 17.1066 15.5 17.1066C16.3655 17.1066 17.2076 16.8259 17.9 16.3066L19.5 15.1066L25 19.1066Z" fill="#E34444"/>
            <path d="M30.0897 15.223L27 16.7678L23 9.10756L26.1212 7.54698C26.3557 7.42973 26.6268 7.40926 26.8763 7.48998C27.1257 7.5707 27.3335 7.74614 27.4548 7.97854L30.5289 13.8657C30.5904 13.9834 30.6278 14.1122 30.639 14.2445C30.6501 14.3768 30.6348 14.5101 30.5939 14.6364C30.553 14.7628 30.4874 14.8797 30.4008 14.9804C30.3143 15.0811 30.2085 15.1636 30.0897 15.223V15.223Z" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.99991 16.635L1.91021 15.0902C1.79143 15.0308 1.68567 14.9483 1.5991 14.8476C1.51253 14.7469 1.44688 14.63 1.406 14.5036C1.36511 14.3773 1.3498 14.244 1.36096 14.1117C1.37212 13.9794 1.40953 13.8506 1.471 13.7329L4.54511 7.84573C4.66646 7.61333 4.87422 7.43789 5.12366 7.35717C5.3731 7.27645 5.64426 7.29692 5.87875 7.41417L8.99991 8.97475L4.99991 16.635Z" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M27 16.7668L25 19.1065L20.4004 23.7062C20.2783 23.8283 20.1266 23.9167 19.9602 23.9628C19.7938 24.0089 19.6182 24.0111 19.4507 23.9692L12.2061 22.1581C12.0702 22.1241 11.943 22.0619 11.8326 21.9757L5 16.6328" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.0001 19.1094L19.5001 15.1094L17.9001 16.3094C17.2077 16.8287 16.3655 17.1094 15.5001 17.1094C14.6346 17.1094 13.7924 16.8287 13.1001 16.3094L12.4225 15.8012C12.3078 15.7152 12.213 15.6056 12.1445 15.4798C12.0759 15.354 12.0351 15.215 12.025 15.0721C12.0148 14.9292 12.0355 14.7857 12.0856 14.6515C12.1357 14.5173 12.214 14.3954 12.3154 14.2941L17.2072 9.40227C17.3 9.30941 17.4103 9.23575 17.5316 9.1855C17.6529 9.13524 17.7829 9.10937 17.9143 9.10938H23.0001" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.07178 8.97266L15.4868 7.10247C15.7159 7.03566 15.9614 7.05303 16.1789 7.15143L20.5 9.10663" stroke="#E34444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 26.6077L10.2326 25.6658C10.0797 25.6276 9.938 25.5538 9.81907 25.4504L7 23" stroke="#E34444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
    {
        id: 7,
        title: "Maternity/Paternity Benefits",
        bgColor: "bg-gray-50",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M7 7V13.887C7 18.8496 10.9693 22.963 15.9318 22.9997C17.1194 23.0088 18.297 22.7826 19.3968 22.3344C20.4966 21.8861 21.4968 21.2246 22.3398 20.388C23.1828 19.5514 23.8518 18.5563 24.3084 17.4599C24.7649 16.3635 25 15.1876 25 14V7C25 6.73478 24.8946 6.48043 24.7071 6.29289C24.5196 6.10536 24.2652 6 24 6H8C7.73478 6 7.48043 6.10536 7.29289 6.29289C7.10536 6.48043 7 6.73478 7 7Z" fill="#1D2026"/>
            <path d="M7 7V13.887C7 18.8496 10.9693 22.963 15.9318 22.9997C17.1194 23.0088 18.297 22.7826 19.3968 22.3344C20.4966 21.8861 21.4968 21.2246 22.3398 20.388C23.1828 19.5514 23.8518 18.5563 24.3084 17.4599C24.7649 16.3635 25 15.1876 25 14V7C25 6.73478 24.8946 6.48043 24.7071 6.29289C24.5196 6.10536 24.2652 6 24 6H8C7.73478 6 7.48043 6.10536 7.29289 6.29289C7.10536 6.48043 7 6.73478 7 7Z" stroke="#1D2026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 28H20" stroke="#1D2026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 23V28" stroke="#1D2026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24.7769 16H25.9999C27.0608 16 28.0782 15.5786 28.8283 14.8284C29.5785 14.0783 29.9999 13.0609 29.9999 12V10C29.9999 9.73478 29.8945 9.48043 29.707 9.29289C29.5195 9.10536 29.2651 9 28.9999 9H24.9999" stroke="#1D2026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.24576 16H5.98438C4.92351 16 3.90609 15.5786 3.15595 14.8284C2.4058 14.0783 1.98438 13.0609 1.98438 12V10C1.98438 9.73478 2.08973 9.48043 2.27727 9.29289C2.4648 9.10536 2.71916 9 2.98438 9H6.98438" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    },
    {
        id: 8,
        title: "Eduguard Annual Events",
        bgColor: "bg-secondary-100",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M25.5 20H18.5C18.5 20 20 6 25.5 4" fill="#564FFD"/>
            <path d="M10.5 4V9" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 14.5V28" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 4L15 10C15 11.1935 14.5259 12.3381 13.682 13.182C12.8381 14.0259 11.6935 14.5 10.5 14.5C9.30653 14.5 8.16193 14.0259 7.31802 13.182C6.47411 12.3381 6 11.1935 6 10L7 4" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.5 20H18.5C18.5 20 20 6 25.5 4V28" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    }
];

export const openPositions: JobPosition[] = [
    {
        id: 1,
        title: "Product Designer (UI/UX Designer)",
        location: {
            city: "Tokyo",
            country: "Japan"
        },
        type: "Full-Time",
        vacancies: 1,
        deadline: "30 June, 2021",
        description: "Sed lacinia accumsan eros in pretium. Praesent vitae eros condimentum, elementum nisi quis, vestibulum nulla. Aenean quis nibh ullamcorper, suscipit magna et, pretium nisi. Sed sed egestas mi. Donec viverra efficitur ipsum, ut cursus risus fringilla id.",
        requirements: [
            "Vestibulum hendrerit facilisis libero, pretium condimentum ipsum vulputate at.",
            "Quisque varius auctor augue id blandit.",
            "Dici virtus natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "Ut ut magna condimentum, pharetra est nec, lacinia nulla.",
            "Aliquam tempus mollis sem eget ullamcorper.",
            "Donec non orci eget lorem laoreet ullamcorper et et magna.",
            "Curabitur quis ipsum sollicitudin, sagittis elit in, sodales felis.",
            "Nam bibendum tristique nibh id tristique.",
            "Vestibulum lorem libero, rutrum vitae tincidunt quis, sodales quis neque."
        ],
        address: '1702 Olympic Boulevard Santa Monica, CA 90404',
    },
    {
        id: 2,
        title: "Social Media Manager",
        location: {
            city: "Moscow",
            country: "Russia"
        },
        type: "Full-Time",
        vacancies: 1,
        deadline: "30 June, 2021",
        description: "Sed lacinia accumsan eros in pretium. Praesent vitae eros condimentum, elementum nisi quis, vestibulum nulla. Aenean quis nibh ullamcorper, suscipit magna et, pretium nisi.",
        requirements: [
            "Vestibulum hendrerit facilisis libero, pretium condimentum ipsum vulputate at.",
            "Quisque varius auctor augue id blandit.",
            "Dici virtus natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "Ut ut magna condimentum, pharetra est nec, lacinia nulla."
        ],
        address: '1702 Olympic Boulevard Santa Monica, CA 90404',
    },
    {
        id: 3,
        title: "Director of Accounting",
        location: {
            city: "Mumbai",
            country: "India"
        },
        type: "Full-Time",
        vacancies: 3,
        deadline: "30 June, 2021",
        description: "Sed lacinia accumsan eros in pretium. Praesent vitae eros condimentum, elementum nisi quis, vestibulum nulla. Aenean quis nibh ullamcorper, suscipit magna et.",
        requirements: [
            "Vestibulum hendrerit facilisis libero, pretium condimentum ipsum vulputate at.",
            "Quisque varius auctor augue id blandit.",
            "Dici virtus natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "Ut ut magna condimentum, pharetra est nec, lacinia nulla."
        ],
        address: '1702 Olympic Boulevard Santa Monica, CA 90404',
    },
    {
        id: 4,
        title: "Principal Software Engineer",
        location: {
            city: "Tokyo",
            country: "Japan"
        },
        type: "Full-Time",
        vacancies: 1,
        deadline: "30 June, 2021",
        description: "Sed lacinia accumsan eros in pretium. Praesent vitae eros condimentum, elementum nisi quis, vestibulum nulla. Aenean quis nibh ullamcorper.",
        requirements: [
            "Vestibulum hendrerit facilisis libero, pretium condimentum ipsum vulputate at.",
            "Quisque varius auctor augue id blandit.",
            "Dici virtus natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        ],
        address: '1702 Olympic Boulevard Santa Monica, CA 90404',
    }
];


