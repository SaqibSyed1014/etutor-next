"use client";

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {Breadcrumbs} from "@/components/Breadcrumbs";
import PaymentMethodForm from "@/components/common/PaymentMethodForm";
import CheckoutCard from "@/components/common/CheckoutCard";

export default function Page() {
    const [formData, setFormData] = useState({
        recipientName: "",
        recipientEmail: "",
        giftMessage: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
        }));
    };

    return (
        <DefaultLayout>
            <Breadcrumbs />

            <section className="py-20">
                <div className="container">
                    <div className="flex justify-between gap-6">
                        <div className="w-full max-w-[648px] [&_input]:w-full [&_label]:text-gray-900">
                            <h3 className="mb-10">Gift Course</h3>
                            <form className="space-y-10">
                                <div className="space-y-6">
                                    <h2 className="text-lg font-medium">Recipient's Information</h2>

                                    <div>
                                        <label>Recipient's Name</label>
                                        <input
                                            type="text"
                                            name="recipientName"
                                            value={formData.recipientName}
                                            onChange={handleChange}
                                            className="input"
                                            placeholder="Full name"
                                        />
                                    </div>

                                    <div>
                                        <label>Recipient's Email</label>
                                        <input
                                            type="email"
                                            name="recipientEmail"
                                            value={formData.recipientEmail}
                                            onChange={handleChange}
                                            className="input"
                                            placeholder="Email Address"
                                        />
                                    </div>

                                    <div>
                                        <label>Gift Message</label>
                                        <textarea
                                            name="giftMessage"
                                            value={formData.giftMessage}
                                            onChange={handleChange}
                                            className="textarea resize-none w-full"
                                            rows={4}
                                            placeholder="Add your personal message here..."
                                        />
                                    </div>
                                </div>

                                <PaymentMethodForm isGiftPayment={true} />
                            </form>
                        </div>


                        <CheckoutCard />
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
}
