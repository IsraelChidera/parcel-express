'use client'
import React from 'react'

const index = ({ children, className, onClick, type, disable, ...props }) => {
    return (
        <button type={type} onClick={onClick} className={`rounded-[10px] border border-[#fff] py-[8px] px-[18px] md:px-[24px] text-base font-medium ${className}`} {...props} disabled={disable}>
            {children}
        </button>
    )
}

export default index