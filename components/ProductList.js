import * as React from "react"
import ProductCard from "./ProductCard"
import HighlightedWord from "./HighlightedWord"

export default function ProductsList({
  products,
  title,
}) {
  return (
    <div className="pt-10 gap-10 flex flex-col text-center justify-start px-20  rounded-md">
      <h2 className="inline-block font-teko font-light text-8xl">
        {title}
      </h2>
      <div className="flex flex-row gap-2">
        <ProductCard product={products[1]} />
        <ProductCard product={products[2]} />
        <ProductCard product={products[0]} />
      </div>
    </div>
  )
}
