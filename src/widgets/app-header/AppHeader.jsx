import styles from "./styles.module.css"
  
export function AppHeader() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Катькин завтрак</h1>
      <div>
        Добро пожаловать в кладовку. Здесь тебе и маринованный перчик, и
        салатик, и мяско.
        <br />
        Собрали все все все рецепты в одном месте, чтобы глаза от выбора
        разбежались, а руки зачесались что-то приготовить.
      </div>
    </div>
  )
}
