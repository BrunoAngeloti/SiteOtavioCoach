import styles from '../styles/containers/Videos.module.scss'

import {Bar} from '../components/Bar'

export function Videos(props){
  return(
    <div ref={props.referencia} className={styles.container}>
      <div className={styles.header}>
        <Bar type="1"/>
        <h1>VIDEOS</h1>   
      </div>
      <div className={styles.content}>
        {props.links?.map((link, index) => (
          <iframe key={index} width="560" height="315" src={link.data.link_do_video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        ))}
      </div>
    </div>
  )
}