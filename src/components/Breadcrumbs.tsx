'use client';

import { JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Breadcrumbs = () => {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    const breadcrumbItems = segments.map((segment, index) => {
        const path = '/' + segments.slice(0, index + 1).join('/');
        const isLast = index === segments.length - 1;
        const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

        return isLast ? (
            <span key={path} className="text-gray-900">{name}</span>
        ) : (
            <Link key={path} href={path} className="hover:text-gray-700">
                {name}
            </Link>
        );
    });

    return (
        <div className="bg-gray-50 py-10">
            <div className="container">
                <h1 className="text-2xl text-center capitalize">
                    {segments[0]?.replace('-', ' ') || 'Home'}
                </h1>
                <div className="flex items-center justify-center space-x-2 mt-2 text-gray-600 text-sm">
                    <Link className="hover:text-gray-700 capitalize" href="/">Home</Link>
                    {segments.length > 0 && <span>/</span>}
                    {breadcrumbItems.reduce((acc, item, index) => {
                        if (index !== 0) acc.push(<span key={`sep-${index}`}>/</span>);
                        acc.push(item);
                        return acc;
                    }, [] as JSX.Element[])}
                </div>
            </div>
        </div>
    );
};
