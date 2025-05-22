import styles from "./styles.module.css"

export function Tag(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} style={{ backgroundColor: props.color }}>{props.title}</div>
      <div className={styles.text}>{props.title}</div>
    </div>
  )
}
