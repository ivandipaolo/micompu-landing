import Head from "next/head"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"

import { benefitOne, benefitTwo } from "../components/data"
import Video from "../components/video"
import Benefits from "../components/benefits"
import Footer from "../components/footer"
import Testimonials from "../components/testimonials"
import Cta from "../components/cta"
import Faq from "../components/faq"
import PopupWidget from "../components/popupWidget"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <Head>
        <title>MiCompu.Online</title>
        <meta name="description" content="Landing page de MiCompu.Online" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle title="Ofrecemos ENVIOS GRATIS EN EL DIA dentro de Buenos Aires">
          Showroom en Microcentro, Caballito y Olivos: Jueves, Viernes y Sabados
          de 10 a 16hs.
        Consulta el catálogo de precios <b>Mayoristas</b>
      </SectionTitle>
      <div className="hidden md:flex flex-col md:flex-row gap-24 justify-center items-center">
        <span>
          <Image
            src="/img/maps/microcentro.png"
            alt="N"
            width="400"
            height="32"
            className="w-48 lg:w-80 rounded-xl"
          />
        </span>
        <span>
          <Image
            src="/img/maps/caballito.png"
            alt="N"
            width="400"
            height="32"
            className="w-48 lg:w-80 rounded-xl"
          />
        </span>
        <span>
          <Image
            src="/img/maps/olivos.png"
            alt="N"
            width="400"
            height="32"
            className="w-48 lg:w-80 rounded-xl"
          />
        </span>
      </div>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}
      <SectionTitle
        pretitle="Testimonios"
        title="Algunas de las opiniones de nuestros clientes"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Preguntas frequentes">
        Algunas de las preguntas que más les surgen a nuestros clientes tratarémos de respondértelas a continuación.
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  )
}

export default Home
