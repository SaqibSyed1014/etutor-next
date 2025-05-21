'use client'

import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface AvatarData {
    src: string;
    alt: string;
}

interface StackedAvatarsProps {
    avatars: AvatarData[];
    size?: number;
    max?: number;
    offset?: number;
    className?: string;
}

const StackedAvatars: React.FC<StackedAvatarsProps> = ({
   avatars,
   size = 40,
   max = 3,
   offset = 0.65,
   className = '',
}) => {
    // Limit the number of avatars to display
    const visibleAvatars = avatars.slice(0, max);
    const remainingCount = avatars.length - max;

    // Calculate the stack width based on size and offset
    const stackWidth = visibleAvatars.length > 0
        ? size + (visibleAvatars.length - 1) * size * offset
        : 0;

    return (
        <div
            className={`relative h-${size / 4} ${className}`}
            style={{ width: stackWidth + 'px', height: size + 'px' }}
        >
            {visibleAvatars.map((avatar, index) => {
                const zIndex = visibleAvatars.length - index;
                const leftPosition = index * size * offset;

                return (
                    <div
                        key={index}
                        className="absolute top-0"
                        style={{
                            left: leftPosition + 'px',
                            zIndex,
                        }}
                    >
                        <Avatar
                            className="border-2 border-white"
                            style={{
                                width: size + 'px',
                                height: size + 'px'
                            }}
                        >
                            <AvatarImage src={avatar.src} alt={avatar.alt} />
                            <AvatarFallback>{avatar.alt[0]}</AvatarFallback>
                        </Avatar>
                    </div>
                );
            })}

            {/* Show remaining count if necessary */}
            {remainingCount > 0 && (
                <div
                    className="absolute top-0 flex items-center justify-center bg-gray-200 text-gray-800 border-2 border-white rounded-full"
                    style={{
                        left: visibleAvatars.length * size * offset + 'px',
                        width: size + 'px',
                        height: size + 'px',
                        zIndex: 0,
                        fontSize: size / 2.5 + 'px'
                    }}
                >
                    +{remainingCount}
                </div>
            )}
        </div>
    );
};

export default StackedAvatars;
