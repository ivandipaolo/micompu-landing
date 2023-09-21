import Hero from "../components/hero"
import SectionTitle from "../components/SectionTitle"

import { benefitOne } from "../components/data"
import Benefits from "../components/benefits"
import Testimonials from "../components/testimonials"
import Cta from "../components/cta"
import Faq from "../components/faq"
import Image from "next/image"
import { shopifyClient, parseShopifyResponse } from "../lib/shopify.js"
import { useEffect, useState } from "react"
import ProductList from "../components/ProductList"
import Container from "../components/container"

const Home = () => {
  const [prods, setProds] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setProds(parseShopifyResponse(await shopifyClient.product.fetchAll()))
    }
    fetchData()
  }, [])
  return (
    <div>
      <Hero />

      <Container>
        <ProductList products={prods} title="Productos destacados" />
      </Container>
      <Container>
        <SectionTitle pretitle="Showrooms" title="Ofrecemos ENVIOS GRATIS EN EL DIA dentro de Buenos Aires">
          Showroom en Microcentro, Caballito y Olivos: Jueves, Viernes y Sabados
          de 10 a 16hs. Consulta el catálogo de precios <b>Mayoristas</b>
        </SectionTitle>
        <div className="hidden md:flex flex-col md:flex-row gap-24 justify-center items-center">
          <span>
            <Image
              src="/img/maps/microcentro.png"
              alt="N"
              width="400"
              height="32"
              className="w-48 lg:w-80 rounded-xl hover:scale-125 duration-700"
            />
          </span>
          <span>
            <Image
              src="/img/maps/caballito.png"
              alt="N"
              width="400"
              height="32"
              className="w-48 lg:w-80 rounded-xl hover:scale-125 duration-700"
            />
          </span>
          <span>
            <Image
              src="/img/maps/olivos.png"
              alt="N"
              width="400"
              height="32"
              className="w-48 lg:w-80 rounded-xl hover:scale-125 duration-700"
            />
          </span>
        </div>
      </Container>
      <Benefits data={benefitOne} />
      <SectionTitle
        pretitle="Testimonios"
        title="Algunas de las opiniones de nuestros clientes"
      >
        Los testimonios son una poderosa herramienta para fortalecer la
        confianza y visibilidad de nuestra marca. En esta sección, destacamos a
        nuestros apreciados clientes para compartir sus experiencias con
        nosotros
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Preguntas frequentes">
        Algunas de las preguntas que más les surgen a nuestros clientes
        tratarémos de respondértelas a continuación.
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
    </div>
  )
}

export default Home
