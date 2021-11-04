import { CardDepositions } from '../components/CardDepositions'
import styles from '../styles/containers/Depositions.module.scss'

import {Bar} from '../components/Bar'

const depositions = [
    {
        name: 'Pâmela Cristina',
        description: 'Personal training',
        title: '"Incrível"',
        text: 'No ano passado, durante todo o ano fiz algumas sessões de coach com o Otávio. Em pouco tempo tive resultados extraordinários na minha vida pessoal e profissional. Hoje estou conquistando dentro da minha área uma amplitude de trabalhos, graças aos seus direcionamentos. Eu indiquei e indico o trabalho dele para todos aqueles que precisam abrir a mente e se direcionar no mundo profissional',
        img: 'depositions/Pamela.png'
    },
    {
        name: 'Pâmela Cristina',
        description: 'Personal training',
        title: '"Incrível"',
        text: 'No ano passado, durante todo o ano fiz algumas sessões de coach com o Otávio. Em pouco tempo tive resultados extraordinários na minha vida pessoal e profissional. Hoje estou conquistando dentro da minha área uma amplitude de trabalhos, graças aos seus direcionamentos. Eu indiquei e indico o trabalho dele para todos aqueles que precisam abrir a mente e se direcionar no mundo profissional',
        img: 'depositions/Pamela.png'
    },
    {
        name: 'Pâmela Cristina',
        description: 'Personal training',
        title: '"Incrível"',
        text: 'No ano passado, durante todo o ano fiz algumas sessões de coach com o Otávio. Em pouco tempo tive resultados extraordinários na minha vida pessoal e profissional. Hoje estou conquistando dentro da minha área uma amplitude de trabalhos, graças aos seus direcionamentos. Eu indiquei e indico o trabalho dele para todos aqueles que precisam abrir a mente e se direcionar no mundo profissional',
        img: 'depositions/Pamela.png'
    },
]

export function Depositions(props){
    return(
        <div ref={props.referencia} className={styles.container}>
            <div className={styles.header}>
                <h1>DEPOIMENTOS</h1>
                <Bar type="1"/>
            </div>
            <div className={styles.content}>
                {depositions.map((dep, index) => {
                    return(
                        <CardDepositions people={dep} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}