import * as React from "react"
import ProductCard from "./ProductCard"

export default function ProductsList({
  products,
}) {
  return (
    <div className="pt-10 gap-10 flex flex-col text-center justify-start px-20  rounded-md">
      <div className="flex flex-row gap-2">
        <ProductCard product={products[1]} />
        <ProductCard product={products[2]} />
        <ProductCard product={products[0]} />
      </div>
    </div>
  )
}
