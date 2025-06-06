'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AreaChart, XAxis, YAxis, ResponsiveContainer, Tooltip, Area } from 'recharts';

const RevenueChart = ({ cardTitle = 'Revenue', chartColor = '#6366f1' }: { cardTitle?: string; chartColor?: string }) => {
  const [timeframe, setTimeframe] = useState('today');

  const dataToday = [
    { name: 'Aug 01', value: 105000 },
    { name: 'Aug 05', value: 392000 },
    { name: 'Aug 10', value: 30000 },
    { name: 'Aug 15', value: 290000 },
    { name: 'Aug 20', value: 70000 },
    { name: 'Aug 25', value: 9000 },
    { name: 'Aug 30', value: 750000 },
  ];

  const dataWeek = [
    { name: 'Week 1', value: 500000 },
    { name: 'Week 2', value: 100000 },
    { name: 'Week 3', value: 800000 },
    { name: 'Week 4', value: 90000 },
    { name: 'Week 5', value: 50000 },
  ];

  const dataMonth = [
    { name: 'Jan', value: 700000 },
    { name: 'Feb', value: 100000 },
    { name: 'Mar', value: 800000 },
    { name: 'Apr', value: 18000 },
    { name: 'May', value: 70000 },
    { name: 'Jun', value: 10000 },
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
        <CardTitle>{cardTitle}</CardTitle>
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
                  ticks={[1, 1000, 10000, 50000, 100000, 500000, 1000000]}
                  tickFormatter={(value) => {
                    if (value === 0) return '0';
                    if (value >= 1000) return `${value / 1000}k`;
                    return value.toString();
                  }}
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
              <Area type="monotone" dataKey="value" strokeWidth={3} stroke={chartColor} fill="url(#gradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
