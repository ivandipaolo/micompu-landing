import Link from "next/link"
import ThemeChanger from "./DarkSwitch"
import Image from "next/image"
import { Disclosure } from "@headlessui/react"
import { useContext } from "react"

const Navbar = () => {
  const navigation = [
    { text: 'Quienes Somos', ref: '/quienes-somos' },
    { text: 'Productos', ref: 'https://micompu.online/collections/notebooks' },
    { text: 'Medios de Pago', ref: '/medios-de-pago' },
    { text: 'Soporte Especializado', ref: '/soporte-especializado' }
  ]
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium dark:hidden">
                    <span>
                      <Image
                        src="/img/logoLight.png"
                        alt="N"
                        width="400"
                        height="32"
                        className="w-48 lg:w-80"
                      />
                    </span>
                  </span>
                  <span className="dark:flex items-center space-x-2 text-2xl font-medium hidden">
                    <span>
                      <Image
                        src="/img/logoDark.png"
                        alt="N"
                        width="400"
                        height="32"
                        className="w-48 lg:w-80"
                      />
                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        className={`w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none ${item === 'Soporte Especializado' && 'bg-indigo-600'}`}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  key={index}
                  href={item.ref}
                  className={`w-full px-5 py-3 ml-4 dark:text-white hover:text-gray-600 hover:font-semibold font-normal text-lg rounded-md hover:bg-indigo-600 hover:bg-opacity-30 transition-all duration-300 ease-in-out transform hover:scale-105 ${item === 'Soporte Especializado' && 'bg-indigo-600 text-white'}`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item bg-gray-600 bg-opacity-20 p-3 rounded-md dark:bg-opacity-50">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
