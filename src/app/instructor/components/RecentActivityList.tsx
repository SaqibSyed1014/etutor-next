'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {activities} from "@/lib/@fake-db/dashboard";
import {Star} from "@/assets/icons/common-icons";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const RecentActivityList = () => {

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'comment':
        return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2.8393 11.0632C2.09384 9.80655 1.83277 8.32098 2.10512 6.88545C2.37747 5.44992 3.1645 4.16319 4.31843 3.26687C5.47235 2.37056 6.91379 1.92632 8.37207 2.01757C9.83036 2.10883 11.2052 2.7293 12.2384 3.76248C13.2715 4.79566 13.892 6.17047 13.9833 7.62875C14.0745 9.08703 13.6303 10.5285 12.734 11.6824C11.8377 12.8363 10.551 13.6234 9.11543 13.8957C7.67991 14.1681 6.19433 13.907 4.93766 13.1616L4.93767 13.1615L2.86539 13.7536C2.77965 13.7781 2.68892 13.7792 2.6026 13.7568C2.51629 13.7345 2.43752 13.6894 2.37447 13.6264C2.31142 13.5633 2.26637 13.4846 2.24401 13.3982C2.22164 13.3119 2.22276 13.2212 2.24726 13.1355L2.83934 11.0632L2.8393 11.0632Z" fill="white"/>
          <path d="M8 8.75C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75Z" fill="#FF6636"/>
          <path d="M5 8.75C5.41421 8.75 5.75 8.41421 5.75 8C5.75 7.58579 5.41421 7.25 5 7.25C4.58579 7.25 4.25 7.58579 4.25 8C4.25 8.41421 4.58579 8.75 5 8.75Z" fill="#FF6636"/>
          <path d="M11 8.75C11.4142 8.75 11.75 8.41421 11.75 8C11.75 7.58579 11.4142 7.25 11 7.25C10.5858 7.25 10.25 7.58579 10.25 8C10.25 8.41421 10.5858 8.75 11 8.75Z" fill="#FF6636"/>
        </svg>;
      case 'rating':
        return <Star />;
      case 'purchase':
        return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path opacity="0.2" d="M11.5005 5H2.50049C2.22435 5 2.00049 5.22386 2.00049 5.5V12.5C2.00049 12.7761 2.22435 13 2.50049 13H11.5005C11.7766 13 12.0005 12.7761 12.0005 12.5V5.5C12.0005 5.22386 11.7766 5 11.5005 5Z" fill="white"/>
          <path d="M11.5005 5H2.50049C2.22435 5 2.00049 5.22386 2.00049 5.5V12.5C2.00049 12.7761 2.22435 13 2.50049 13H11.5005C11.7766 13 12.0005 12.7761 12.0005 12.5V5.5C12.0005 5.22386 11.7766 5 11.5005 5Z" fill="white"/>
          <path d="M4.00098 3H13.501C13.6336 3 13.7608 3.05268 13.8545 3.14645C13.9483 3.24021 14.001 3.36739 14.001 3.5V11" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>;
      default:
        return <div className="w-2 h-2 rounded-full bg-gray-500"></div>;
    }
  };

  return (
    <Card className="dashboard-card">
      <CardHeader className="dashboard-card-header">
        <CardTitle>Recent Activity</CardTitle>
        {/*<Select defaultValue="today">*/}
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
        <div className="space-y-4 overflow-auto max-h-[370px]">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 py-3 px-5">
              <div className="flex-shrink-0 mt-1">
                <div className="size-8 rounded-full bg-primary-500 grid place-items-center [&>svg]:size-4 [&>svg]:text-white">
                  {getActivityIcon(activity.type)}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 leading-relaxed">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivityList;
