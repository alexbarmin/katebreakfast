export function GridItem(props) {
  const photoName = props.recipe.telegram.split("/").pop()

  return (
    <a href={props.recipe.telegram} target="_blank">
      <img src={`./photos/${photoName}.webp`} alt={props.recipe.title} />
      <div>{props.recipe.title}</div>
    </a>
  )
}
