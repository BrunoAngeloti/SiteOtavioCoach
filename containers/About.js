import { Bar } from '../components/Bar'
import styles from '../styles/containers/About.module.scss'

export function About(props) {
  return (
    <div ref={props.referencia} className={styles.container}>
        <img src="/fotoPai.png"/>
        <div className={styles.textArea}>
            <h1>Otavio Angeloti Pires</h1>
            <p>Graduado em Administração - MULTIVIX</p>
            <Bar type="1"/>
            <p>
                Meu nome é Otavio Angeloti, tenho 52 anos e moro em Vitória - ES. Sou recém formado em administração e faixa marrom em kickboxing.<br/><br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.<br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.
            </p>
        </div>    
    </div>
  )
}