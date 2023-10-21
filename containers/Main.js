import styles from '../styles/containers/Main.module.scss'
import Image from 'next/image'

export function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.content}>
          <div className={styles.texts}>
            <p>Olá,</p>
            <p>sou <strong>Otavio Angeloti</strong></p>
            <div className={styles.description}>
              Analista de perfil comportamental CIS ASSESSMENT<br/>
              Coach integral sistemico
            </div>
            <button>
              <a 
                target="_blank"
                rel="noreferrer" 
                href="https://cisassessment.com.br/degustacao/httpspagae7vwkm41g7"
              >
                Faça uma análise gratuíta AGORA!
              </a>
            </button>           
          </div>  
          <Image src="/selo.png" alt="Selo analista cis" width={150} height={150} quality={100}/>
        </div>

        <div className={styles.image}>
          <Image src="/homeImage.svg" alt="Duas pessoas se cumprimentando" width={620} height={440}/>
        </div>
      </div>   
    </div>
  )
}