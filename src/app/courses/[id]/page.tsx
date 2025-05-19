'use client';

import { useParams } from "next/navigation";;
import { coursesData } from "@/lib/@fake-db/courses";
import { Clock, Video, Users, NotebookPen } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {Rating} from "@/components/tiny/tiny-collection";
import Link from "next/link";
import {Facebook, Instagram, Linkedin, Twitter, Youtube} from "@/assets/icons/icons";
import {ArrowRight} from "@/assets/icons/common-icons";

export default function CourseDetailsPage() {
    const params = useParams();
    const id = params?.id;

    const course =
        coursesData.find((c) => c.id === Number(id)) || coursesData[0];

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
            icon: <Youtube />,
            link: ''
        }
    ]


    return (
        <DefaultLayout>
            <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-[380px] bg-gray-50"></div>
                <div className="container">
                    <div className="grid grid-cols-6 gap-6 py-20 relative">
                        <div className="col-span-4">
                            <div className="flex flex-col">
                                <div className="flex gap-2 items-center text-sm text-gray-600">
                                    Home
                                    <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="7" height="10"
                                         viewBox="0 0 7 10" fill="none">
                                        <path d="M1.25 0.625L5.625 5L1.25 9.375" stroke="#6E7485" strokeWidth="1.2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Development
                                    <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="7" height="10"
                                         viewBox="0 0 7 10" fill="none">
                                        <path d="M1.25 0.625L5.625 5L1.25 9.375" stroke="#6E7485" strokeWidth="1.2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Web Development
                                    <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="7" height="10"
                                         viewBox="0 0 7 10" fill="none">
                                        <path d="M1.25 0.625L5.625 5L1.25 9.375" stroke="#6E7485" strokeWidth="1.2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Webflow
                                </div>
                                <h1 className="text-[32px] leading-[40px] mt-3">{course.title}</h1>
                                <p className="text-xl my-6">3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="flex">
                                            <div className="size-[50px] shrink-0 rounded-full overflow-hidden">
                                                <img src={course.instructor.avatar} alt={course.instructor.name}
                                                     className="w-full h-full object-cover"/>
                                            </div>
                                            {course.coInstructor && <div
                                                className="size-[50px] shrink-0 rounded-full overflow-hidden border border-white ml-[-1rem]">
                                                <img src={course.coInstructor.avatar} alt={course.coInstructor.name}
                                                     className="w-full h-full object-cover"/>
                                            </div>}
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="text-gray-600 text-sm">Created By:</div>
                                            <span className="text-gray-900 font-medium text-base">{course.instructor.name}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 text-sm">
                                        <div className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M10.3446 14.901L14.2849 17.3974C14.7886 17.7165 15.4139 17.2419 15.2644 16.654L14.126 12.1756C14.0939 12.0509 14.0977 11.9197 14.137 11.797C14.1762 11.6743 14.2492 11.5652 14.3477 11.4822L17.8811 8.54132C18.3453 8.1549 18.1057 7.38439 17.5092 7.34567L12.8949 7.0462C12.7706 7.03732 12.6514 6.99332 12.5511 6.91931C12.4509 6.84531 12.3737 6.74435 12.3286 6.62819L10.6076 2.29436C10.5609 2.17106 10.4777 2.06492 10.3692 1.99002C10.2606 1.91511 10.1319 1.875 10 1.875C9.86813 1.875 9.73938 1.91511 9.63085 1.99002C9.52232 2.06492 9.43914 2.17106 9.39236 2.29436L7.6714 6.62819C7.62631 6.74435 7.54914 6.84531 7.4489 6.91931C7.34865 6.99332 7.22944 7.03732 7.10515 7.0462L2.49078 7.34567C1.89429 7.38439 1.65466 8.1549 2.11894 8.54132L5.65232 11.4822C5.75079 11.5652 5.82383 11.6743 5.86305 11.797C5.90226 11.9197 5.90606 12.0509 5.874 12.1756L4.81824 16.3288C4.63889 17.0343 5.38929 17.6038 5.99369 17.2209L9.65539 14.901C9.75837 14.8354 9.87792 14.8006 10 14.8006C10.1221 14.8006 10.2416 14.8354 10.3446 14.901Z"
                                                    fill="#FD8E1F"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M10.3446 14.901L14.2849 17.3974C14.7886 17.7165 15.4139 17.2419 15.2644 16.654L14.126 12.1756C14.0939 12.0509 14.0977 11.9197 14.137 11.797C14.1762 11.6743 14.2492 11.5652 14.3477 11.4822L17.8811 8.54132C18.3453 8.1549 18.1057 7.38439 17.5092 7.34567L12.8949 7.0462C12.7706 7.03732 12.6514 6.99332 12.5511 6.91931C12.4509 6.84531 12.3737 6.74435 12.3286 6.62819L10.6076 2.29436C10.5609 2.17106 10.4777 2.06492 10.3692 1.99002C10.2606 1.91511 10.1319 1.875 10 1.875C9.86813 1.875 9.73938 1.91511 9.63085 1.99002C9.52232 2.06492 9.43914 2.17106 9.39236 2.29436L7.6714 6.62819C7.62631 6.74435 7.54914 6.84531 7.4489 6.91931C7.34865 6.99332 7.22944 7.03732 7.10515 7.0462L2.49078 7.34567C1.89429 7.38439 1.65466 8.1549 2.11894 8.54132L5.65232 11.4822C5.75079 11.5652 5.82383 11.6743 5.86305 11.797C5.90226 11.9197 5.90606 12.0509 5.874 12.1756L4.81824 16.3288C4.63889 17.0343 5.38929 17.6038 5.99369 17.2209L9.65539 14.901C9.75837 14.8354 9.87792 14.8006 10 14.8006C10.1221 14.8006 10.2416 14.8354 10.3446 14.901Z"
                                                    fill="#FD8E1F"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M10.3446 14.901L14.2849 17.3974C14.7886 17.7165 15.4139 17.2419 15.2644 16.654L14.126 12.1756C14.0939 12.0509 14.0977 11.9197 14.137 11.797C14.1762 11.6743 14.2492 11.5652 14.3477 11.4822L17.8811 8.54132C18.3453 8.1549 18.1057 7.38439 17.5092 7.34567L12.8949 7.0462C12.7706 7.03732 12.6514 6.99332 12.5511 6.91931C12.4509 6.84531 12.3737 6.74435 12.3286 6.62819L10.6076 2.29436C10.5609 2.17106 10.4777 2.06492 10.3692 1.99002C10.2606 1.91511 10.1319 1.875 10 1.875C9.86813 1.875 9.73938 1.91511 9.63085 1.99002C9.52232 2.06492 9.43914 2.17106 9.39236 2.29436L7.6714 6.62819C7.62631 6.74435 7.54914 6.84531 7.4489 6.91931C7.34865 6.99332 7.22944 7.03732 7.10515 7.0462L2.49078 7.34567C1.89429 7.38439 1.65466 8.1549 2.11894 8.54132L5.65232 11.4822C5.75079 11.5652 5.82383 11.6743 5.86305 11.797C5.90226 11.9197 5.90606 12.0509 5.874 12.1756L4.81824 16.3288C4.63889 17.0343 5.38929 17.6038 5.99369 17.2209L9.65539 14.901C9.75837 14.8354 9.87792 14.8006 10 14.8006C10.1221 14.8006 10.2416 14.8354 10.3446 14.901Z"
                                                    fill="#FD8E1F"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M10.3446 14.901L14.2849 17.3974C14.7886 17.7165 15.4139 17.2419 15.2644 16.654L14.126 12.1756C14.0939 12.0509 14.0977 11.9197 14.137 11.797C14.1762 11.6743 14.2492 11.5652 14.3477 11.4822L17.8811 8.54132C18.3453 8.1549 18.1057 7.38439 17.5092 7.34567L12.8949 7.0462C12.7706 7.03732 12.6514 6.99332 12.5511 6.91931C12.4509 6.84531 12.3737 6.74435 12.3286 6.62819L10.6076 2.29436C10.5609 2.17106 10.4777 2.06492 10.3692 1.99002C10.2606 1.91511 10.1319 1.875 10 1.875C9.86813 1.875 9.73938 1.91511 9.63085 1.99002C9.52232 2.06492 9.43914 2.17106 9.39236 2.29436L7.6714 6.62819C7.62631 6.74435 7.54914 6.84531 7.4489 6.91931C7.34865 6.99332 7.22944 7.03732 7.10515 7.0462L2.49078 7.34567C1.89429 7.38439 1.65466 8.1549 2.11894 8.54132L5.65232 11.4822C5.75079 11.5652 5.82383 11.6743 5.86305 11.797C5.90226 11.9197 5.90606 12.0509 5.874 12.1756L4.81824 16.3288C4.63889 17.0343 5.38929 17.6038 5.99369 17.2209L9.65539 14.901C9.75837 14.8354 9.87792 14.8006 10 14.8006C10.1221 14.8006 10.2416 14.8354 10.3446 14.901Z"
                                                    fill="#FD8E1F"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M10.3446 14.901L14.2849 17.3974C14.7886 17.7165 15.4139 17.2419 15.2644 16.654L14.126 12.1756C14.0939 12.0509 14.0977 11.9197 14.137 11.797C14.1762 11.6743 14.2492 11.5652 14.3477 11.4822L17.8811 8.54132C18.3453 8.1549 18.1057 7.38439 17.5092 7.34567L12.8949 7.0462C12.7706 7.03732 12.6514 6.99332 12.5511 6.91931C12.4509 6.84531 12.3737 6.74435 12.3286 6.62819L10.6076 2.29436C10.5609 2.17106 10.4777 2.06492 10.3692 1.99002C10.2606 1.91511 10.1319 1.875 10 1.875C9.86813 1.875 9.73938 1.91511 9.63085 1.99002C9.52232 2.06492 9.43914 2.17106 9.39236 2.29436L7.6714 6.62819C7.62631 6.74435 7.54914 6.84531 7.4489 6.91931C7.34865 6.99332 7.22944 7.03732 7.10515 7.0462L2.49078 7.34567C1.89429 7.38439 1.65466 8.1549 2.11894 8.54132L5.65232 11.4822C5.75079 11.5652 5.82383 11.6743 5.86305 11.797C5.90226 11.9197 5.90606 12.0509 5.874 12.1756L4.81824 16.3288C4.63889 17.0343 5.38929 17.6038 5.99369 17.2209L9.65539 14.901C9.75837 14.8354 9.87792 14.8006 10 14.8006C10.1221 14.8006 10.2416 14.8354 10.3446 14.901Z"
                                                    fill="#FD8E1F"/>
                                            </svg>
                                        </div>
                                        <span className="font-medium text-gray-900">4.8</span>
                                        <span className="text-gray-600"> (451,444 Rating)</span>
                                    </div>
                                </div>

                                <div className="relative h-[494px] w-full my-10 overflow-hidden">
                                    <img
                                        alt={course.title}
                                        src={
                                            course.image ||
                                            "https://images.unsplash.com/photo-1584697964403-a0ec00c9b56b"
                                        }
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="size-[72px] grid place-items-center bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                            <path d="M15.3889 8.35995L1.8911 0.111021C1.77741 0.0415409 1.64726 0.00360271 1.51404 0.00110806C1.38083 -0.00138659 1.24935 0.0316526 1.13314 0.0968271C1.01692 0.162002 0.920173 0.256958 0.852834 0.371929C0.785495 0.486901 0.75 0.617736 0.75 0.750976V17.2488C0.75 17.3821 0.785495 17.5129 0.852834 17.6279C0.920173 17.7429 1.01692 17.8378 1.13314 17.903C1.24935 17.9682 1.38083 18.0012 1.51404 17.9987C1.64726 17.9962 1.77741 17.9583 1.8911 17.8888L15.3889 9.63986C15.4985 9.57287 15.5891 9.47883 15.652 9.36677C15.7148 9.25471 15.7478 9.12839 15.7478 8.99991C15.7478 8.87143 15.7148 8.74511 15.652 8.63305C15.5891 8.52099 15.4985 8.42695 15.3889 8.35995Z" fill="#FF6636"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10">
                                    <div className="space-y-5">
                                        <h4 className="text-2xl">Description</h4>
                                        <p>
                                            It gives you a huge self-satisfaction when you look at your work and say, "I
                                            made this!". I love that feeling after I'm done working on something. When I
                                            lean back in my chair, look at the final result with a smile, and have this
                                            little "spark joy" moment. It's especially satisfying when I know I just
                                            made
                                            $5,000.
                                        </p>
                                        <p>
                                            It gives you a huge self-satisfaction when you look at your work and say, "I
                                            made this!". I love that feeling after I'm done working on something. When I
                                            lean back in my chair, look at the final result with a smile, and have this
                                            little "spark joy" moment. It's especially satisfying when I know I just
                                            made
                                            $5,000.
                                        </p>
                                        <p>
                                            It gives you a huge self-satisfaction when you look at your work and say, "I
                                            made this!". I love that feeling after I'm done working on something. When I
                                            lean back in my chair, look at the final result with a smile, and have this
                                            little "spark joy" moment. It's especially satisfying when I know I just
                                            made
                                            $5,000.
                                        </p>
                                        <p>
                                            It gives you a huge self-satisfaction when you look at your work and say, "I
                                            made this!". I love that feeling after I'm done working on something. When I
                                            lean back in my chair, look at the final result with a smile, and have this
                                            little "spark joy" moment. It's especially satisfying when I know I just
                                            made
                                            $5,000.
                                        </p></div>

                                    <div className="space-y-5">
                                        <h4 className="text-2xl">Who this course is for:</h4>
                                        <ul className="space-y-3 text-gray-900">
                                            <li className="flex items-center gap-2">
                                                <div className="shrink-0">
                                                    <ArrowRight classes="text-primary-500"/>
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                This course is for those who want to launch a Freelance Web Design career.
                                            </span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="shrink-0">
                                                    <ArrowRight classes="text-primary-500"/>
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                This course is for those who want to launch a Freelance Web Design career.
                                            </span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="shrink-0">
                                                    <ArrowRight classes="text-primary-500"/>
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                This course is for those who want to launch a Freelance Web Design career.
                                            </span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="shrink-0">
                                                    <ArrowRight classes="text-primary-500"/>
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                This course is for those who want to launch a Freelance Web Design career.
                                            </span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="shrink-0">
                                                    <ArrowRight classes="text-primary-500"/>
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                This course is for those who want to launch a Freelance Web Design career.
                                            </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-5">
                                        <h4 className="text-2xl">Course requirements</h4>
                                        <ul className="list-disc text-gray-900 text-base [&_li]:ml-5 space-y-3">
                                            <li>
                                                Nunc auctor consequat lorem, in posuere enim hendrerit sed.
                                            </li>
                                            <li>
                                                Duis ornare enim ullamcorper congue consectetur suspendisse interdum
                                                tristique est sed molestie.
                                            </li>
                                            <li>
                                                Those who are looking to reboot their work life and try a new profession
                                                that is fun, rewarding and highly in-demand.
                                            </li>
                                            <li>
                                                Nunc auctor consequat lorem, in posuere enim hendrerit sed.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-span-2">
                            <Card className="bg-white border border-gray-100">
                                <CardContent className="p-0">
                                    <div className="flex flex-col gap-3 p-6">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <div className="text-2xl text-gray-900">${course.price.toFixed(2)}</div>
                                                <div className="text-base text-gray-500 line-through">
                                                    {course.originalPrice && `$${course.originalPrice.toFixed(2)}`}
                                                </div>
                                            </div>
                                            <div className="text-sm bg-primary-100 text-primary-500 px-3 py-2">50% OFF</div>
                                        </div>
                                        <p className="text-error-500 font-medium">2 days left at this price!</p>
                                    </div>
                                    <hr/>
                                    <div className="p-6 flex flex-col items-stretch gap-3">
                                        <Link href="/shopping-cart">
                                            <Button className="w-full">
                                                Add To Cart
                                            </Button>
                                        </Link>

                                        <Link href={`/courses/${course.id}`}>
                                            <Button variant="outline" className="w-full">
                                                Course Detail
                                            </Button>
                                        </Link>

                                        <div className="flex gap-3 flex-1">
                                            <Button variant="secondary" className="flex-1">
                                                Add to wishlist
                                            </Button>
                                            <Button variant="secondary" className="flex-1">
                                                Gift Course
                                            </Button>
                                        </div>

                                        <p className="text-gray-500"><b>Note:</b> all course have 30-days money-back guarantee</p>
                                    </div>
                                    <hr/>
                                    <div className="p-6 flex flex-col items-stretch gap-4">
                                        <p className="text-base font-medium text-gray-900">
                                            Share this course:
                                        </p>
                                        <div className="flex gap-2 flex-1">
                                            <div className="bg-gray-50 text-gray-700 hover:text-white flex gap-3 justify-center items-center px-5 text-sm shrink-0 py-3 hover:bg-primary-500 hover:shadow-[0_6px_20px_0_#CC522B80] transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M15.75 15.749H20.25V3.74902H8.25V8.24902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M15.75 8.24902H3.75V20.249H15.75V8.24902Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                Copy link
                                            </div>
                                            {socialLinks.map((item, index) => {
                                                return (
                                                    <a key={index} href="#" className='bg-gray-50 text-gray-700 hover:text-white size-[48px] flex justify-center items-center p-2 hover:bg-primary-500 hover:shadow-[0_6px_20px_0_#CC522B80] transition-colors'>
                                                        {item.icon}
                                                    </a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
