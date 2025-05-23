import styles from "./styles.module.css"

export function Col(props) {
  return <div className={styles.col}>{props.children}</div>
}
