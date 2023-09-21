import Image from "next/image"
import React from "react"

const Brands = () => {
  function AppleLogo() {
    return (
      <Image
        src="/img/brands/apple-logo.png"
        alt="N"
        width="330"
        height="330"
        className="p-1 w-12 lg:w-24 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
      />
    )
  }
  function DellLogo() {
    return (
      <Image
        src="/img/brands/dell-logo.png"
        alt="N"
        width="330"
        height="330"
        className="p-1 w-12 lg:w-24 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
      />
    )
  }
  function GatewayLogo() {
    return (
      <Image
        src="/img/brands/gateway-logo.png"
        alt="N"
        width="330"
        height="330"
        className="w-12 lg:w-24 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
      />
    )
  }
  function HPLogo() {
    return (
      <Image
        src="/img/brands/hp-logo.png"
        alt="N"
        width="330"
        height="330"
        className="p-1 w-12 lg:w-24 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
      />
    )
  }
  function LenovoLogo() {
    return (
      <Image
        src="/img/brands/lenovo-logo.png"
        alt="N"
        width="330"
        height="330"
        className="w-12 lg:w-24 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
      />
    )
  }
  function MicrosoftLogo() {
    return (
      <Image
        src="/img/brands/microsoft-logo.png"
        alt="N"
        width="330"
        height="330"
        className="w-12 lg:w-24 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
      />
    )
  }
  return (
    <div className="flex flex-wrap justify-center gap-5 p-2 lg:p-0 lg:gap-32 items-center align-middle dark:bg-slate-200 lg:h-32 rounded-md">
      <HPLogo />
      <GatewayLogo />
      <DellLogo />
      <LenovoLogo />
      <AppleLogo />
      <MicrosoftLogo />
    </div>
  )
}

export default Brands
