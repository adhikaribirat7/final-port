import React from 'react'

const MobileNav = ({navLinks}) => {
  return (
    <div className="relative border-2 z-100">
    {navLinks.map((nav, id) => (
      <span className="text-white" key={id}>
        {nav}
      </span>
    ))}
  </div>
  )
}

export default MobileNav
