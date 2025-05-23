import { Page, Row, Col } from "@/shared/layout"
import { AppHeader } from "@/widgets/app-header"
import { Search } from "@/widgets/search"
import { TagsFilter } from "@/widgets/tags-filter"
import { Grid } from "@/widgets/grid"

import { useSelector, useDispatch } from "react-redux"
import { setSearchString, setActiveTag } from "@/app/store/filterSlice"
import { selectFilteredRecipes } from "@/app/store/filterSlice"

export default function App() {
  const dispatch = useDispatch()

  const filteredRecipes = useSelector(selectFilteredRecipes)
  const tags = useSelector((state) => state.filter.tags)
  const searchString = useSelector((state) => state.filter.searchString)
  const activeTag = useSelector((state) => state.filter.activeTag)

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
            <Search
              value={searchString}
              onChange={(event) => {
                dispatch(setSearchString(event.target.value))
              }}
            />
            <TagsFilter
              tags={tags}
              activeTag={activeTag}
              onChange={(event) => {
                dispatch(setActiveTag(event))
              }}
            />
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col>
            <Grid recipes={filteredRecipes} />
          </Col>
        </Row>
      </div>
    </Page>
  )
}
