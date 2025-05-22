import recipes from "@/app/data/recipes.json"
import tags from "@/app/data/tags.json"
import { AppHeader } from "@/widgets/app-header"
import { TagsFilter } from "@/widgets/tags-filter"
import { Grid } from "@/widgets/grid"
import { Page } from "@/shared/ui/page"
import { Row } from "@/shared/ui/row"
import { Col } from "@/shared/ui/col"

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
