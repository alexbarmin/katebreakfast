import '../styles/App.css'
import recipes from "../data/recipes.json"
import { Datatable } from "../../widgets/datatable"


function App() {
  return (
    <>
      <h1>Катькин завтрак</h1>
      <div>
        Добро пожаловать в кладовку. Здесь тебе и маринованный перчик, и салатик, и мяско. Всё что найдешь, забирай и радуйся.<br/>
        Собрали все все все рецепты в одном месте, чтоб глаза от выбора разбежались, а ручонки приготовить что-то зачесались.
      </div>
      <Datatable recipes={recipes}/>
    </>
  )
}

export default App
