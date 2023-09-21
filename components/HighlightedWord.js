import React from "react"

const HighlightedWord = ({extraCSS, children}) => {
  return (
    <p className={`before:block before:absolute mx-auto before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative w-fit text-center px-5 ${extraCSS}`}>
      <span className="relative text-white">{children}</span>
    </p>
  )
}

export default HighlightedWord
