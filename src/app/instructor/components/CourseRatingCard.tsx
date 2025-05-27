'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Star } from 'lucide-react';

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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Overall Course Rating</CardTitle>
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
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rating Score */}
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-gray-800 mb-2">4.6</div>
            <div className="flex justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-orange-400 text-orange-400"
                />
              ))}
            </div>
            <div className="text-sm text-gray-600">Overall Rating</div>
          </div>

          {/* Rating Breakdown */}
          <div className="space-y-3">
            {ratingBreakdown.map((rating) => (
              <div key={rating.stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-16">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < rating.stars 
                          ? 'fill-orange-400 text-orange-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${rating.color} h-2 rounded-full`}
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 w-12 text-right">
                  {rating.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Trend Chart */}
        <div className="mt-6">
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ratingData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis hide domain={[4, 5]} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#fb923c"
                  strokeWidth={2}
                  dot={{ fill: '#fb923c', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseRatingCard;
