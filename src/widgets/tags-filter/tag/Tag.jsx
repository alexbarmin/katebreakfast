import classNames from "classnames"
import styles from "./styles.module.css"

export function Tag(props) {
  return (
    <div className={classNames(styles.wrapper, {[styles.active]: props.isActive})} onClick={props.onClick}>
      <div className={styles.background} style={{ backgroundColor: props.color }}>{props.title}</div>
      <div className={styles.text}>{props.title}</div>
    </div>
  )
}
