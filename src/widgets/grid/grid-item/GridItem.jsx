import { useState } from "react";

export function GridItem(props) {
  const [loaded, setLoaded] = useState(false);
  const photoName = props.recipe.telegram.split("/").pop();

  return (
    <a
      href={props.recipe.telegram}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        height: loaded ? "auto" : "595px",
        opacity: loaded ? 1 : 0,
        transition: "opacity 300ms ease",
        display: "block", // Добавляем для лучшей поддержки lazy loading
        overflow: "hidden", // Чтобы содержимое не выходило за границы во время загрузки
      }}
    >
      <img
        src={loaded ? `./photos/${photoName}.webp` : ""} // Не загружаем src пока не нужно
        alt={props.recipe.title}
        loading="lazy" // Добавляем нативный lazy loading
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          backgroundColor: loaded ? "transparent" : "#f5f5f5", // Плейсхолдер
        }}
      />
      <div style={{
        padding: "8px",
        textAlign: "center",
        backgroundColor: "#fff",
      }}>
        {props.recipe.title}
      </div>
    </a>
  );
}