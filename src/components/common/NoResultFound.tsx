"use client";

import React from 'react';

const NoResultFound = ({ type } :{ type: string }) => {
    return (
        <div className="text-center py-10">
            <h3 className="text-xl font-semibold mb-2">No {type} found</h3>
            <p className="text-gray-500">Try adjusting your search or filter
                criteria</p>
        </div>
    );
};

export default NoResultFound;
