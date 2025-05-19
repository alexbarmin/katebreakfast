import styles from "./styles.module.css"

export function Datatable(props) {

  const recipes = props.recipes.map(recipe => {
    return (
      <tr key={recipe.name}>
        <td className={styles.tableCell}>
          <a href={recipe.telegram} target="_blank">{recipe.name}</a>
        </td>
        <td className={styles.tableCell}>{recipe.tags}</td>
      </tr>
    )
  })

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tableCell}>Название</th>
          <th className={styles.tableCell}>Теги</th>
        </tr>
      </thead>
      <tbody>
        {recipes}
      </tbody>
    </table>
  )
}
