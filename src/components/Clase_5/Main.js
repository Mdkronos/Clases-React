
import { ThemeContext } from '@/context/ThemeContextProvider'
import { useContext } from 'react'

const Main = () => {

  const [ theme ] = useContext(ThemeContext) 

  return (
    <>
      <main className={theme}>
        <div>Main</div>
      </main>
      <style jsx>{`
          main {
            height: 100vh;
          }
      `}</style>
    </>
  )
}

export default Main