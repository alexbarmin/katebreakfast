import styles from "./styles.module.css"

export function Page(props) {
  return <div className={styles.page}>{props.children}</div>
}
