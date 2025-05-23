import styles from "./styles.module.css"
import searchIcon from "./assets/search.svg"

export function Search(props) {    
  return (
    <div className={styles.wrapper}>
      <input type="text" className={styles.input} onChange={props.onChange}/>
      <img src={searchIcon} alt="search icon" className={styles.icon}/>
    </div>
  )
}
