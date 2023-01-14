import React from 'react'

// eslint-disable-next-line react/prop-types
const Card = ({ className, children, ...props }) => {
  return (
    <div className={`w-full rounded-lg shadow-sm bg-[#fff] border border-neutral20  ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
