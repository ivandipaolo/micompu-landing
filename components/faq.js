import React from "react"
import Container from "./container"
import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/24/solid"

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  )
}

const faqdata = [
  {
    question:
      "¿Qué medidas toma Mi Compu para asegurarse de que los productos lleguen en perfecto estado a los clientes? ",
    answer:
    "En Mi Compu, nos tomamos muy en serio la calidad y el estado de nuestros productos. Para asegurarnos de que lleguen en perfecto estado a nuestros clientes, implementamos rigurosos procesos de control de calidad y embalaje. Nuestro equipo verifica cada producto antes de ser enviado para garantizar que cumple con los estándares de calidad establecidos. Además, utilizamos materiales de embalaje resistentes y seguros para proteger los productos durante el transporte. Si a pesar de nuestros esfuerzos, algún producto llegara en condiciones no satisfactorias, contamos con un proceso de devoluciones y cambios para resolver la situación de manera rápida y satisfactoria para nuestros clientes. Tu satisfacción es nuestra prioridad.",
  },
  {
    question: "¿Qué sucede si deseo cancelar una orden de compra?",
    answer:
      "Puedes cancelar una orden siempre y cuando esta no haya sido despachada. Para ello, comunícate con nosotros dentro de las primeras 24 horas de realizada la compra enviando un correo electrónico a atencion.micompu@gmail.com. Dependiendo del caso, se procederá a la devolución del importe pagado o se podrá dejar como crédito para futuras compras.",
  },
  {
    question: " ¿Qué pasa si no puedo recibir la entrega de mi pedido?",
    answer:
      "n caso de no poder realizar la entrega después de dos intentos, nos comunicaremos contigo para pactar un nuevo día y horario. Si, por causas ajenas a nosotros, la entrega no es posible, se considerará que deseas cancelar la transacción y procederemos a la devolución del importe correspondiente al producto (excluyendo costos de envío).",
  },
  {
    question: " ¿Qué sucede si un producto que deseo comprar no está disponible? ",
    answer:
      "En el caso de que un producto que deseas adquirir no esté disponible, te invitamos a ponerte en contacto con nosotros a través de nuestro correo electrónico atencion.micompu@gmail.com. Estaremos encantados de asistirte y proporcionarte información sobre disponibilidad, alternativas o cualquier otra consulta que puedas tener. Nuestro objetivo es brindarte la mejor experiencia de compra posible, y estaremos disponibles para ayudarte en todo lo que necesites.",
  },
]

export default Faq
