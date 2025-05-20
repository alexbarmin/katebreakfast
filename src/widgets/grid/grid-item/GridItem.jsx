import styles from "./styles.module.css"

export function GridItem(props) {
  const photoName = props.recipe.telegram.split("/").pop()

  return (
    <a className={styles.wrapper} href={props.recipe.telegram} target="_blank">
      <img src={`./photos/${photoName}.jpeg`} alt={props.recipe.title} />
      <div className={styles.title}>{props.recipe.title}</div>
    </a>
  )
}
