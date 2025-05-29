'use client';

import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import CreditCardCarousel from "@/app/instructor/components/CreditCardCarousel";

const InstructorCards = () => {
    return (
        <Card className="dashboard-card max-w-[424px] w-full">
            <CardHeader className="dashboard-card-header">
                <CardTitle>Cards</CardTitle>
            </CardHeader>
            <CardContent className="p-5">
                <div>
                    <CreditCardCarousel />
                </div>
            </CardContent>
        </Card>
    );
};

export default InstructorCards;
