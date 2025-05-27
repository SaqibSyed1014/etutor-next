'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const CourseOverviewChart = () => {
  const [timeframe, setTimeframe] = useState('week');

  const overviewDataWeek = [
    { name: 'Sun', enrollments: 30, completions: 25 },
    { name: 'Mon', enrollments: 45, completions: 35 },
    { name: 'Tue', enrollments: 40, completions: 30 },
    { name: 'Wed', enrollments: 55, completions: 45 },
    { name: 'Thu', enrollments: 50, completions: 40 },
    { name: 'Fri', enrollments: 65, completions: 55 },
    { name: 'Sat', enrollments: 35, completions: 30 },
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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Course Overview</CardTitle>
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
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={getCurrentData()}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <Line
                type="monotone"
                dataKey="enrollments"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                name="Enrollments"
              />
              <Line
                type="monotone"
                dataKey="completions"
                stroke="#f97316"
                strokeWidth={3}
                dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
                name="Completions"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Course Enrollments</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Course Completions</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseOverviewChart;
