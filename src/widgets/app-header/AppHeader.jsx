import styles from "./styles.module.css"
  
export function AppHeader() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Катькин завтрак</h1>
      <div>
        Добро пожаловать в кладовку. Здесь тебе и маринованный перчик, и
        салатик, и мяско. Всё что найдешь, забирай и радуйся.
        <br />
        Собрали все все все рецепты в одном месте, чтоб глаза от выбора
        разбежались, а ручонки приготовить что-то зачесались.
      </div>
    </div>
  )
}
