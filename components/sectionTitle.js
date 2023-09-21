import React from "react"
import Container from "./container"

const SectionTitle = ({ align, pretitle, title, children }) => {
  return (
    <Container
      className={`flex w-full flex-col ${
        align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {pretitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {pretitle}
        </div>
      )}

      {title && (
        <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {title}
        </h2>
      )}

      {children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {children}
        </p>
      )}
    </Container>
  )
}

export default SectionTitle
