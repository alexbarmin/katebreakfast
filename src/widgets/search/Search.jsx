import styles from "./styles.module.css"
import searchIcon from "./assets/search.svg"

export function Search(props) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        className={styles.input}
      />
      <img src={searchIcon} alt="search icon" className={styles.icon} />
    </div>
  )
}
