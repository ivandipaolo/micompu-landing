import Head from "next/head"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>MiCompu.Online</title>
        <meta name="description" content="Landing page de MiCompu.Online" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
