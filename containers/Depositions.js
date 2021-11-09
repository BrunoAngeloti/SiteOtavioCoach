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
        name: 'Flavia Effgem',
        description: 'Vendedora',
        title: '"Espetacular"',
        text: 'O que dizer deste profissional? Eu era uma pessoa totalmente descontrolada financeiramente, não tinha dívidas mas também nunca consegui ter reserva, foi quando Otávio me convidou para participar do seminário Inteligência emocional, foi maravilhoso. Sai de lá com outro astral e com metas. Curtas, médias e longas, dando valor a coisas que nunca tinha percebido, com o comportamento diferente, sabe? Em dois meses já concretizei a meta de curto prazo , mas só aquele seminário não foi o suficiente para eu concretizar as outras metas , foi quando o Otávio mais um vez me ofereceu fazer um Coach individual comigo e eu, claro, aceitei de cara, ele me presenteou com o livro autoresponsabilidade, aquilo me dava um gás… e dois anos depois consegui concretizar minha meta de médio prazo. Só tenho Gratidão a você, Otávio.',
        img: 'depositions/Flavia.png'
    },
    {
        name: 'Cicera Albuquerque',
        description: 'Supervisora',
        title: '"Fantástico"',
        text: 'Fiz o treinamento de inteligência emocional e foi impactante na minha vida, descobri o quanto de crenças eu tenho que atrapalham minha vida pessoal, profissional, financeira e até espiritual. A minha postura mudou bastante neste treinamento, quero fazer outros treinamentos para aperfeiçoamento. Otávio é um grande profissional, excelente trabalho!',
        img: 'depositions/Cicera.png'
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