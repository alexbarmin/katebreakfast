import recipes from "@/app/data/recipes.json"
import tags from "@/app/data/tags.json"
import { AppHeader } from "@/widgets/app-header"
import { Search } from "@/widgets/search"
import { TagsFilter } from "@/widgets/tags-filter"
import { Grid } from "@/widgets/grid"
import { Page, Row, Col } from "@/shared/layout"

function App() {
  return (
    <Page>
      <div>
        <Row>
          <Col>
            <AppHeader />
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col>
            <Search />
            <TagsFilter tags={tags} />
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col>
            <Grid recipes={recipes} />
          </Col>
        </Row>
      </div>
    </Page>
  )
}

export default App
