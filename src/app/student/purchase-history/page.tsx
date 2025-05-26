'use client';

import React, { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {ArrowDown, CreditCard, CurrencyDollarSimple, PlayCircle, Star} from "@/assets/icons/common-icons";

interface Course {
    id: string;
    title: string;
    instructor: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
}

interface Transaction {
    id: string;
    date: string;
    courses: Course[];
    totalAmount: number;
    paymentMethod: string;
    courseCount: number;
    cardNumber?: string;
    expanded?: boolean;
}

const PurchaseHistory = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([
        {
            id: '1',
            date: '1st September, 2021 at 11:30 PM',
            courseCount: 3,
            totalAmount: 75.00,
            paymentMethod: 'Credit Card',
            cardNumber: '4142',
            courses: [
                {
                    id: '1',
                    title: 'Learn Ethical Hacking From Scratch',
                    instructor: 'Marvin McKinney',
                    price: 13.99,
                    rating: 4.7,
                    reviews: 451444,
                    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
                },
                {
                    id: '2',
                    title: 'Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates',
                    instructor: 'Esther Howard',
                    price: 49.00,
                    rating: 4.7,
                    reviews: 451444,
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
                }
            ]
        },
        {
            id: '2',
            date: '31st August, 2021 at 11:30 PM',
            courseCount: 52,
            totalAmount: 507.00,
            paymentMethod: 'Credit Card',
            courses: [
                {
                    id: '1',
                    title: 'Learn Mechanical Engineering',
                    instructor: 'Marvin McKinney',
                    price: 24.99,
                    rating: 4.3,
                    reviews: 451444,
                    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
                }
            ]
        },
        {
            id: '3',
            date: '24th August, 2021 at 6:34 PM',
            courseCount: 1,
            totalAmount: 9.00,
            paymentMethod: 'Credit Card',
            courses: [
                {
                    id: '1',
                    title: 'Learn Mechanical Engineering',
                    instructor: 'Marvin McKinney',
                    price: 24.99,
                    rating: 4.3,
                    reviews: 451444,
                    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
                }
            ]
        }
    ]);

    const toggleExpanded = (transactionId: string) => {
        setTransactions(prev =>
            prev.map(transaction =>
                transaction.id === transactionId
                    ? { ...transaction, expanded: !transaction.expanded }
                    : transaction
            )
        );
    };

    return (
        <div className="py-10">
            <h1 className="text-2xl mb-6">Purchase History</h1>

            <div className="space-y-6">
                {transactions.map((transaction) => (
                    <div key={transaction.id} className={`border border-gray-100  ${transaction.expanded ? '': 'border-b-0'}`} style={{ boxShadow: transaction.expanded ? '0px 6px 16px 0px #0000000F' : 'none'}}>
                        {/* Transaction Header */}
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-3">
                                    <span className="text-lg text-gray-900 text-left">
                                        {transaction.date}
                                    </span>
                                    <div className="flex gap-4 text-gray-700 text-sm">
                                        <div className="flex items-center space-x-2 [&_svg]:size-5">
                                            <PlayCircle />
                                            <span>{transaction.courseCount} Courses</span>
                                        </div>
                                        <div className="flex items-center space-x-2 [&_svg]:size-5 [&_svg]:text-primary-500">
                                            <CurrencyDollarSimple />
                                            <span>${transaction.totalAmount.toFixed(2)} USD</span>
                                        </div>
                                        <div className="flex items-center space-x-2 [&_svg]:size-5 [&_svg]:text-success-500">
                                            <CreditCard />
                                            <span className="text-sm">{transaction.paymentMethod}</span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    onClick={() => toggleExpanded(transaction.id)}
                                    className={`size-12 grid place-items-center cursor-pointer ${transaction.expanded ? 'bg-primary-500 text-white':'bg-gray-50 text-gray-900'}`}
                                >
                                    <div className={`transition-transform ${transaction.expanded ? 'rotate-180' : ''}`}>
                                        <ArrowDown/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Expanded Course Details */}
                        {transaction.expanded && transaction.courses.length > 0 && (
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Course List */}
                                    <div className="space-y-4">
                                        {transaction.courses.map((course) => (
                                            <div key={course.id} className="flex items-stretch space-x-5">
                                                <div className="w-40 h-28">
                                                    <img
                                                        src={course.image}
                                                        alt={course.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="w-full flex flex-col justify-between max-w-[312px]">
                                                    <div>
                                                        <div className="flex items-center space-x-2 mb-1 text-sm">
                                                            <Star/>
                                                            <span className="font-medium">{course.rating}</span>
                                                            <span
                                                                className="text-gray-500">({course.reviews.toLocaleString()} Reviews)</span>
                                                        </div>
                                                        <h3 className="font-medium text-base mt-1">{course.title}</h3></div>
                                                    <p className="text-gray-400 mt-auto">
                                                        Course by: <span className="text-gray-700">{course.instructor}</span>
                                                    </p>
                                                </div>
                                                <p className="text-primary-500 font-medium text-xl self-center">${course.price}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Receipt Card */}
                                    <Card className="border-0 border-l pl-10 flex items-center">
                                        <CardContent className="p-4 w-full">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="font-normal">{transaction.date}</h4>
                                            </div>

                                            <div className="flex gap-4 text-gray-700 text-sm">
                                                <div className="flex items-center space-x-2 [&_svg]:size-5">
                                                    <PlayCircle />
                                                    <span>{transaction.courseCount} Courses</span>
                                                </div>
                                                <div className="flex items-center space-x-2 [&_svg]:size-5 [&_svg]:text-primary-500">
                                                    <CurrencyDollarSimple />
                                                    <span>${transaction.totalAmount.toFixed(2)} USD</span>
                                                </div>
                                                <div className="flex items-center space-x-2 [&_svg]:size-5 [&_svg]:text-success-500">
                                                    <CreditCard />
                                                    <span className="text-sm">{transaction.paymentMethod}</span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between text-gray-900 mt-6">
                                                <span>Kevin Gilbert</span>
                                                <span className="text-lg">
                                                    4142 **** **** ****
                                                </span>
                                                <span>
                                                    04/24
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex gap-3 items-center justify-center mt-10">
                <p className="text-gray-900 text-base">
                    Yay! You have seen all your purchase history.
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <g filter="url(#filter0_d_301_9208)">
                        <path d="M14.3247 23.6743C20.7728 23.495 25.8546 18.1224 25.6753 11.6743C25.496 5.22624 20.1234 0.144406 13.6753 0.323734C7.22721 0.503063 2.14537 5.87564 2.3247 12.3237C2.50403 18.7718 7.87661 23.8537 14.3247 23.6743Z" fill="url(#paint0_radial_301_9208)"/>
                        <path d="M14.3247 23.6743C20.7728 23.495 25.8546 18.1224 25.6753 11.6743C25.496 5.22624 20.1234 0.144406 13.6753 0.323734C7.22721 0.503063 2.14537 5.87564 2.3247 12.3237C2.50403 18.7718 7.87661 23.8537 14.3247 23.6743Z" fill="url(#paint1_linear_301_9208)"/>
                        <path d="M13.6926 0.956302C19.7912 0.786692 24.8734 5.59303 25.0431 11.6916C25.2128 17.7904 20.4056 22.8726 14.3068 23.0422C8.20823 23.2116 3.12686 18.4045 2.95725 12.3059C2.7878 6.20734 7.5941 1.12606 13.6926 0.956302Z" stroke="#D67504" strokeOpacity="0.27" strokeWidth="1.26563"/>
                    </g>
                    <path d="M16.039 7.17474C15.2915 7.42302 14.3685 7.46351 14.0015 7.47161C13.6345 7.46351 12.7061 7.42302 11.9613 7.17474C10.5418 6.70247 8.25597 6.40292 6.51261 6.4434C5.22263 6.47579 3.88678 6.64851 3.05558 6.81583C2.68586 6.89139 2.45107 7.25301 2.53743 7.62003L2.62649 8.00054C2.67776 8.22184 2.85048 8.38646 3.06637 8.46203C3.17702 8.50251 3.28497 8.57538 3.33355 8.70491C3.48197 9.10702 4.29158 11.49 4.72877 12.3724C5.0877 13.093 6.05923 13.711 8.31804 13.7218C11.5322 13.7353 12.6441 11.6087 13.1568 10.2378C13.2108 10.0947 13.2917 9.81946 13.3646 9.55229C13.4699 9.17178 13.7019 8.79666 13.8045 8.74268C13.8666 8.713 13.9367 8.68602 14.0069 8.68602C14.0798 8.68602 14.1499 8.713 14.212 8.74268C14.3145 8.79666 14.5412 9.17178 14.6465 9.55229C14.7194 9.81946 14.8003 10.092 14.8543 10.2378C15.3643 11.6114 16.4789 13.7353 19.6904 13.7218C21.9492 13.7137 22.9207 13.0957 23.2796 12.3724C23.7168 11.4927 24.5237 9.10702 24.6748 8.70491C24.7234 8.57538 24.8287 8.50251 24.9393 8.46203C25.1552 8.38646 25.3252 8.22184 25.3792 8.00054L25.4683 7.61733C25.5519 7.25031 25.3171 6.88869 24.9501 6.81312C24.1189 6.64581 22.7831 6.47309 21.4931 6.4407C19.7416 6.40292 17.4585 6.70247 16.039 7.17474Z" fill="#261F11"/>
                    <path d="M15.508 9.30377C15.5754 10.8609 17.0921 12.356 18.5089 12.6987C20.595 13.2034 22.163 12.7527 23.0535 10.8366C23.3207 10.2591 23.8955 8.99881 23.8577 8.32684C23.793 7.1583 22.3114 7.3634 21.3641 7.34181C21.2616 7.33911 15.4135 7.17449 15.508 9.30377Z" fill="#574A2D"/>
                    <path d="M12.5508 9.30377C12.4833 10.8609 10.9666 12.356 9.54981 12.6987C7.46372 13.2034 5.89578 12.7527 5.00521 10.8366C4.73804 10.2591 4.16321 8.99881 4.20099 8.32684C4.26576 7.1583 5.74735 7.3634 6.69459 7.34181C6.79444 7.33911 12.6452 7.17449 12.5508 9.30377Z" fill="#574A2D"/>
                    <g filter="url(#filter1_di_301_9208)">
                        <path d="M16.4914 17.9777C16.1811 17.9777 15.8653 17.9561 15.5442 17.9076C15.2311 17.8617 15.0179 17.5702 15.0638 17.2572C15.1097 16.9468 15.3985 16.7309 15.7142 16.7768C17.5223 17.0467 19.1281 16.3639 19.8054 15.0334C19.9485 14.7528 20.2939 14.6421 20.5746 14.7852C20.8552 14.9282 20.9686 15.2736 20.8255 15.5543C20.0456 17.0818 18.4021 17.9777 16.4914 17.9777Z" fill="#823423"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_301_9208" x="0.615131" y="0.318359" width="26.7697" height="26.7717" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1.70518"/>
                            <feGaussianBlur stdDeviation="0.852591"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.9 0 0 0 0 0.6165 0 0 0 0 0.19125 0 0 0 0.33 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_301_9208"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_301_9208" result="shape"/>
                        </filter>
                        <filter id="filter1_di_301_9208" x="14.6313" y="14.7227" width="6.68267" height="4.10845" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="0.426295"/>
                            <feGaussianBlur stdDeviation="0.213148"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_301_9208"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_301_9208" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="0.426295"/>
                            <feGaussianBlur stdDeviation="0.426295"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_301_9208"/>
                        </filter>
                        <radialGradient id="paint0_radial_301_9208" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.6753 0.323734) rotate(88.407) scale(23.3596 23.3596)">
                            <stop stopColor="#EED919"/>
                            <stop offset="1" stopColor="#F1BE08"/>
                        </radialGradient>
                        <linearGradient id="paint1_linear_301_9208" x1="13.6753" y1="0.323734" x2="14.3247" y2="23.6743" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.52"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default PurchaseHistory;
