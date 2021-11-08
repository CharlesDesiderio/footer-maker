import styles from './Output.module.css'

const Output = (props) => {
  return (
    <div className={styles.output} style={{ width: '100%', backgroundColor: props.data.backgroundColor, color: props.data.color, padding: `${props.data.padding}px`, fontSize: `${props.data.fontSize}px`, textAlign: 'center', fontWeight: `${props.data.fontWeight}` }} >{ props.data.text }</div>
  )
}

export default Output