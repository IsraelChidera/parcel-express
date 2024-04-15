'use client'
import React from 'react';

const index = ({ children, className }) => {
    return (
        <div className={`mx-auto w-11/12 md:w-10/12 ${className}`}>
            {children}
        </div>
    )
}

export default index