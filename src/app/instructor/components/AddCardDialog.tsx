'use client';

import React, { useState } from 'react';
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {CreditCard} from "@/assets/icons/common-icons";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

interface AddCardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddCard: (cardData: {
    number: string;
    name: string;
    expiry: string;
    type: 'visa' | 'mastercard';
    background: string;
  }) => void;
}

const cardSchema = z.object({
  name: z.string().min(1, "Name is required"),
  number: z.string().min(16, "Card number must be 16 digits").max(16),
  expiry: z.string().regex(/^\d{2}\/\d{2}$/, "Expiry must be in MM/YY format"),
  cvc: z.string().min(3, "CVC must be 3 digits").max(3)
});

type CardFormData = z.infer<typeof cardSchema>;

const AddCardDialog: React.FC<AddCardDialogProps> = ({ open, onOpenChange, onAddCard }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<CardFormData>({
    resolver: zodResolver(cardSchema),
    mode: "onChange",
  });

  const onSubmit = (formData: CardFormData) => {
    const maskedNumber = formData.number.slice(0, 4) + ' **** **** ****';
    const cardType = formData.number.startsWith('4') ? 'visa' : 'mastercard';

    const backgrounds = [
      'bg-gradient-to-br from-purple-600 to-blue-600',
      'bg-gradient-to-br from-green-600 to-teal-600',
      'bg-gradient-to-br from-red-600 to-pink-600',
      'bg-gradient-to-br from-yellow-600 to-orange-600',
    ];
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    onAddCard({
      number: maskedNumber,
      name: formData.name,
      expiry: formData.expiry,
      type: cardType,
      background: randomBackground
    });

    reset();
  };

  return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>New Payment Card</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name on card" {...register("name")} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <Label htmlFor="number">Card Number</Label>
              <Input
                  id="number"
                  placeholder="Card Number"
                  maxLength={16}
                  {...register("number")}
                  appendIcon={
                    <div className="text-primary-500 [&_svg]:size-5">
                      <CreditCard />
                    </div>
                  }
                  showIconSeparator={true}
              />
              {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">MM / YY</Label>
                <Input id="expiry" placeholder="MM / YY" maxLength={5} {...register("expiry")} />
                {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry.message}</p>}
              </div>
              <div>
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="Security Code" maxLength={3} {...register("cvc")} />
                {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc.message}</p>}
              </div>
            </div>

            <DialogFooter className="flex justify-between p-0 pt-2">
              <DialogClose asChild>
                <Button variant="gray" type="button">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={!isValid}>
                Add Card
              </Button>
            </DialogFooter>
          </form>

        </DialogContent>
      </Dialog>
  );
};

export default AddCardDialog;
