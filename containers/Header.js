import { useEffect, useState } from 'react'
import styles from '../styles/containers/Header.module.scss'

export function Header(props) {

  const [visible, setVisible] = useState(true);
  const [background, setBackground] = useState(false);
  let val;

  function goToAbout(){
    window.scrollTo({
        top: props.pag1.current.offsetTop,
        behavior: 'smooth'
    })
  }
  function goToServices(){
    window.scrollTo({
        top: props.pag2.current.offsetTop,
        behavior: 'smooth'
    })
  }

  function goToDepositions(){
      window.scrollTo({
          top: props.pag3.current.offsetTop,
          behavior: 'smooth'
      })
  }

  function goToContact(){
      window.scrollTo({
          top: props.pag4.current.offsetTop,
          behavior: 'smooth'
      })
  }


  function handleScroll(){
    if(window.pageYOffset > 50){
        setBackground(true);
    }else{
        setBackground(false);
    }
    if(window.pageYOffset > val && window.pageYOffset > 400) {
        setVisible(false);
        
    }else{
        setVisible(true);
    }
    val = window.pageYOffset    
  };

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    <div 
      className={styles.container} 
      style={{
        top: !visible ? -200 : 0, 
        background: background ? '#9DC7C8' : 'transparent',
        boxShadow: background ? '0px 2px 10px rgba(0, 0, 0, 0.25)' : 'none'
      }}
    >
        <a onClick={() => goToAbout()}>SOBRE</a>
        <a onClick={() => goToServices()}>SERVIÇOS</a>
        <a onClick={() => goToDepositions()}>DEPOIMENTOS</a>
        <a onClick={() => goToContact()}>CONTATO</a>
    </div>
  )
}