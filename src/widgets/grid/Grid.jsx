import styles from "./styles.module.css"
import { GridItem } from "./grid-item"
  
export function Grid(props) {
  const recipes = props.recipes.map(recipe => <GridItem key={recipe.title} recipe={recipe} />)

  return (
    <div className={styles.wrapper}>
      {recipes}
    </div>
  )
}
