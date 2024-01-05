
import { ThemeContext } from '@/context/ThemeContextProvider'
import { useContext } from 'react'

const Footer = () => {

  const [ theme ] = useContext(ThemeContext) 

  return (
    <>
      <footer className={theme}>
        <div>Footer</div>
      </footer>
      <style jsx>{`
          footer {
            height: 100vh;
          }
      `}</style>
    </>
  )
}

export default Footer