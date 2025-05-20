import recipes from "@/app/data/recipes.json"
import { AppHeader } from "@/widgets/app-header"
import { Grid } from "@/widgets/grid"
import { Page } from "@/shared/ui/page"
import { Row } from "@/shared/ui/row"
import { Col } from "@/shared/ui/col"

function App() {
  return (
    <Page>
      <Row>
        <Col>
          <AppHeader />
        </Col>
      </Row>
      <Row>
        <Col>
          <Grid recipes={recipes} />
        </Col>
      </Row>
    </Page>
  )
}

export default App
