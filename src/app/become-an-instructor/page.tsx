import DefaultLayout from "@/components/layouts/DefaultLayout";
import {Breadcrumbs} from "@/components/Breadcrumbs";
import {Button} from "@/components/ui/button";
import {Stats} from "@/components/tiny/tiny-collection"
import {CheckCircle} from "@/assets/icons/common-icons";

const Page = () => {
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
            </DefaultLayout>
        </>
    )
}

export default Page;
