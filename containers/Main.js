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
          <button>COMECE HOJE</button>
        </div>  
      </div>

      <div className={styles.image}>
      </div>

      <img className={styles.bolinhas} src="BOLINHAS.svg" alt="bolinhas" />
    </div>
  )
}