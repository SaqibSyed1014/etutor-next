'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import RatingSummary from "@/components/common/RatingSummary";
import RatingDistribution from "@/components/common/chat/RatingDistribution";

const CourseRatingCard = () => {
  const [timeframe, setTimeframe] = useState('week');

  const ratingData = [
    { name: 'Mon', value: 4.2 },
    { name: 'Tue', value: 4.5 },
    { name: 'Wed', value: 4.3 },
    { name: 'Thu', value: 4.6 },
    { name: 'Fri', value: 4.4 },
    { name: 'Sat', value: 4.7 },
    { name: 'Sun', value: 4.6 },
  ];

  const ratingBreakdown = [
    { stars: 5, percentage: 56, color: 'bg-orange-400' },
    { stars: 4, percentage: 37, color: 'bg-orange-400' },
    { stars: 3, percentage: 8, color: 'bg-orange-400' },
    { stars: 2, percentage: 1, color: 'bg-orange-400' },
    { stars: 1, percentage: 1, color: 'bg-orange-400' },
  ];

  return (
    <Card className="dashboard-card">
      <CardHeader className="dashboard-card-header">
        <CardTitle>Overall Course Rating</CardTitle>
        {/*<Select value={timeframe} onValueChange={setTimeframe}>*/}
        {/*  <SelectTrigger className="w-32">*/}
        {/*    <SelectValue />*/}
        {/*  </SelectTrigger>*/}
        {/*  <SelectContent>*/}
        {/*    <SelectItem value="today">Today</SelectItem>*/}
        {/*    <SelectItem value="week">This week</SelectItem>*/}
        {/*    <SelectItem value="month">This month</SelectItem>*/}
        {/*  </SelectContent>*/}
        {/*</Select>*/}
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex px-5 py-6">
          {/* Rating Score */}
          <RatingSummary
            rating={4.6}
            text="Overall Rating"
            className="bg-warning-100 border-0 size-[180px] shrink-0"
          />

          {/* Rating Breakdown */}
          <div className="flex-1">
            <div className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ratingData}>
                  <XAxis hide dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide domain={[4, 5]} />
                  <Area type="monotone" dataKey="value" strokeWidth={3} stroke="#FD8E1F" fill="#FFF2E5" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>


        <hr/>

        <div className="px-5 py-6">
          <RatingDistribution
              showStars={true}
              showBelowLine={false}
              isGrayProgressBar={true}
            />
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseRatingCard;
