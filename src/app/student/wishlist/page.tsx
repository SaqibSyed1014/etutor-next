'use client';

import React, {useState} from 'react';
import { Heart } from 'lucide-react';
import {Star} from "@/assets/icons/common-icons"
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from "next/link";

interface WishlistItem {
  id: number;
  image: string;
  title: string;
  instructors: string[];
  rating: number;
  reviewCount: number;
  currentPrice: number;
  originalPrice?: number;
}

const Page = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(
      [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
          title: "The Ultimate Drawing Course - Beginner to Advanced",
          instructors: ["Harry Potter", "John Wick"],
          rating: 4.8,
          reviewCount: 43444,
          currentPrice: 37.00,
          originalPrice: 49.00
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop",
          title: "Digital Marketing Masterclass - 23 Courses in 1",
          instructors: ["Nobody"],
          rating: 4.8,
          reviewCount: 43444,
          currentPrice: 24.00
        },
        {
          id: 3,
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
          title: "Angular - The Complete Guide (2021 Edition)",
          instructors: ["Kevin Gilbert"],
          rating: 4.7,
          reviewCount: 49144,
          currentPrice: 13.00
        }
      ]
  );
  const removeFromWishlist = (id: number) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updatedWishlist);
  };

  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-6">Wishlist <span className="font-normal">({wishlistItems.length})</span></h1>

      <div className="bg-white border border-gray-100 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableHead className="w-1/2">COURSE</TableHead>
              <TableHead>PRICES</TableHead>
              <TableHead>ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {wishlistItems.map((item, index) => (
              <TableRow key={index} className="border-b border-gray-100 pb-6 last:pb-0 last:border-b-0">
                <TableCell>
                  <div className="flex gap-5 items-stretch">
                    <div className="w-40 h-[130px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col ">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              <Star/>
                              <span className="ml-1 text-sm font-medium">{item.rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">
                              ({item.reviewCount.toLocaleString()} Review)
                            </span>
                          </div>

                          <h3 className="font-medium text-gray-900 text-base mb-1">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-400">
                          Course by: <span className="text-gray-700">{item.instructors.join(' • ')}</span>
                        </p>
                      </div>

                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-medium text-primary-500">
                      ${item.currentPrice.toFixed(2)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Link href="/checkout" className="max-w-[176px] w-full">
                        <Button
                          variant="secondary"
                          className="bg-gray-50  border-none w-full"
                      >
                        Buy Now
                      </Button>
                    </Link>
                    <Link href="/shopping-cart" className="max-w-[176px] w-full">
                      <Button className="w-full">
                        Add To Cart
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-12"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Heart className="w-5 h-5 fill-current" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {!wishlistItems.length &&
                <TableRow>
                  <TableCell colSpan={3}>
                    <p className="text-center text-xl font-medium py-6">No items found in wishlist</p>
                  </TableCell>
                </TableRow>
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
