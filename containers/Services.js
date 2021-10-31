import styles from '../styles/containers/Services.module.scss'
import { CardService } from '../components/CardService'
import { Bar } from '../components/Bar'

export function Services(props) {
  return (
    <div ref={props.referencia} className={styles.container}>
      <div className={styles.header}>
        <Bar type="1" color="blue"/>
        <h1>SERVIÇOS</h1>
      </div>
      <div className={styles.content}>
        <CardService title="Comunicação"/>
        <CardService title="Comunicação"/>
        <CardService title="Comunicação"/>
      </div>
    </div>
  )
}