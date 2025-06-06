'use client';

import React, { useState } from 'react';
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {CreditCard} from "@/assets/icons/common-icons";

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

const AddCardDialog: React.FC<AddCardDialogProps> = ({ open, onOpenChange, onAddCard }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    expiry: '',
    cvc: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format card number for display
    const maskedNumber = formData.number.slice(0, 4) + ' **** **** ****';

    // Determine card type based on first digit
    const cardType = formData.number.startsWith('4') ? 'visa' : 'mastercard';

    // Random background gradient
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

    // Reset form
    setFormData({ name: '', number: '', expiry: '', cvc: '' });
  };

  const handleCancel = () => {
    setFormData({ name: '', number: '', expiry: '', cvc: '' });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>New Payment Card</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Name on card"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          <div>
            <Label htmlFor="number">Card Number</Label>
              <Input
                id="number"
                placeholder="Label"
                value={formData.number}
                onChange={(e) => setFormData(prev => ({ ...prev, number: e.target.value }))}
                maxLength={16}
                required
                appendIcon={
                  <div className="text-primary-500 [&_svg]:size-5">
                    <CreditCard/>
                  </div>
                }
                showIconSeparator={true}
              />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">MM / YY</Label>
              <Input
                id="expiry"
                placeholder="MM / YY"
                value={formData.expiry}
                onChange={(e) => setFormData(prev => ({ ...prev, expiry: e.target.value }))}
                maxLength={5}
                required
              />
            </div>
            <div>
              <Label htmlFor="cvc">CVC</Label>
              <Input
                id="cvc"
                placeholder="Security Code"
                value={formData.cvc}
                onChange={(e) => setFormData(prev => ({ ...prev, cvc: e.target.value }))}
                maxLength={3}
                required
              />
            </div>
          </div>
        </form>

        <DialogFooter className="flex justify-between pt-4">
          <DialogClose asChild>
            <Button variant="gray">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSubmit} type="submit">
            Add Card
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddCardDialog;
