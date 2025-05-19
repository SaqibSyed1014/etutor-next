import DefaultLayout from "@/components/layouts/DefaultLayout";
import {Breadcrumbs} from "@/components/Breadcrumbs";
import {Button} from "@/components/ui/button";
import {Stats} from "@/components/tiny/tiny-collection"
import {CheckCircle} from "@/assets/icons/common-icons";

const Page = () => {
    const steps = [
        {
            id: 1,
            // icon: <MessageSquare className="h-6 w-6 text-indigo-600" />,
            title: "Apply to become instructor.",
            description: "Submit your application with details about your expertise and teaching experience.",
            bgColor: "bg-indigo-50",
        },
        {
            id: 2,
            // icon: <Users className="h-6 w-6 text-red-600" />,
            title: "Setup & edit your profile.",
            description: "Create a professional profile that highlights your skills and experience.",
            bgColor: "bg-red-50",
        },
        {
            id: 3,
            // icon: <Book className="h-6 w-6 text-orange-600" />,
            title: "Create your new course",
            description: "Design and develop engaging curriculum with our easy-to-use platform.",
            bgColor: "bg-orange-50",
        },
        {
            id: 4,
            // icon: <Star className="h-6 w-6 text-green-600" />,
            title: "Start teaching & earning",
            description: "Launch your course and start earning while helping students achieve their goals.",
            bgColor: "bg-green-50",
        }
    ];

    return (
        <>
            <DefaultLayout>
                <Breadcrumbs />

                {/* Hero Section */}
                <section>
                    <div className="container relative pt-[180px] pb-[148px]">
                        <div className="flex flex-col items-start gap-6 max-w-[648px]">
                            <h1 className="text-5xl">Become an Instuctor</h1>
                            <p className="text-lg max-w-md">
                                Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.                            </p>
                            <Button>
                                Get Started
                            </Button>
                        </div>
                        <div className="absolute bottom-0 top-5 -right-10">
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
                        <Stats/>
                    </div>
                </div>

                <section className="bg-gray-50 py-[100px]">
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

                <section className="py-20">
                    <div className="container">
                        <div className="section-layout">
                            <h2 className="section-heading">
                                How you'll become successful instructor
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {steps.map((step) => (
                                    <div key={step.id} className="flex flex-col items-center text-center">
                                        <div className={`${step.bgColor} p-4 rounded-lg mb-4`}>
                                            {/*{step.icon}*/}
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">{step.id}. {step.title}</h3>
                                        <p className="text-gray-600 text-sm">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t border-gray-200 mt-16"></div>
                </section>
            </DefaultLayout>
        </>
    )
}

export default Page;
