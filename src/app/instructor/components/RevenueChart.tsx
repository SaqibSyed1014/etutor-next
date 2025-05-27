'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, ComposedChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Area } from 'recharts';

const RevenueChart = () => {
  const [timeframe, setTimeframe] = useState('today');

  const dataToday = [
    { name: 'Aug 07', value: 400 },
    { name: 'Aug 08', value: 600 },
    { name: 'Aug 09', value: 500 },
    { name: 'Aug 10', value: 700 },
    { name: 'Aug 11', value: 650 },
  ];

  const dataWeek = [
    { name: 'Week 1', value: 2800 },
    { name: 'Week 2', value: 3200 },
    { name: 'Week 3', value: 2900 },
    { name: 'Week 4', value: 3500 },
    { name: 'Week 5', value: 3100 },
  ];

  const dataMonth = [
    { name: 'Jan', value: 12000 },
    { name: 'Feb', value: 15000 },
    { name: 'Mar', value: 13500 },
    { name: 'Apr', value: 18000 },
    { name: 'May', value: 16500 },
    { name: 'Jun', value: 20000 },
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
      case 'today': return '$1,749';
      case 'week': return '$15,500';
      case 'month': return '$95,000';
      default: return '$1,749';
    }
  };

  return (
    <Card className="dashboard-card h-full">
      <CardHeader className="dashboard-card-header">
        <CardTitle>Revenue</CardTitle>
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
      <CardContent className="h-full">
        <div className="h-52 w-full">
          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={getCurrentData()} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#999', fontSize: 12 }}
                />
                <YAxis
                    scale="log"
                    domain={[1, 'auto']}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#999', fontSize: 12 }}
                    type="number"
                />
                <Tooltip
                    contentStyle={{ backgroundColor: '#111827', border: 'none', borderRadius: '6px' }}
                    labelStyle={{ color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: number) => value.toLocaleString()}
                />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#6366f1"
                    strokeWidth={2}
                    dot={{ r: 4, stroke: '#fff', strokeWidth: 2, fill: '#6366f1' }}
                    activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2, fill: '#6366f1' }}
                    fill="url(#gradient)"
                    fillOpacity={1}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
