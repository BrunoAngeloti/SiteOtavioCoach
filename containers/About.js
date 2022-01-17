import { Bar } from '../components/Bar'
import styles from '../styles/containers/About.module.scss'

import { returnDates } from '../utils/dateUtils'

export function About(props) {

  const { yearsLiving, yearsOld, yearsMarried, yearsKickboxing } = returnDates()

  return (
    <div ref={props.referencia} className={styles.container}>
        <img src="/fotoPai.png"/>
        <div className={styles.textArea}>
            <h1>Otavio Angeloti Pires</h1>
            <p>Graduado em Gestão Comercial - Estácio de Sá</p>
            <Bar type="1"/>
            <p>
                Saber quem sou eu é o que me define!!!<br/>
                Sou Otavio Angeloti Pires, tenho {yearsOld} anos, nascido em São Paulo, morando em Vitória à {yearsLiving} anos.<br/>
                Pai de Bruno e Pâmela e casado com Valéria à {yearsMarried} anos.<br/><br/>
                - Coach Integral Sistêmico formado pela Instituição <strong>FEBRACIS</strong>.<br/>
                - Analista de Perfil Comportamental <strong>CIS ASSESSMENT</strong>.<br/>
                - Ministrante <strong>“O Poder da Ação”</strong> Best Seller de Paulo Vieira.<br/>
                Praticante de <strong>Kickboxing</strong> à {yearsKickboxing} anos e atualmente Faixa Marrom. Praticante de <strong>Kravmaga</strong> Defesa Pessoal.<br/><br/>
                Se eu fosse um bicho seria um <strong>Lobo</strong>, é líder e cuida da alcateia. Minha maior certeza... <strong>“Acreditar que podemos direcionar pessoas à atingir seus objetivos e potencializar sua performance!” </strong>.
            </p>
        </div>    
    </div>
  )
}