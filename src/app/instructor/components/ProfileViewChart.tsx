'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip} from 'recharts';

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
    { name: '9PM', firstValue: 45, secondValue: 55 }
  ];

  const dataWeek = [
    { name: 'Mon', firstValue: 20, secondValue: 80 },
    { name: 'Tues', firstValue: 90, secondValue: 10 },
    { name: 'Wed', firstValue: 5, secondValue: 95 },
    { name: 'Thurs', firstValue: 25, secondValue: 75 },
    { name: 'Fri', firstValue: 50, secondValue: 50 },
    { name: 'Sat', firstValue: 80, secondValue: 20 },
    { name: 'Sun', firstValue: 50, secondValue: 50 },
  ];

  const dataMonth = [
    { name: 'Jan', firstValue: 10, secondValue: 90 },
    { name: 'Feb', firstValue: 50, secondValue: 50 },
    { name: 'Mar', firstValue: 35, secondValue: 65 },
    { name: 'Apr', firstValue: 20, secondValue: 80 },
    { name: 'May', firstValue: 50, secondValue: 50 },
    { name: 'Jun', firstValue: 10, secondValue: 90 },
    { name: 'July', firstValue: 60, secondValue: 40 },
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
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="chart-dropdown">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This week</SelectItem>
            <SelectItem value="month">This month</SelectItem>
          </SelectContent>
        </Select>
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
