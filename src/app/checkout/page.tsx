"use client";

import React from 'react';
import PaymentMethodForm from "@/components/common/PaymentMethodForm";
import {Breadcrumbs} from "@/components/Breadcrumbs";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import CheckoutCard from "@/components/common/CheckoutCard";

const Page = () => {
    return (
            <DefaultLayout>
                <Breadcrumbs />

                <section className="py-20">
                    <div className="container">
                        <div className="flex justify-between gap-6">
                            <div className="w-full max-w-[648px] [&_input]:w-full [&_label]:text-gray-900">
                                <PaymentMethodForm />
                            </div>

                            <CheckoutCard />
                        </div>
                    </div>
                </section>
            </DefaultLayout>
    );
};

export default Page;
