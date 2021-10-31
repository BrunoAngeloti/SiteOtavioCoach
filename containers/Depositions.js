import { CardDepositions } from '../components/CardDepositions'
import styles from '../styles/containers/Depositions.module.scss'

import {Bar} from '../components/Bar'

export function Depositions(props){
    return(
        <div ref={props.referencia} className={styles.container}>
            <div className={styles.header}>
                <h1>DEPOIMENTOS</h1>
                <Bar type="1"/>
            </div>
            <div className={styles.content}>
                <CardDepositions />
                <CardDepositions />
                <CardDepositions />
            </div>
        </div>
    )
}