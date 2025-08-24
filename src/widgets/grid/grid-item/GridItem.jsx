  import { useState } from "react"

  export function GridItem(props) {
    const [loaded, setLoaded] = useState(false)
    const photoName = props.data.telegram.split("/").pop()

    return (
      <a
        href={props.data.telegram}
        target="_blank"
        style={{
          height: loaded ? "auto" : "595px",
          opacity: loaded ? 1 : 0,
          transition: "opacity 300ms ease",
        }}
      >
        <img
          src={`./photos/${photoName}.webp`}
          alt={props.data.title}
          onLoad={() => setLoaded(true)}
        />
        <div>{props.data.title}</div>
      </a>
    )
  }
