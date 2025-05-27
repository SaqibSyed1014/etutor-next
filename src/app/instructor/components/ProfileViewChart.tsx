'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const ProfileViewChart = () => {
  const [timeframe, setTimeframe] = useState('today');

  const dataToday = [
    { name: '6AM', firstValue: 30, secondValue: 70 },
    { name: '9AM', firstValue: 50, secondValue: 50  },
    { name: '12PM', firstValue: 60, secondValue: 40 },
    { name: '3PM', firstValue: 80, secondValue: 20 },
    { name: '6PM', firstValue: 70, secondValue: 30 },
    { name: '9PM', firstValue: 50, secondValue: 50 },
    { name: '3PM', firstValue: 40, secondValue: 60 },
    { name: '6PM', firstValue: 50, secondValue: 50 },
    { name: '9PM', firstValue: 45, secondValue: 55 },
  ];

  const dataWeek = [
    { name: 'Mon', value: 200 },
    { name: 'Tue', value: 300 },
    { name: 'Wed', value: 250 },
    { name: 'Thu', value: 400 },
    { name: 'Fri', value: 350 },
    { name: 'Sat', value: 300 },
    { name: 'Sun', value: 180 },
  ];

  const dataMonth = [
    { name: 'Week 1', value: 1200 },
    { name: 'Week 2', value: 1800 },
    { name: 'Week 3', value: 1500 },
    { name: 'Week 4', value: 2200 },
  ];

  const getCurrentData = () => {
    switch (timeframe) {
      case 'today': return dataToday;
      case 'week': return dataWeek;
      case 'month': return dataMonth;
      default: return dataToday;
    }
  };

  const getCurrentTotal = () => {
    switch (timeframe) {
      case 'today': return '$7,443';
      case 'week': return '$52,100';
      case 'month': return '$208,400';
      default: return '$7,443';
    }
  };

  return (
    <Card className="dashboard-card h-full flex flex-col">
      <CardHeader className="dashboard-card-header">
        <CardTitle>Profile View</CardTitle>
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
      <CardContent className="h-full flex flex-col grow flex-1">
        <div className="h-[270px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={getCurrentData()}>
              <XAxis hide dataKey="name" />
              <YAxis hide />
              <Bar dataKey="secondValue" fill="#23BD33" radius={[2, 2, 0, 0]} stackId="a" />
              <Bar dataKey="firstValue" fill="#E1F7E3" radius={[2, 2, 0, 0]} stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-auto">
          <div className="text-xl font-medium">{getCurrentTotal()}</div>
          <p className="text-gray-600">USD Dollar you earned</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileViewChart;
