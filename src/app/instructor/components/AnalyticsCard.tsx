'use client';

import React from 'react';
import { Card } from '@/components/ui/card';

interface AnalyticsCardProps {
  icon: React.ReactNode;
  count: number | string;
  label: string;
  bgColor: string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ icon, count, label, bgColor }) => {
  return (
    <Card className={`bg-white border-0 p-6 flex items-center gap-4`}>
      <div className={`${bgColor} grid place-items-center size-[60px]`}>
        {icon}
      </div>
      <div>
        <div className="text-2xl text-gray-900">{count}</div>
        <div className="text-sm text-gray-700">{label}</div>
      </div>
    </Card>
  );
};

export default AnalyticsCard;
