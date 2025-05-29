'use client';

import React, {useEffect, useState} from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {DotsThree} from "@/assets/icons/common-icons";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import DropdownMenuWrapper from "@/components/DropdownMenuWrapper";
import {DropdownOption} from "../../../../types";

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
    totalAmount: number;
    paymentMethod: string;
    courseCount: number;
    cardNumber?: string;
    expanded?: boolean;
    status: 'pending' | 'completed' | 'cancelled'
}

const PurchaseHistory = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([
        {
            id: '1',
            date: '1st September, 2021 at 11:30 PM',
            courseCount: 3,
            totalAmount: 75.00,
            paymentMethod: 'Mastercards',
            cardNumber: '4142',
            status: 'pending'
        },
        {
            id: '2',
            date: '31st August, 2021 at 11:30 PM',
            courseCount: 52,
            totalAmount: 507.00,
            paymentMethod: 'Visa',
            status: 'pending'
        },
        {
            id: '3',
            date: '24th August, 2021 at 6:34 PM',
            courseCount: 1,
            totalAmount: 9.00,
            paymentMethod: 'Visa',
            status: 'cancelled'
        },
        {
            id: '4',
            date: '24th August, 2021 at 6:34 PM',
            courseCount: 1,
            totalAmount: 9.00,
            paymentMethod: 'Mastercards',
            status: 'completed'
        },
        {
            id: '5',
            date: '24th August, 2021 at 6:34 PM',
            courseCount: 1,
            totalAmount: 9.00,
            paymentMethod: 'Visa',
            status: 'cancelled'
        },
        {
            id: '6',
            date: '24th August, 2021 at 6:34 PM',
            courseCount: 1,
            totalAmount: 9.00,
            paymentMethod: 'Mastercards',
            status: 'completed'
        }
    ]);
    const [activeRow, setActiveRow] = useState<number>();

    const [selectedOption, setSelectedOption] = useState<string>('');
    const historyOption :DropdownOption[] = [
        {
            label: 'Cancel Withdraw',
            value: 'cancel'
        }
    ]

    useEffect(() => {
        if (selectedOption === 'cancel' && activeRow !== undefined) {
            setTransactions((prev) =>
                prev.filter((_, index) => index !== activeRow)
            );
            setSelectedOption(''); // Reset selection
        }
    }, [selectedOption, activeRow]);


    return (
        <Card className="dashboard-card flex-1">
            <CardHeader className="dashboard-card-header">
                <CardTitle>Withdraw History</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TableHeader className="bg-gray-50 [&_th]:h-[30px] [&_th]:text-[10px] [&_th]:font-medium">
                        <TableHead>DATE</TableHead>
                        <TableHead>METHOD</TableHead>
                        <TableHead>AMOUNT</TableHead>
                        <TableHead>STATUS</TableHead>
                        <TableHead></TableHead>
                    </TableHeader>
                    <TableBody>
                        {transactions.map((transaction, index) => (
                            <TableRow key={transaction.id} className={`border-0 [&_td]:h-12 [&_td]:py-[13px] ${activeRow === index && '[&_p]:text-gray-900'}`} style={{ boxShadow: activeRow === index ? '0px 0px 12px 0px #1D20261F' : '' }}>
                                <TableCell>
                                    <p>{transaction.date}</p>
                                </TableCell>
                                <TableCell>
                                    <p>{transaction.paymentMethod}</p>
                                </TableCell>
                                <TableCell>
                                    <p>American Express</p>
                                </TableCell>
                                <TableCell>
                                    <div className={`text-sm text-gray-700 capitalize font-medium
                                    ${transaction.status === 'pending' && '!text-warning-500'}
                                    ${transaction.status === 'cancelled' && '!text-error-500' }
                                    ${transaction.status === 'completed' && '!text-success-500' }
                                    `}>
                                        {transaction.status}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenuWrapper
                                        options={historyOption}
                                        selected={selectedOption}
                                        onChange={setSelectedOption}
                                        variant="primary"
                                        contentContentClasses="!w-[200px]"
                                        customTrigger={
                                            <div onClick={() => setActiveRow(index)} className="cursor-pointer text-gray-400 hover:text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 10.4746C12.8422 10.4746 13.5254 11.1578 13.5254 12C13.5254 12.8422 12.8422 13.5254 12 13.5254C11.1578 13.5254 10.4746 12.8422 10.4746 12C10.4746 11.1578 11.1578 10.4746 12 10.4746Z" fill="currentColor" stroke="currentColor" strokeWidth="0.8"/>
                                                    <path d="M19 10.4746C19.8422 10.4746 20.5254 11.1578 20.5254 12C20.5254 12.8422 19.8422 13.5254 19 13.5254C18.1578 13.5254 17.4746 12.8422 17.4746 12C17.4746 11.1578 18.1578 10.4746 19 10.4746Z" fill="currentColor" stroke="currentColor" strokeWidth="0.8"/>
                                                    <path d="M5 10.4746C5.84223 10.4746 6.52539 11.1578 6.52539 12C6.52539 12.8422 5.84223 13.5254 5 13.5254C4.15777 13.5254 3.47461 12.8422 3.47461 12C3.47461 11.1578 4.15777 10.4746 5 10.4746Z" fill="currentColor" stroke="currentColor" strokeWidth="0.8"/>
                                                </svg>
                                            </div>
                                        }>
                                    </DropdownMenuWrapper>

                                </TableCell>
                            </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default PurchaseHistory;
