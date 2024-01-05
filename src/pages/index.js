
import Head from "next/head";
import Header from "@/components/Clase_5/Header";
import Main from "@/components/Clase_5/Main";
import Footer from "@/components/Clase_5/Footer";
import ThemeContextProvider from "@/context/ThemeContextProvider"



export default function Home() {
  return (
    <>
      <Head></Head>
      <ThemeContextProvider>
        <main>
          <Header />
          <Main />
          <Footer />
        </main>
      </ThemeContextProvider>
    </>
  )
}






