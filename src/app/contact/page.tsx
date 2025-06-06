'use client';

import { Button } from "@/components/ui/button";
import {Breadcrumbs} from "@/components/Breadcrumbs";
import {Envelope, PaperPlaneRight} from "@/assets/icons/common-icons";
import DefaultLayout from "@/components/layouts/DefaultLayout";

const Contact = () => {
  return (
    <>
        <DefaultLayout>
            <Breadcrumbs />

            {/* Hero Section */}
            <section style={{ boxShadow: '0px -1px 0px 0px #FFDDD1 inset' }}>
                <div className="container relative pt-[180px] pb-[148px] overflow-hidden">
                    <div className="flex flex-col items-start gap-6 max-w-[424px]">
                        <h1 className="text-5xl">Connect with us</h1>
                        <p className="text-lg max-w-md">
                            Want to chat? We'd love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.
                        </p>
                        <Button
                            onClick={() => window.location.href = 'mailto:contact@example.com'}
                        >
                            <Envelope />
                            Copy Email
                        </Button>
                    </div>
                    <div className="absolute bottom-0 right-0 xl:-right-10 flex justify-center">
                        <img
                            src="/images/girl-caller.png"
                            alt="Customer Support Representative"
                            className="w-[80%] xl:w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Branches Section */}
            <section className="py-16 md:py-24 container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our branches all over the world.</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Visit one of our offices located in major cities around the globe. We'd love to connect with you in person.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Los Angeles */}
                    <div className="relative overflow-hidden bg-white h-[364px]">
                            <img
                                src="/images/cities/california.png"
                                alt="Los Angeles"
                                className="w-full h-full object-cover"
                            />
                        <div className="flex flex-col items-center gap-2 bg-white py-5 absolute left-6 bottom-6 right-6  text-center">
                            <div className="text-primary-500 uppercase text-xs font-medium">Main Branch</div>
                            <p className="font-medium text-gray-900 ">Los Angeles, California</p>
                            <p className="text-gray-500 text-sm">1702 Olympic Boulevard <br/> Santa Monica, CA 90404 </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white h-[364px]">
                        <img
                            src="/images/cities/japan.jpg"
                            alt="Los Angeles"
                            className="w-full h-full object-cover"
                        />
                        <div className="flex flex-col items-center gap-2 bg-white py-5 absolute left-6 bottom-6 right-6  text-center">
                            <p className="font-medium text-gray-900 ">Tokyo, Japan</p>
                            <p className="text-gray-500 text-sm">901 N Pitt Str., Suite 170
                               <br/> Tokyo, VA 22314, Japan </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white h-[364px]">
                        <img
                            src="/images/cities/california.png"
                            alt="Los Angeles"
                            className="w-full h-full object-cover"
                        />
                        <div className="flex flex-col items-center gap-2 bg-white py-5 absolute left-6 bottom-6 right-6  text-center">
                            <p className="font-medium text-gray-900 ">Moscow, Russia</p>
                            <p className="text-gray-500 text-sm">Anjeliersstraat 470H, 1015 NL
                              <br/>  Moscow, Russia </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white h-[364px]">
                        <img
                            src="/images/cities/california.png"
                            alt="Los Angeles"
                            className="w-full h-full object-cover"
                        />
                        <div className="flex flex-col items-center gap-2 bg-white py-5 absolute left-6 bottom-6 right-6  text-center">
                            <p className="font-medium text-gray-900 ">Mumbai, India</p>
                            <p className="text-gray-500 text-sm">36 East 20th St, 6th Floor
                              <br/>  Mumbai, India </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Contact Form Section with Map */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="section-layout">
                        <h2 className="section-heading">Contact Us</h2>

                        <div className="flex justify-between">
                            {/* Office Information */}
                            <div className="max-w-[536px]">
                                <p className="text-2xl text-gray-900 mb-10">
                                    Will you be in Los Angeles or any other branches any time soon? Stop by the office! We'd
                                    love to meet.
                                </p>

                                <div className="flex flex-col gap-8">
                                    <div className="grid grid-cols-2 w-full">
                                        <p className="text-primary-500 uppercase font-medium">ADDRESS</p>
                                        <p className="text-gray-900">1702 Olympic Boulevard <br/> Santa Monica, CA 90404</p>
                                    </div>

                                    <hr className="h-px bg-gray-100 w-full"/>

                                    <div className="grid grid-cols-2 w-full">
                                        <p className="text-primary-500 uppercase font-medium">Phone Number</p>
                                        <p className="text-gray-900">(480) 555-0103 <br/> (219) 555-0114</p>
                                    </div>

                                    <hr className="h-px bg-gray-100 w-full"/>

                                    <div className="grid grid-cols-2 w-full">
                                        <p className="text-primary-500 uppercase font-medium">Email address</p>
                                        <p className="text-gray-900">help.eduguard@gmail.com <br/> career.eduguard@gamil.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="max-w-[648px] bg-white p-10">
                                <h3 className="text-xl font-semibold mb-6">Get In touch</h3>
                                <p className="text-gray-600 mb-8">Feel free contact with us, we love to make new partners &
                                    friends</p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="">First Name</label>
                                            <input required={true} id="firstName" placeholder="First name..."/>
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="">Last Name</label>
                                            <input required={true} id="lastName" placeholder="Last name..."/>
                                        </div>


                                    <div>
                                        <label htmlFor="email" className="">Email</label>
                                        <input required={true} id="email" type="email" placeholder="Email Address"/>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="">Subject</label>
                                        <input required={true} id="subject" placeholder="Message Subject"/>
                                    </div>

                                    <div className="col-span-2">
                                        <label htmlFor="message" className="">Message</label>
                                        <textarea required={true} id="message" rows={4} placeholder="Message Subject" className="w-full"/>
                                    </div>

                                    </div>

                                    <div>
                                        <Button>
                                            Send Message
                                            <PaperPlaneRight />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full h-[400px] bg-gray-300 relative">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.43554989466!2d-118.69192047471653!3d34.02073049793636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1632130164952!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Office Location Map"
            ></iframe>
        </section>
        </DefaultLayout>
    </>
  );
};

export default Contact;
