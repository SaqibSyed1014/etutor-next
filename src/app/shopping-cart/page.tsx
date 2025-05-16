'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {Breadcrumbs} from "@/components/Breadcrumbs";
import {Rating} from "@/components/tiny/tiny-collection";
import {XCircle, ArrowRight} from "@/assets/icons/common-icons";
import {coursesData} from "@/lib/@fake-db/courses";
import {Course} from "@/lib/@fake-db/courses/type";
import DefaultLayout from "@/components/layouts/DefaultLayout";

const Page = () => {
    const [cartItems, setCartItems] = useState<Course[]>([coursesData[0], coursesData[1], coursesData[2]])

    const [couponCode, setCouponCode] = useState("");

    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const couponDiscount = 8; // 8%
    const discountAmount = (subtotal * couponDiscount) / 100;
    const tax = 17.99;
    const total = subtotal - discountAmount + tax;

    const removeFromCart = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const moveToWishlist = (id: number) => {
        console.log("Moved item to wishlist:", id);
        removeFromCart(id);
    };

    const handleApplyCoupon = () => {
        if (couponCode) {
            console.log("Applied coupon:", couponCode);
        }
    };

    return (
        <>
            <DefaultLayout>
                <Breadcrumbs/>

                <section className="py-20">
                    <div className="container">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-2xl">
                                Shopping Cart <span className="font-normal">({cartItems.length})</span>
                            </h1>

                            <div className="flex gap-6">
                                {/* Cart Items */}
                                <div className="grow">
                                    <div className="border border-gray-100">
                                        <div
                                            className="grid grid-cols-3 border-b px-4 py-3 text-sm font-medium text-gray-700">
                                            <div className="col-span-2">COURSE</div>

                                            <div className="grid grid-cols-2">
                                                <span>PRICES</span>
                                                <span>ACTION</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-6 p-6">
                                            {cartItems.map((item) => (
                                                <div key={item.id}
                                                     className="grid grid-cols-3 items-center pb-6 border-b border-gray-100 last:pb-0 last:border-0">
                                                    <div className="col-span-2 flex gap-4">
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="self-center text-gray-500 hover:text-gray-900 transition"
                                                        >
                                                            <XCircle/>
                                                        </button>
                                                        <div className="w-40 h-28 overflow-hidden">
                                                            <img
                                                                src={item.image}
                                                                alt={item.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div className="w-full max-w-[312px] flex flex-col justify-between">
                                                            <div className="flex flex-col gap-2">
                                                                <Rating rating={item.rating} showCount={true}
                                                                        count={item.reviewCount.toLocaleString()}/>
                                                                <h3 className="font-medium text-base">{item.title}</h3>
                                                            </div>
                                                            <div className="text-sm text-gray-700">
                                                                <span className="text-gray-400">Course by: </span>
                                                                {item.instructor.name} {item.coInstructor &&
                                                                <span> • {item.coInstructor.name}</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 items-center">
                                                        <div className="flex items-center gap-1">
                                                            <span className="text-xl font-medium text-primary-500">
                                                                ${item.price.toFixed(2)}
                                                            </span>
                                                            <span className="text-gray-500 line-through">
                                                                {item.originalPrice && `$${item.originalPrice.toFixed(2)}`}
                                                            </span>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            onClick={() => moveToWishlist(item.id)}
                                                        >
                                                            Move To Wishlist
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Order Summary */}
                                <div className="w-full max-w-[312px] space-y-6">
                                    <div className="space-y-4 text-gray-600 text-sm">
                                        <div className="flex justify-between ">
                                            <span>Subtotal</span>
                                            <p className="font-semibold">${subtotal.toFixed(2)} USD</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Coupon Discount</span>
                                            <p className="font-semibold">{couponDiscount}%</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Taxes</span>
                                            <p className="font-semibold">${tax.toFixed(2)} USD</p>
                                        </div>

                                        <hr className="h-px bg-gray-100"/>

                                        <div className="flex justify-between text-[#202029]">
                                            <span>Total:</span>
                                            <span className="text-2xl font-semibold">
                                                ${total.toFixed(2)} USD
                                            </span>
                                        </div>
                                    </div>
                                    <Button className="w-full">
                                        Proceed To Checkout <ArrowRight/>
                                    </Button>

                                    <hr className="h-px bg-gray-100"/>

                                    {/* Coupon Code */}
                                    <div className="flex flex-col gap-4">
                                        <p className="text-gray-900 font-medium">Apply coupon code</p>
                                        <div className="relative">
                                            <input
                                                placeholder="Coupon code"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                                className="w-full"
                                            />
                                            <div className="absolute top-1 right-1.5 bottom-1.5">
                                                <Button
                                                    className="h-9 px-4 text-sm bg-gray-900 hover:bg-gray-700"
                                                    onClick={handleApplyCoupon}
                                                >
                                                    Apply
                                                </Button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </>
    );
};

export default Page;
