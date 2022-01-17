import styles from '../styles/containers/Main.module.scss'

export function Main() {
  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
        <div className={styles.texts}>
          <p>Olá,</p>
          <p>sou <strong>Otavio Angeloti</strong></p>
          <div className={styles.description}>
            Analista de perfil comportamental CIS ASSESSMENT<br/>
            Coach integral sistemico
          </div>
          <button>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5527998624937&text=Ol%C3%A1%2C%20Ot%C3%A1vio!%20Eu%20gostaria%20de%20come%C3%A7ar%20um%20servi%C3%A7o%20com%20voc%C3%AA!">COMECE HOJE</a></button>
        </div>  
      </div>

      <div className={styles.image}>
      </div>

      <img className={styles.bolinhas} src="BOLINHAS.svg" alt="bolinhas" />
    </div>
  )
}