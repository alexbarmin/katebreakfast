import Masonry from "react-masonry-css"
import styles from "./styles.module.css"
import { GridItem } from "./grid-item"

export function Grid(props) {
  const recipes = props.recipes.map((recipe) => (
    <GridItem key={recipe.title} recipe={recipe} />
  ))

  const breakpoints = {
    default: 3,
    768: 2,
  }

  return (
    <Masonry
      breakpointCols={breakpoints}
      className={styles.grid}
      columnClassName={styles.gridColumn}
    >
      {recipes}
    </Masonry>
  )
}
