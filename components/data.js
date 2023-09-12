import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.svg";
import benefitTwoImg from "../public/img/benefit-two.svg";

const benefitOne = {
  title: "Compromisos con nuestros clientes",
  desc: "En micompu.online, nos esforzamos por cultivar relaciones sólidas con nuestros clientes, basadas en la transparencia y el apoyo constante. Estamos aquí para acompañarlos en cada etapa, desde la fase de pre-compra hasta la post-compra.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Entender a nuestros clientes",
      desc: "Nos dedicamos a comprender las necesidades y preferencias de nuestros clientes para proporcionar un servicio personalizado y satisfactorio.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Optimizar la adquisición",
      desc: "Nuestro compromiso con la transparencia y el apoyo constante se traduce en un proceso de compra sencillo y sin complicaciones para nuestros clientes.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Mantener una experiencia excepcional",
      desc: "Nos esforzamos por mantener una experiencia excepcional para nuestros clientes, incluso después de la compra, para asegurar su satisfacción a largo plazo.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Formas de pago",
  desc: "Ofrecemos las maneras más cómodas y actualizadas al mercado actual para concretar tus pagos, en caso de que no encuentres una que se adecue no dudes en contactarnos, estaremos dispuestos en ayudarte con gusto.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
