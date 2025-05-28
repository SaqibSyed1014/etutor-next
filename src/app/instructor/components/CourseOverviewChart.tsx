'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Tooltip, Area} from 'recharts';

const CourseOverviewChart = () => {
  const [timeframe, setTimeframe] = useState('week');

  const overviewDataWeek = [
    { name: 'Sun', enrollments: 30, completions: 10 },
    { name: 'Mon', enrollments: 25, completions: 20 },
    { name: 'Tue', enrollments: 10, completions: 50 },
    { name: 'Wed', enrollments: 85, completions: 45 },
    { name: 'Thu', enrollments: 50, completions: 40 },
    { name: 'Fri', enrollments: 65, completions: 55 },
    { name: 'Sat', enrollments: 35, completions: 60 },
  ];

  const overviewDataMonth = [
    { name: 'Week 1', enrollments: 280, completions: 220 },
    { name: 'Week 2', enrollments: 320, completions: 250 },
    { name: 'Week 3', enrollments: 350, completions: 280 },
    { name: 'Week 4', enrollments: 400, completions: 320 },
  ];

  const getCurrentData = () => {
    switch (timeframe) {
      case 'today': return overviewDataWeek.slice(0, 1);
      case 'week': return overviewDataWeek;
      case 'month': return overviewDataMonth;
      default: return overviewDataWeek;
    }
  };

  return (
    <Card className="dashboard-card h-full flex flex-col">
      <CardHeader className="dashboard-card-header">
        <CardTitle>Course Overview</CardTitle>
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
                <linearGradient id="enrollGradient" x1="0" y1="0" x2="0" y2="1">
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
                  tickMargin={15}
                  type="number"
              />
              <Tooltip
                  contentStyle={{ backgroundColor: '#1D2026', border: 'none', borderRadius: '0' }}
                  cursor={{ strokeDasharray: '8 4', stroke: '#564FFD' }}
                  labelStyle={{ color: '#fff' }}
                  itemStyle={{ color: '#8C94A3' }}
                  formatter={(value: number) => value.toLocaleString()}
              />
              <Area type="monotone" dataKey="enrollments" strokeWidth={3} stroke="#564FFD" fill="#EBEBFF" />
              <Area type="monotone" dataKey="completions" strokeWidth={3} stroke="#FF6636" fill="transparent" />
            </AreaChart>
          </ResponsiveContainer>

          {/*<ResponsiveContainer width="100%" height="100%">*/}
          {/*  <LineChart data={getCurrentData()}>*/}
          {/*    <XAxis*/}
          {/*      dataKey="name"*/}
          {/*      axisLine={false}*/}
          {/*      tickLine={false}*/}
          {/*      tick={{ fontSize: 12 }}*/}
          {/*    />*/}
          {/*    <YAxis*/}
          {/*      axisLine={false}*/}
          {/*      tickLine={false}*/}
          {/*      tick={{ fontSize: 12 }}*/}
          {/*    />*/}
          {/*    <Line*/}
          {/*      type="monotone"*/}
          {/*      dataKey="enrollments"*/}
          {/*      stroke="#3b82f6"*/}
          {/*      strokeWidth={3}*/}
          {/*      dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}*/}
          {/*      name="Enrollments"*/}
          {/*    />*/}
          {/*    <Line*/}
          {/*      type="monotone"*/}
          {/*      dataKey="completions"*/}
          {/*      stroke="#f97316"*/}
          {/*      strokeWidth={3}*/}
          {/*      dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}*/}
          {/*      name="Completions"*/}
          {/*    />*/}
          {/*  </LineChart>*/}
          {/*</ResponsiveContainer>*/}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseOverviewChart;
