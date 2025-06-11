"use client";

import React, {useState} from 'react';
import {CheckCircle, CreditCard} from "@/assets/icons/common-icons";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";

const PaymentMethodForm = ({ isGiftPayment }: { isGiftPayment?: boolean }) => {
    const [formData, setFormData] = useState({
        paymentMethod: "visa",
        cardName: "",
        cardNumber: "",
        expDate: "",
        cvc: "",
        saveCard: false,
    });
    const paymentMethods = [
        {
            number: '4855 **** **** ****',
            name: '04/24',
            date: 'Vako Shvili',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="12" viewBox="0 0 32 12" fill="none">
                <path d="M20.9395 0.666992C22.138 0.667046 23.2881 1.11621 23.2881 1.11621L22.915 3.3291C21.7977 2.69655 19.2554 2.54693 19.2549 3.71191C19.2549 4.87679 22.8984 5.12639 22.8984 7.80566C22.8984 10.3856 20.2106 11.3339 18.4287 11.334C16.664 11.334 15.503 10.7626 15.4814 10.752L15.8691 8.43848C16.9383 9.32019 20.1777 9.57018 20.1777 8.17188C20.1775 6.77365 16.5664 6.74023 16.5664 4.07812C16.5666 1.24884 19.6437 0.666992 20.9395 0.666992ZM11.875 0.851562L7.7207 11.1562H5L2.73145 2.20312C3.10445 2.43359 3.49159 2.70456 3.875 3.02344C5.23555 4.15468 5.90874 5.49529 6.16016 6.09473L6.28125 6.41211V6.41309L6.28027 6.41211L6.5752 7.93848L9.06445 0.851562H11.875ZM13.8721 11.1562H11.2607L12.8936 0.851562H15.5049L13.8721 11.1562ZM29.9092 0.850586L32 11.1562H29.6025L29.2969 9.625H25.9775L25.4326 11.1562H22.7109L26.6055 1.61914C26.6055 1.61914 26.8413 0.850613 27.8105 0.850586H29.9092ZM26.7295 7.51074H28.873L28.1016 3.6543L26.7295 7.51074ZM2.30859 1.95703C2.42475 2.02149 2.54329 2.08936 2.66309 2.16211C2.54327 2.08944 2.42476 2.02143 2.30859 1.95703ZM2.02441 1.80469C2.07418 1.83035 2.12505 1.85561 2.17578 1.88281C2.12505 1.85563 2.07418 1.83033 2.02441 1.80469ZM1.72754 1.65625C1.77959 1.68105 1.8323 1.70683 1.88574 1.7334C1.8323 1.70685 1.77958 1.68104 1.72754 1.65625ZM0.99707 1.34473C1.19534 1.42114 1.41711 1.51127 1.6543 1.62207C1.41713 1.51131 1.1953 1.42116 0.99707 1.34473ZM0.578125 1.19238C0.641238 1.21334 0.708826 1.23613 0.780273 1.26172C0.708841 1.23611 0.64122 1.21336 0.578125 1.19238ZM0.258789 1.09375C0.306327 1.10733 0.360017 1.12235 0.418945 1.14062C0.36003 1.12233 0.306307 1.10735 0.258789 1.09375Z" fill="#2566AF"/>
                <path d="M6.29275 6.26826L5.41249 1.74946C5.41249 1.74946 5.30605 0.844727 4.17151 0.844727H0.048381L0 1.01487C0 1.01487 1.98174 1.42557 3.88257 2.96436C5.70008 4.43515 6.29275 6.26826 6.29275 6.26826Z" fill="#E6A540"/>
            </svg>,
            message: ''
        },
        {
            number: '4855 **** **** ****',
            name: '04/24',
            date: 'Vako Shvili',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20" fill="none">
                <path d="M20.3317 17.7851H11.6802V2.24512H20.3318L20.3317 17.7851Z" fill="#FF5F00"/>
                <path d="M12.2267 10.0129C12.2267 6.86067 13.7034 4.05261 16.003 2.24297C14.2623 0.871153 12.1094 0.12662 9.89274 0.129894C4.43223 0.129894 0.00585938 4.55462 0.00585938 10.0129C0.00585938 15.4713 4.43223 19.896 9.89274 19.896C12.1095 19.8993 14.2625 19.1548 16.0032 17.7829C13.7038 15.9736 12.2267 13.1654 12.2267 10.0129Z" fill="#EB001B"/>
                <path d="M32.0015 10.0129C32.0015 15.4713 27.5752 19.896 22.1146 19.896C19.8977 19.8992 17.7444 19.1547 16.0034 17.7829C18.3036 15.9733 19.7804 13.1654 19.7804 10.0129C19.7804 6.86051 18.3036 4.05261 16.0034 2.24297C17.7444 0.871194 19.8976 0.126677 22.1145 0.129893C27.575 0.129893 32.0014 4.55462 32.0014 10.0129" fill="#F79E1B"/>
            </svg>,
            message: ''
        },
        {
            number: '4855 **** **** ****',
            name: '04/24',
            date: 'Vako Shvili',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                <path d="M6.89554 27.0344L7.38053 23.9539L6.30021 23.9289H1.1416L4.72657 1.19774C4.73725 1.12829 4.77252 1.06498 4.82597 1.01936C4.87942 0.973745 4.94748 0.948852 5.01775 0.949223H13.7159C16.6035 0.949223 18.5963 1.55012 19.6367 2.73615C20.1245 3.29253 20.4352 3.87395 20.5854 4.5138C20.743 5.18517 20.7458 5.98729 20.5919 6.9656L20.5807 7.037V7.66386L21.0685 7.9402C21.4409 8.12885 21.7756 8.38405 22.0561 8.69317C22.4734 9.16888 22.7432 9.77349 22.8573 10.4903C22.9751 11.2275 22.9361 12.1047 22.7432 13.0979C22.5207 14.2403 22.1609 15.2353 21.675 16.0495C21.2462 16.7789 20.6698 17.4106 19.9826 17.9041C19.3372 18.3622 18.5703 18.71 17.7033 18.9325C16.8632 19.1514 15.9053 19.2617 14.8546 19.2617H14.1777C13.6936 19.2617 13.2235 19.436 12.8544 19.7485C12.4859 20.0644 12.2414 20.5008 12.1645 20.98L12.1135 21.2573L11.2567 26.6867L11.2177 26.886C11.2075 26.9491 11.1899 26.9806 11.1639 27.0019C11.1388 27.0225 11.1074 27.034 11.0749 27.0344H6.89554Z" fill="#253B80"/>
                <path d="M21.5301 7.10938C21.5041 7.27536 21.4744 7.44506 21.4411 7.61939C20.294 13.5087 16.3696 15.5432 11.3575 15.5432H8.80556C8.19261 15.5432 7.6761 15.9884 7.58059 16.593L6.27401 24.8794L5.90401 27.2283C5.88928 27.3214 5.8949 27.4167 5.92051 27.5075C5.94612 27.5983 5.99109 27.6824 6.05234 27.7542C6.11359 27.8259 6.18966 27.8835 6.27531 27.923C6.36097 27.9626 6.45416 27.983 6.54849 27.9831H11.0747C11.6107 27.9831 12.066 27.5936 12.1504 27.0651L12.1949 26.8351L13.0471 21.427L13.1018 21.1303C13.1852 20.5999 13.6415 20.2104 14.1775 20.2104H14.8544C19.2396 20.2104 22.6725 18.43 23.6759 13.2778C24.095 11.1255 23.878 9.32842 22.769 8.0645C22.4175 7.67351 21.9976 7.34985 21.5301 7.10938Z" fill="#179BD7"/>
                <path d="M20.3301 6.63081C19.9638 6.52485 19.5913 6.44216 19.2146 6.38321C18.4702 6.26882 17.718 6.21394 16.9649 6.21908H10.1474C9.8879 6.21888 9.63693 6.31151 9.43982 6.48022C9.2427 6.64893 9.11245 6.88259 9.0726 7.13897L7.6223 16.3249L7.58057 16.5929C7.62575 16.3005 7.7741 16.0339 7.99878 15.8413C8.22347 15.6488 8.50964 15.543 8.80554 15.5432H11.3575C16.3696 15.5432 20.2939 13.5077 21.441 7.61932C21.4753 7.44498 21.5041 7.27528 21.53 7.1093C21.2274 6.95057 20.9119 6.8175 20.587 6.71148C20.5018 6.68322 20.4162 6.65632 20.3301 6.63081Z" fill="#222D65"/>
                <path d="M9.07278 7.13935C9.11228 6.8829 9.24247 6.64913 9.43968 6.4805C9.6369 6.31187 9.88805 6.21958 10.1475 6.22039H16.9651C17.7728 6.22039 18.5267 6.27324 19.2148 6.38452C19.6804 6.4577 20.1395 6.56714 20.5881 6.71186C20.9266 6.82406 21.2409 6.95667 21.5312 7.10967C21.8724 4.93328 21.5284 3.45144 20.3516 2.10963C19.0543 0.632424 16.7129 0 13.7167 0H5.01858C4.40656 0 3.88448 0.445108 3.7899 1.05064L0.166904 24.0154C0.150029 24.1221 0.156449 24.2311 0.185724 24.335C0.214999 24.4389 0.266433 24.5352 0.336488 24.6173C0.406543 24.6995 0.493557 24.7654 0.591545 24.8107C0.689532 24.856 0.796167 24.8795 0.904114 24.8797H6.27416L7.62247 16.3253L9.07278 7.13935Z" fill="#253B80"/>
            </svg>,
            message: 'You will be redirected to the PayPal site after reviewing your order.'
        }
    ]

    return (
            <div className="space-y-6">
                <h2 className={`${isGiftPayment ? 'text-lg font-medium':'text-3xl font-semibold pb-4'}`}>Payment Method</h2>

                <div className="space-y-4">
                    {paymentMethods.map((item, index) => {
                        return (
                            <div key={index} className="group cursor-pointer border border-gray-100 px-6 py-4 flex items-center gap-6">
                                <div className="w-8 grid place-items-center">{item.icon}</div>
                                {item.message.length
                                    ? <p className="text-xs text-gray-500">{item.message}</p>
                                    :
                                    <div className="flex items-center gap-6 flex-1">
                                        <p className="w-full max-w-[200px]">{item.number}</p>
                                        <p className="w-full max-w-[124px]">{item.date}</p>
                                        <p className="w-full max-w-[124px]">{item.name}</p>
                                        <div className="opacity-0 group-hover:opacity-100 [&>svg]:size-6"><CheckCircle/></div>
                                    </div>
                                }
                            </div>
                        )
                    })}
                    <div  className="group cursor-pointer border border-gray-100 hover:border-success-500 px-6 py-4 flex items-center gap-6">
                        <div className="text-primary-500"><CreditCard/></div>
                        <p>New Payment Cards</p>
                        <div className="opacity-0 group-hover:opacity-100 [&>svg]:size-6 ml-auto"><CheckCircle/></div>
                    </div>
                </div>

                <div className="space-y-6 mt-6">
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            placeholder="Name on card"
                            className="input"
                        />
                    </div>

                    <div>
                        <div>
                            <Label htmlFor="number">Card Number</Label>
                            <Input
                                id="number"
                                placeholder="Card Number"
                                required
                                appendIcon={
                                    <div className="text-primary-500 [&_svg]:size-5">
                                        <CreditCard/>
                                    </div>
                                }
                                showIconSeparator={true}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label>MM / YY</label>
                            <input
                                type="text"
                                name="expDate"
                                value={formData.expDate}
                                placeholder="MM / YY"
                                className="input"
                            />
                        </div>

                        <div>
                            <label>CVC</label>
                            <input
                                type="text"
                                name="cvc"
                                value={formData.cvc}
                                placeholder="Security Code"
                                className="input"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="rememberMe"
                            name="rememberMe"
                            checked={formData.saveCard}
                            onCheckedChange={(checked) => {
                                setFormData(prev => ({
                                    ...prev,
                                    saveCard: checked === true
                                }));
                            }}
                        />
                        <label htmlFor="rememberMe" className="text-sm text-gray-700 !pb-0">
                            Remember this card, save it on my card list
                        </label>
                    </div>
                </div>
            </div>
    );
};

export default PaymentMethodForm;
