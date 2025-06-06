import DefaultLayout from "@/components/layouts/DefaultLayout";
import {Breadcrumbs} from "@/components/Breadcrumbs";
import {Button} from "@/components/ui/button";
import {Stats} from "@/components/common/tiny-collection"
import {ArrowRight, CheckCircle, Envelope} from "@/assets/icons/common-icons";
import Link from "next/link";
import TestimonialSlider from "@/components/TestimonialSlider";

const Page = () => {
    const steps = [
        {
            id: 1,
            title: "Apply to become instructor.",
            description: "Submit your application with details about your expertise and teaching experience.",
            bgColor: "bg-[#564FFD1A]",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path opacity="0.2" d="M33.75 7.5H6.25C5.91848 7.5 5.60054 7.6317 5.36612 7.86612C5.1317 8.10054 5 8.41848 5 8.75V33.75L10 31.25L15 33.75L20 31.25L25 33.75L30 31.25L35 33.75V8.75C35 8.41848 34.8683 8.10054 34.6339 7.86612C34.3995 7.6317 34.0815 7.5 33.75 7.5ZM17.5 25H10V15H17.5V25Z" fill="#564FFD"/>
                <path d="M5 33.75V8.75C5 8.41848 5.1317 8.10054 5.36612 7.86612C5.60054 7.6317 5.91848 7.5 6.25 7.5H33.75C34.0815 7.5 34.3995 7.6317 34.6339 7.86612C34.8683 8.10054 35 8.41848 35 8.75V33.75L30 31.25L25 33.75L20 31.25L15 33.75L10 31.25L5 33.75Z" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.5 17.5H30" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.5 22.5H30" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 15H10V25H17.5V15Z" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
        },
        {
            id: 2,
            title: "Setup & edit your profile.",
            description: "Create a professional profile that highlights your skills and experience.",
            bgColor: "bg-error-100",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path opacity="0.2" d="M33.75 7.5H6.25C5.91848 7.5 5.60054 7.6317 5.36612 7.86612C5.1317 8.10054 5 8.41848 5 8.75V31.25C5 31.5815 5.1317 31.8995 5.36612 32.1339C5.60054 32.3683 5.91848 32.5 6.25 32.5H33.75C34.0815 32.5 34.3995 32.3683 34.6339 32.1339C34.8683 31.8995 35 31.5815 35 31.25V8.75C35 8.41848 34.8683 8.10054 34.6339 7.86612C34.3995 7.6317 34.0815 7.5 33.75 7.5ZM14.3907 22.5C13.649 22.5 12.924 22.2801 12.3073 21.868C11.6906 21.456 11.21 20.8703 10.9261 20.1851C10.6423 19.4998 10.5681 18.7458 10.7128 18.0184C10.8574 17.291 11.2146 16.6228 11.739 16.0983C12.2635 15.5739 12.9317 15.2167 13.6591 15.0721C14.3865 14.9274 15.1405 15.0016 15.8258 15.2855C16.511 15.5693 17.0967 16.0499 17.5087 16.6666C17.9208 17.2833 18.1407 18.0083 18.1407 18.75C18.1407 19.2425 18.0437 19.7301 17.8552 20.1851C17.6668 20.64 17.3906 21.0534 17.0423 21.4017C16.6941 21.7499 16.2807 22.0261 15.8258 22.2146C15.3708 22.403 14.8832 22.5 14.3907 22.5Z" fill="#E34444"/>
                <path d="M23.75 17.5H30" stroke="#E34444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.75 22.5H30" stroke="#E34444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.3909 22.5C16.4619 22.5 18.1409 20.8211 18.1409 18.75C18.1409 16.6789 16.4619 15 14.3909 15C12.3198 15 10.6409 16.6789 10.6409 18.75C10.6409 20.8211 12.3198 22.5 14.3909 22.5Z" stroke="#E34444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.54785 26.2499C9.82528 25.1766 10.4514 24.2259 11.3279 23.5471C12.2044 22.8684 13.2816 22.5 14.3901 22.5C15.4987 22.5 16.5759 22.8682 17.4524 23.5469C18.329 24.2256 18.9552 25.1763 19.2327 26.2496" stroke="#E34444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M33.75 7.5H6.25C5.55964 7.5 5 8.05964 5 8.75V31.25C5 31.9404 5.55964 32.5 6.25 32.5H33.75C34.4404 32.5 35 31.9404 35 31.25V8.75C35 8.05964 34.4404 7.5 33.75 7.5Z" stroke="#E34444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        },
        {
            id: 3,
            title: "Create your new course",
            description: "Design and develop engaging curriculum with our easy-to-use platform.",
            bgColor: "bg-primary-100",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path opacity="0.2" d="M20 5C17.0333 5 14.1332 5.87973 11.6665 7.52796C9.19972 9.17618 7.27713 11.5189 6.14181 14.2597C5.0065 17.0006 4.70945 20.0166 5.28823 22.9264C5.86701 25.8361 7.29562 28.5088 9.3934 30.6066C11.4912 32.7044 14.1639 34.133 17.0737 34.7118C19.9834 35.2906 22.9994 34.9935 25.7403 33.8582C28.4811 32.7229 30.8238 30.8003 32.472 28.3336C34.1203 25.8668 35 22.9667 35 20C35 18.0302 34.612 16.0796 33.8582 14.2597C33.1044 12.4399 31.9995 10.7863 30.6066 9.39339C29.2137 8.00051 27.5602 6.89562 25.7403 6.1418C23.9204 5.38798 21.9698 4.99999 20 5ZM17.5 25V15L25 20L17.5 25Z" fill="#FF6636"/>
                <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#FF6636" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M25 20L17.5 15V25L25 20Z" stroke="#FF6636" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        },
        {
            id: 4,
            title: "Start teaching & earning",
            description: "Launch your course and start earning while helping students achieve their goals.",
            bgColor: "bg-success-100",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path opacity="0.2" d="M31.25 23.8833L25.5004 29.6328C25.3478 29.7855 25.1583 29.896 24.9502 29.9536C24.7422 30.0112 24.5228 30.014 24.3134 29.9616L15.2576 27.6977C15.0878 27.6552 14.9287 27.5776 14.7908 27.4697L6.25 20.7911L11.3397 11.2158L19.3585 8.87808C19.6449 8.79457 19.9518 8.81628 20.2237 8.93928L25.625 11.3833H22.3928C22.2286 11.3833 22.0661 11.4156 21.9144 11.4784C21.7628 11.5413 21.625 11.6333 21.5089 11.7494L15.3941 17.8642C15.2675 17.9908 15.1695 18.1432 15.1069 18.3109C15.0443 18.4787 15.0185 18.658 15.0312 18.8367C15.0438 19.0153 15.0948 19.1891 15.1805 19.3464C15.2662 19.5036 15.3847 19.6406 15.528 19.748L16.375 20.3833C17.2405 21.0324 18.2931 21.3833 19.375 21.3833C20.4569 21.3833 21.5095 21.0324 22.375 20.3833L24.375 18.8833L31.25 23.8833Z" fill="#23BD33"/>
                <path d="M37.6121 19.0277L33.75 20.9588L28.75 11.3835L32.6515 9.43275C32.9446 9.28619 33.2835 9.2606 33.5953 9.3615C33.9071 9.46239 34.1668 9.6817 34.3185 9.9722L38.1611 17.3311C38.238 17.4782 38.2847 17.6392 38.2987 17.8046C38.3126 17.9701 38.2935 18.1366 38.2424 18.2945C38.1913 18.4525 38.1092 18.5986 38.001 18.7245C37.8928 18.8504 37.7606 18.9535 37.6121 19.0277V19.0277Z" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.24965 20.7908L2.38752 18.8598C2.23904 18.7855 2.10684 18.6825 1.99862 18.5566C1.89041 18.4307 1.80836 18.2845 1.75725 18.1266C1.70614 17.9686 1.687 17.8021 1.70095 17.6367C1.71491 17.4713 1.76166 17.3103 1.8385 17.1631L5.68115 9.80423C5.83283 9.51374 6.09254 9.29443 6.40433 9.19353C6.71613 9.09264 7.05508 9.11822 7.3482 9.26478L11.2496 11.2155L6.24965 20.7908Z" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M33.75 20.9604L31.25 23.8851L25.5004 29.6347C25.3478 29.7873 25.1583 29.8978 24.9502 29.9554C24.7422 30.0131 24.5228 30.0158 24.3134 29.9635L15.2576 27.6995C15.0878 27.6571 14.9287 27.5794 14.7908 27.4715L6.25 20.793" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M31.2506 23.8828L24.3756 18.8828L22.3756 20.3828C21.5101 21.0319 20.4574 21.3828 19.3756 21.3828C18.2937 21.3828 17.241 21.0319 16.3756 20.3828L15.5286 19.7476C15.3853 19.6401 15.2668 19.5031 15.1811 19.3459C15.0953 19.1886 15.0444 19.0148 15.0317 18.8362C15.019 18.6575 15.0449 18.4783 15.1075 18.3105C15.1701 18.1427 15.268 17.9903 15.3947 17.8637L21.5094 11.7489C21.6255 11.6329 21.7633 11.5408 21.915 11.478C22.0666 11.4151 22.2292 11.3828 22.3933 11.3828H28.7506" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.3401 11.2158L19.3588 8.87808C19.6453 8.79457 19.9522 8.81628 20.224 8.93928L25.6253 11.3833" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 33.2596L12.7907 32.0823C12.5996 32.0345 12.4225 31.9423 12.2738 31.813L8.75 28.75" stroke="#23BD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        }
    ];

    const rules = [
        "Complete your instructor profile with accurate details and credentials.",
        "Create high-quality content that meets our educational standards.",
        "Respond to student questions within 48 hours.",
        "Keep your course materials updated with the latest information."
    ];

    const supportPoints = [
        "We offer 24/7 technical support to help resolve any issues.",
        "Our team will help you market your course to reach a wider audience.",
        "You'll receive detailed analytics to track your course performance.",
        "One-on-one coaching sessions are available to improve your teaching skills."
    ];

    return (
        <>
            <DefaultLayout>
                <Breadcrumbs />

                {/* Hero Section */}
                <section>
                    <div className="container relative pt-[200px] pb-[175px]">
                        <div className="flex flex-col items-start gap-6 max-w-[648px]">
                            <h1 className="text-5xl">Become an Instuctor</h1>
                            <p className="text-lg max-w-md">
                                Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.                            </p>
                            <Button>
                                Get Started
                            </Button>
                        </div>
                        <div className="absolute bottom-0 top-5 right-24">
                            <img
                                src="/images/people/girl-3.png"
                                alt="Customer Support Representative"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                <div className="bg-primary-100 py-10">
                    <div className="container">
                        <Stats />
                    </div>
                </div>

                <section className="py-[100px]">
                    <div className="container flex flex-col-reverse md:flex-row items-stretch justify-between">
                        <div className="w-full max-w-[698px]">
                            <img
                                src="/images/screen.png"
                                alt="Team"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-10 w-full max-w-[535px]">
                            <div className="flex flex-col gap-4">
                                <h1 className="section-heading !text-left">Why you’ll start teaching on Eduguard</h1>
                                <p className="text-lg ">
                                    Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque, vitae auctor arcu ornare. Cras vitae nulla a purus mollis venenatis.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="">
                                    <div className="flex items-start gap-3">
                                        <div className="shrink-0">
                                            <CheckCircle />
                                        </div>
                                        <div>
                                            <p className="text-base font-medium text-gray-900">Tech your students as you want.</p>
                                            <p className="text-gray-600 mt-2">
                                                Quisque leo leo, suscipit sed arcu sit amet, laculis feugiat felis.
                                                Vestibulum non consectetur tortor. Morbi at orci vehicula,
                                                vehicula mi ut, vestibulum odio.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="flex items-start gap-3">
                                        <div className="shrink-0">
                                            <CheckCircle />
                                        </div>
                                        <div>
                                            <p className="text-base font-medium text-gray-900">
                                                Manage your course, payment in one place
                                            </p>
                                            <p className="text-gray-600 mt-2">
                                                Aenean vitae leo leo. Praesent ullamcorper ac libero et mattis. Aenean vel erat at neque viverra feugiat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex items-start gap-3">
                                        <div className="shrink-0">
                                            <CheckCircle />
                                        </div>
                                        <div>
                                            <p className="text-base font-medium text-gray-900">
                                                Chat with your students
                                            </p>
                                            <p className="text-gray-600 mt-2">
                                                Aenean vitae leo leo. Praesent ullamcorper ac libero et mattis. Aenean vel erat at neque viverra feugiat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container">
                        <div className="section-layout">
                            <h2 className="section-heading max-w-[518] w-full mx-auto">
                                How you'll become successful instructor
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {steps.map((step) => (
                                    <div key={step.id} className="flex flex-col items-center text-center p-6">
                                        <div className={`${step.bgColor} grid place-items-center size-20 mb-6`}>
                                            {step.icon}
                                        </div>
                                        <h3 className="text-lg font-medium mb-3">{step.id}. {step.title}</h3>
                                        <p className="text-gray-600 text-sm">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t border-gray-200 mt-16"></div>
                </section>

                <section className="py-20">
                    <div className="container">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-6 max-w-[536px] w-full">
                                <h2 className="section-heading !text-left">Instructor rules & regulations</h2>

                                <p className="text-gray-600 text-lg">
                                    We maintain high standards for our instructors to ensure students receive the best possible
                                    learning experience. These guidelines help maintain quality and consistency across all courses.
                                </p>

                                <ul className="list-disc text-gray-900 text-base [&_li]:ml-5 space-y-3">
                                    {rules.map((rule, index) => (
                                        <li key={index}>
                                            {rule}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="aspect-square max-w-[648px] relative">
                                <div className="w-[24px] bg-white absolute top-0 bottom-0 left-[30%]"></div>
                                <div className="h-[180px] bg-white absolute top-0 w-[30%]"></div>
                                <img
                                    src="/images/teacher.jpg"
                                    alt="Business professional"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </section>

                <section className="py-20 bg-primary-100">
                    <div className="container">
                        <div className="flex justify-between items-center">
                            <div className="aspect-square max-w-[648px] relative">
                                <div className="w-[24px] bg-primary-100 absolute top-0 bottom-0 left-[50%]"></div>
                                <div className="h-[180px] bg-primary-100 absolute right-0 w-[50%]"></div>
                                <img
                                    src="/images/woman-caller.jpg"
                                    alt="Business professional"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="max-w-[536px] w-full">
                            <h2 className="section-heading !text-left mb-6">
                                Don't worry we're always here to help you
                            </h2>

                            <div className="flex flex-col gap-8">
                                <p className="text-gray-600 text-lg">
                                    Mauris aliquet ornare tortor, ut mollis arcu luctus quis. Phasellus nec augue malesuada,
                                    sagittis ligula vel, faucibus metus. Nam viverra metus eget nunc dignissim.
                                </p>

                                <ul className="space-y-3 text-gray-900">
                                    {supportPoints.map((point, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <div className="shrink-0">
                                                <ArrowRight classes="text-primary-500"/>
                                            </div>
                                            <span className="text-gray-700 text-sm">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-4">
                                    <div className="size-14 grid place-items-center bg-white text-primary-500 rounded-full">
                                        <Envelope />
                                    </div>
                                    <div className="flex flex-col gap-2 font-medium">
                                        <span className="uppercase text-gray-500 text-xs leading-[12px]">Email us, anytime anywhere</span>
                                        <span className="text-lg">help.eduguard@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container">
                        <div className="flex justify-between items-center gap-20 xl:gap-28 shrink-0">
                            <div className="max-w-[536px] w-full shrink-0">
                                <h2 className="section-heading !text-left mb-6">
                                    20k+ Instructor created their success story with eduguard
                                </h2>

                                <div className="flex flex-col gap-8">
                                    <p className="text-gray-600 text-lg">
                                        Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum eros justo,
                                        id commodo ante laoreet nec. Phasellus aliquet, orci id pellentesque mollis.
                                    </p>

                                    <TestimonialSlider />
                                </div>
                            </div>

                            <div className="shrink-0 max-xl:pr-14">
                                <div className="flex items-center gap-3 xl:gap-6">
                                    <div className="flex gap-6 items-end">
                                        <div className="flex flex-col gap-3 xl:gap-6">
                                            <div className="flex justify-between items-end">
                                                <img
                                                    src="/images/people/man-2.png"
                                                    alt="Boy"
                                                    className="w-[60px] xl:w-[129px] aspect-square shrink-0"
                                                />
                                                <img
                                                    src="/images/people/girl-1.png"
                                                    alt="Girl"
                                                    className="w-[100px] xl:w-[200px] aspect-square shrink-0"
                                                />
                                            </div>
                                            <img
                                                src="/images/people/girl-6.png"
                                                alt="Girl"
                                                className="w-[225px] xl:w-[424px] aspect-square"
                                            />
                                            <div className="flex items-start gap-3 xl:gap-6">
                                                <img
                                                    src="/images/people/man-3.png"
                                                    alt="Boy"
                                                    className="w-[100px] xl:w-[200px] aspect-square"
                                                />
                                                <img
                                                    src="/images/people/girl-7.png"
                                                    alt="Girl"
                                                    className="w-[100px] xl:w-[200px] h-[180px] xl:h-[312px] shrink-0"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 xl:gap-6">
                                            <img
                                                src="/images/people/girl-4.png"
                                                alt="Girl"
                                                className="w-[120px] xl:w-[220px] h-[200px] xl:h-[312px] aspect-square"
                                            />
                                            <img
                                                src="/images/people/man-5.png"
                                                alt="Boy"
                                                className="w-[150px] xl:w-[312px] aspect-square"
                                            />
                                            <img
                                                src="/images/people/man-1.png"
                                                alt="Boy"
                                                className="w-[100px] xl:w-[200px] aspect-square"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-900 shadow-[0_-1px_0_0_#363B4780_inset]">
                    <div className="container">
                        <div className="flex justify-between items-center">
                            <div className="max-w-[424px] w-full">
                                <div className="flex flex-col gap-6 mb-10">
                                    <h2 className="section-heading text-white !text-left">
                                        Start teaching with us and inspire others
                                    </h2>
                                    <p className="text-base text-gray-300">
                                        Become an instructor & start teaching with 26k certified instructors. Create a
                                        success story with 67.1k Students — Grow yourself with 71 countries.
                                    </p>
                                </div>

                                <Link href="/sign-up">
                                    <Button>Register now</Button>
                                </Link>
                            </div>

                            <div className="max-w-[648px] w-full h-[382px] relative overflow-hidden">
                                <div className="w-[24px] bg-gray-900 absolute top-0 bottom-0 left-[35%] z-10"></div>
                                <div className="h-[100px] bg-gray-900 absolute top-0 w-[35%] z-10"></div>
                                <img
                                    src="/images/girl-pointing.jpg"
                                    alt="Girl pointing"
                                    className="absolute -bottom-[5%] right-20 scale-125 object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </>
    )
}

export default Page;
