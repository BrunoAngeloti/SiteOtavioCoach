import { useEffect, useState } from 'react'
import styles from '../styles/containers/Header.module.scss'

export function Header(props) {
  const [buttonActive, setButtonActive] = useState(false);
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
        setButtonActive(false);
        
    }else{
        setVisible(true);
    }
    val = window.pageYOffset    
  };

  function handleActive(){
    setButtonActive(!buttonActive);
  }

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    <div 
      className={styles.container} 
      style={{
        transition: buttonActive && !background ? '0s' : '0.5s',
        top: !visible ? -200 : 0, 
        background: background || buttonActive ? '#9DC7C8' : 'transparent',
        boxShadow: background || buttonActive ? '0px 2px 10px rgba(0, 0, 0, 0.25)' : 'none'
      }}
    >
      <div className={buttonActive ? styles.active : styles.content}>
        <a onClick={() => goToAbout()}>SOBRE</a>
        <a onClick={() => goToServices()}>SERVIÇOS</a>
        <a onClick={() => goToDepositions()}>DEPOIMENTOS</a>
        <a onClick={() => goToContact()}>CONTATO</a>
      </div>
      <button onClick={() => handleActive()} className={styles.hamburguer}>
        {
          !buttonActive ?  <img src="menu.svg" alt="icone de menu" /> : <img src="x.svg" alt="icone de fechar" />
        }
      </button>
    </div>
  )
}