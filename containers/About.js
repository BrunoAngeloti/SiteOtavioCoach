import { Bar } from '../components/Bar'
import styles from '../styles/containers/About.module.scss'

export function About(props) {
  return (
    <div ref={props.referencia} className={styles.container}>
        <img src="/fotoPai.png"/>
        <div className={styles.textArea}>
            <h1>Otavio Angeloti Pires</h1>
            <p>Graduado em Gestão Comercial - Estácio de Sá</p>
            <Bar type="1"/>
            <p>
                Meu nome é Otavio Angeloti Pires, tenho 53 anos, nascido em São Paulo, morando em Vitória à 9 anos. Pai de Bruno e Pâmela e casado com Valéria à 27 anos.<br/><br/>
                - Coach Integral Sistêmico formado pela Instituição <strong>FEBRACIS</strong>.<br/>
                - Cursando Pós-Graduação <strong>Coaching e Neurociência</strong> Faculdade Febracis.<br/>
                - Ministrante <strong>“O Poder da Ação”</strong> Best Seller de Paulo Vieira.<br/>
                - Sou Gerente Comercial Segmento Segurança Eletrônica na <strong>Sudeste Atacado</strong>.<br/>
                Praticante de <strong>Kickboxing</strong> à 8 anos e atualmente Faixa Marrom. Praticante de <strong>Kravmaga</strong> Defesa Pessoal à 1 ano e atualmente Faixa Amarela.<br/><br/>
                Se eu fosse um bicho seria um <strong>Lobo</strong>, é líder e cuida da alcateia. Minha maior certeza... <strong>“Acreditar que podemos construir dias melhores!”</strong>.
            </p>
        </div>    
    </div>
  )
}