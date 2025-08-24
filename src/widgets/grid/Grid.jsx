import { Masonry } from "masonic"
import styles from "./styles.module.css"
import { GridItem } from "./grid-item"

export function Grid(props) {
  if (!props.recipes.length) {
    return "Ничего не найдено."
  }

  // const recipes = props.recipes.map((recipe) => (
  //   <GridItem key={recipe.title} recipe={recipe} />
  // ))

  // const breakpoints = {
  //   default: 3,
  //   768: 2,
  // }

  return (
    <Masonry
      // breakpointCols={breakpoints}
      // className={styles.grid}
      // columnClassName={styles.gridColumn}
      // Provides the data for our grid items
      items={props.recipes}
      // Adds 8px of space between the grid cells
      columnGutter={8}
      // Sets the minimum column width to 172px
      columnWidth={172}
      // Pre-renders 5 windows worth of content
      overscanBy={5}
      // This is the grid item component
      render={GridItem}
    />
      // {/*{recipes}*/}
    // </Masonry>
  )
}
