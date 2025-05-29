'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AreaChart, XAxis, YAxis, ResponsiveContainer, Tooltip, Area } from 'recharts';

const RevenueChart = ({ chartColor = '#6366f1' }: { chartColor?: string }) => {
  const [timeframe, setTimeframe] = useState('today');

  const dataToday = [
    { name: 'Aug 07', value: 100 },
    { name: 'Aug 08', value: 200 },
    { name: 'Aug 09', value: 250 },
    { name: 'Aug 10', value: 80 },
    { name: 'Aug 11', value: 70 },
    { name: 'Aug 12', value: 165 },
    { name: 'Aug 13', value: 300 },
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
    <Card className="dashboard-card h-full flex flex-col">
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
      <CardContent className="flex-1 flex items-end">
        <div className="h-[330px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={getCurrentData()} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={chartColor} stopOpacity={0.2} />
                  <stop offset="100%" stopColor={chartColor} stopOpacity={0} />
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
                  tickMargin={15}
                  type="number"
              />
              <Tooltip
                  contentStyle={{ backgroundColor: '#1D2026', border: 'none', borderRadius: '0' }}
                  cursor={{ strokeDasharray: '8 4', stroke: chartColor }}
                  labelStyle={{ color: '#fff' }}
                  itemStyle={{ color: '#8C94A3' }}
                  formatter={(value: number) => value.toLocaleString()}
              />
              {/*<Line*/}
              {/*    type="monotone"*/}
              {/*    dataKey="value"*/}
              {/*    stroke="#564FFD"*/}
              {/*    strokeWidth={2}*/}
              {/*    dot={false}*/}
              {/*    activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2, fill: '#564FFD' }}*/}
              {/*    fill="url(#gradient)"*/}
              {/*    fillOpacity={1}*/}
              {/*/>*/}
              <Area type="monotone" dataKey="value" strokeWidth={3} stroke={chartColor} fill="url(#gradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
