import styles from "./styles.module.css"

export function Row(props) {
  return <div className={styles.row}>{props.children}</div>
}
