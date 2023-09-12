import Image from "next/image"
import Container from "./container"
import heroImg from "../public/img/hero.svg"

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 flex flex-col lg:gap-12 gap-5">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Bienvenido
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Somos Importadores directos de Estados Unidos y trabajamos con una
              línea de productos de informática a un excelente precio. Además
              potenciamos los equipos para que tengan un mejor rendimiento y así
              ofrecer un Producto totalmente diferencial. No dudes en
              comunicarte con nuestros asesores para elegir la opción mas
              conveniente para tu uso.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Comunicarse con un asesor
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-wrap justify-center gap-5 p-2 lg:p-0 lg:gap-32 items-center align-middle dark:bg-white lg:h-32 rounded-md ">
          <HPLogo />
          <GatewayLogo />
          <DellLogo />
          <LenovoLogo />
          <AppleLogo />
          <MicrosoftLogo />
        </div>
      </Container>
    </>
  )
}

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
export default Hero
