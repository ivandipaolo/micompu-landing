import Image from "next/image"
import React from "react"
import Container from "./container"

import userOneImg from "../public/img/testimonials/mati.png"
import userTwoImg from "../public/img/testimonials/sofi.png"
import userThreeImg from "../public/img/testimonials/mateo.png"
import userFourImg from "../public/img/testimonials/elmago.png"
import userFiveImg from "../public/img/testimonials/juanma.png"
import userSixImg from "../public/img/testimonials/martu.png"

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              "Muy buen producto,{" "}
              <Mark>me llego el mismo dia que lo compré</Mark> y cumple con
              todas mis expectativas 😁."
            </p>

            <Avatar
              image={userOneImg}
              name="Matigomez23"
              title="Desde Instagram"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              "<Mark>Excelente atencion</Mark>, contestan en el momento y te ayudan a elegir
              el porducto que realmente necesitas."
            </p>

            <Avatar
              image={userTwoImg}
              name="Sofimartinezz"
              title="Desde Instagram"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              "Sin dudas el <Mark>mejor precio</Mark>. Pagando con transferencia hacen un 15%
              de descuento."
            </p>

            <Avatar
              image={userThreeImg}
              name="Mateo89"
              title="Desde Instagram"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              "<Mark>Buen servicio post venta</Mark>. Rompi mi pantalla y lo arreglaron en 2
              dias sin costo. Unos genios!!"
            </p>

            <Avatar
              image={userFourImg}
              name="Elmagotito"
              title="Desde Facebook"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              "me lo trajeron <Mark>a las pocas horas</Mark> de haberlo comprado!!!."
            </p>

            <Avatar
              image={userFiveImg}
              name="Juanma2021"
              title="Desde Facebook"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              "A tener en cuenta, no contestan los fines de semana."
            </p>

            <Avatar
              image={userSixImg}
              name="Martugrinn"
              title="Desde Instagram"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  )
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  )
}

export default Testimonials
