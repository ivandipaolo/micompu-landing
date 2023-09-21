import Image from "next/image"
import Container from "./container"
import heroImg from "../public/img/laptops/mac.png"
import Typewriter from "typewriter-effect"
import Spinner from "./Spinner"
import DoubleSpinner from "./DoubleSpinner"
import Brands from "./Brands"

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 flex flex-col lg:gap-8 gap-5">
            <h1 className="text-2xl font-sans font-semibold  tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              <Typewriter
                options={{
                  delay: 120,
                  cursor: "|",
                  cursorClassName:'text-indigo-500 animate-pulse',
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`Bienvenid<span class='text-indigo-500'>@</span>`)
                    .start()
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(`Somos <span class='text-indigo-500'>MiCompu</span>.Online`)
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(`Importamos directo de <span class='text-indigo-500'>USA</span>`)
                    .pauseFor(2000)
                    .deleteAll()
                }}
              />
            </h1>
            <p className="py-5 text-xl font-extralight font-sans leading-loose text-gray-500  lg:text-xl xl:text-2xl dark:text-gray-300">
              Somos Importadores directos de Estados Unidos y trabajamos con una
              línea de productos de informática a un excelente precio. Además
              potenciamos los equipos para que tengan un mejor rendimiento y así
              ofrecer un producto totalmente diferencial. No dudes en
              comunicarte con nuestros asesores para elegir la opción mas
              conveniente para tu uso.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href=""
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
          <div className="relative">
            <DoubleSpinner />
            <Image
              src={heroImg}
              width="800"
              height="617"
              className={"object-cover animate-bounce-low"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      <Container>
        <Brands />
      </Container>
    </>
  )
}

export default Hero
