import styles from "./styles.module.css"
import { Tag } from "./tag"

const tagColors = [
  "#D4A8A8",
  "#E9A85C",
  "#F2C94C",
  "#83BFA3",
  "#5BADC7",
  "#BA8DD8",
  "#DB5C9A",
  "#D14A4A",
]

export function TagsFilter(props) {
  const tags = props.tags.map((tag, index) => {
    const tagColor = tagColors[index % tagColors.length]
    return (
      <Tag
        key={tag.title}
        title={tag.title}
        color={tagColor}
        isActive={tag.title === props.activeTag}
        onClick={() => props.onChange(tag.title)}
      />
    )
  })

  return <div className={styles.wrapper}>{tags}</div>
}
