import Image from "next/image"
import React, { useEffect, useState } from "react"
import HighlightedWord from "./HighlightedWord"

const ProductCard = ({ product }) => {
  const [prodImg, setProdImg] = useState("")

  useEffect(() => {
    console.log(product)
    setProdImg(product?.images?.slice(-1)?.[0])
  }, [product])

  return (
    <div className="gap-0 flex flex-col hover:scale-110 justify-center text-center items-center relative group hover:bg-gray-100 hover:bg-opacity-5 transition duration-300 m-12 pb-20 p-7 hover:rounded-lg">
      <Image
        src={prodImg?.src ?? ""}
        width={prodImg?.width ?? "450"}
        height={prodImg?.height ?? "450"}
        className="object-fill w-4/4 -mb-5"
        alt="Hero Illustration"
        loading="eager"
      />
      <p className="font-medium font-teko w-4/4 text-3xl text-center">
        {product?.title}
      </p>
      <HighlightedWord extraCSS="font-semibold text-2xl text-center">
        ${product?.variants?.[0]?.price?.amount.split(".")[0]}
      </HighlightedWord>
    </div>
  )
}

export default ProductCard
