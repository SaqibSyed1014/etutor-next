import DefaultLayout from "@/components/layouts/DefaultLayout";
import {Breadcrumbs} from "@/components/Breadcrumbs";
import {Button} from "@/components/ui/button";

const Page = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumbs />

                {/* Hero Section */}
                <section>
                    <div className="container relative pt-[180px] pb-[148px]">
                        <div className="flex flex-col items-start gap-6 max-w-[424px]">
                            <h1 className="text-5xl">Become an Instuctor</h1>
                            <p className="text-lg max-w-md">
                                Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.                            </p>
                            <Button>
                                Get Started
                            </Button>
                        </div>
                        <div className="absolute bottom-0 -right-10">
                            <img
                                src="/images/people/girl-3.png"
                                alt="Customer Support Representative"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </>
    )
}

export default Page;
