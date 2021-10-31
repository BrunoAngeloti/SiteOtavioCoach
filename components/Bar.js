import styles from '../styles/components/Bar.module.scss'

export function Bar(props){
    return(
        <div 
            className={ props.type === '1'? styles.container : styles.container2}
            style={props.color === 'blue' ? {backgroundColor: '#212738'} : {}}
        >
        </div>
    )
}