'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import AddCardDialog from './AddCardDialog';
import 'swiper/css';
import {ArrowLeft, ArrowRight} from "@/assets/icons/common-icons";
import {Swiper as SwiperType} from "swiper/types";

interface CreditCard {
  id: string;
  number: string;
  name: string;
  expiry: string;
  type: 'visa' | 'mastercard';
  background: string;
}

const CreditCardCarousel = () => {
  const [cards, setCards] = useState<CreditCard[]>([
    {
      id: '1',
      number: '4855 **** **** ****',
      name: 'Vako Shvili',
      expiry: '04/24',
      type: 'visa',
      background: 'bg-gradient-to-br from-purple-600 to-blue-600'
    },
      {
          id: '1',
          number: '4855 **** **** ****',
          name: 'Vako Shvili',
          expiry: '04/24',
          type: 'mastercard',
          background: 'bg-gradient-to-br from-purple-600 to-blue-600'
      }
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

  const handleAddCard = (cardData: Omit<CreditCard, 'id'>) => {
    const newCard = {
      ...cardData,
      id: Date.now().toString()
    };
    setCards(prev => [...prev, newCard]);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={false}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
          className="credit-card-swiper"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className={`relative space-y-6 p-6 text-white overflow-hidden h-48 shadow-[0_8px_32px0_#453FCA3D`} style={{ background: 'radial-gradient(100% 230.7% at 1.56% 0%, #453FCA 0%, #342F98 100%)' }}>
                <div className="flex justify-between items-start">
                  <div className="text-2xl font-bold">
                    {card.type === 'visa' ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="28" viewBox="0 0 84 28" fill="none">
                            <path d="M54.9658 0C58.0954 8.07462e-05 61.098 1.16727 61.1299 1.17969L60.1523 6.98828C57.2193 5.32771 50.5438 4.93476 50.543 7.99316C50.543 11.051 60.1084 11.7062 60.1084 18.7393C60.1082 25.5115 53.0524 27.9999 48.375 28C43.6989 28 40.6377 26.4727 40.6377 26.4727L41.6572 20.3984C44.4636 22.7131 52.9668 23.3709 52.9668 19.7002C52.966 16.03 43.4865 15.9429 43.4863 8.95508C43.4863 1.52763 51.5644 0 54.9658 0ZM31.1709 0.483398L20.2666 27.5342H13.125L7.16992 4.0332C4.28511 2.25315 1.71337 1.40805 0.59375 1.09375C2.09459 1.51422 6.20167 2.88341 10.1729 6.18652C14.8564 10.0807 16.4346 14.919 16.4854 15.0771L16.4873 15.084L16.4863 15.082L17.2598 19.0889L23.7939 0.483398H31.1709ZM36.415 27.5332H29.5605L33.8447 0.483398H40.6992L36.415 27.5332ZM78.5127 0.482422L84 27.5332H77.7061L76.9033 23.5156H68.1904L66.7617 27.5332H59.6162L69.8389 2.49805C69.8495 2.46419 70.4803 0.482422 73.0029 0.482422H78.5127ZM70.1641 17.9648H75.792L73.7656 7.8418L70.1641 17.9648ZM0 0.938477C0 0.938477 0.198242 0.983778 0.555664 1.08301C0.200081 0.984085 0.00150732 0.941729 0 0.941406V0.938477Z" fill="white"/>
                            <path opacity="0.5" d="M16.5185 14.7055L14.2078 2.84366C14.2078 2.84366 13.9284 0.46875 10.9502 0.46875H0.127L0 0.915369C0 0.915369 5.20206 1.99346 10.1918 6.03279C14.9627 9.89362 16.5185 14.7055 16.5185 14.7055Z" fill="white"/>
                        </svg>
                        : 'MASTERCARD'}
                  </div>
                  <div className="text-white opacity-50">•••</div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-6">
                        <div className="text-2xl">
                            {card.number}
                        </div>
                        <svg className="opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15.75 15.75H20.25V3.75H8.25V8.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.75 8.25H3.75V20.25H15.75V8.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] text-white/40 uppercase">Expires</div>
                      <div className="font-medium text-sm">{card.expiry}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-white/40 uppercase">Card Name</div>
                      <div className="font-medium text-sm">{card.name}</div>
                    </div>
                  </div>
                </div>

                <div className="size-[90px] bg-white/5 rounded-full absolute left-[18px] -top-[65px]"></div>
                  <div className="size-[236px] bg-white/5 rounded-full absolute -right-[56px] -bottom-[90px]"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-1.5">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                  index === activeIndex ? 'bg-primary-500' : 'bg-primary-100'
              }`}
            />
          ))}
        </div>
          <div className="flex items-center gap-3 text-gray-700 [&_svg]:cursor-pointer">
              <div className={activeIndex === 0 ? 'pointer-events-none text-gray-200' : ''} onClick={() => swiper?.slidePrev()}><ArrowLeft/></div>
              <div className={activeIndex === (swiper?.slides?.length ?? 0) - 1 ? 'pointer-events-none text-gray-200' : ''} onClick={() => swiper?.slideNext()}><ArrowRight/></div>
          </div>
      </div>

      <div
        onClick={() => setIsDialogOpen(true)}
        className="w-full cursor-pointer flex justify-center gap-2 items-center text-base font-medium py-8 border-2 border-dashed border-gray-100 text-orange-500 hover:bg-primary-100"
      >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#FF6636" strokeWidth="1.5" strokeMiterlimit="10"/>
              <path d="M11 16H21" stroke="#FF6636" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 11V21" stroke="#FF6636" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        Add new card
      </div>

      <AddCardDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onAddCard={handleAddCard}
      />
    </div>
  );
};

export default CreditCardCarousel;
