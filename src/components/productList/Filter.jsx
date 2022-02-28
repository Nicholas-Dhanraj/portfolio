import { useEffect } from "react";

function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
  useEffect(() => {
    if (activeGenre === "") {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((item) =>
      [...item.tags].includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre, popular, setFiltered]);
  return (
    <div className="filter-container">
      <button
        className={activeGenre === "all" ? "active" : ""}
        onClick={() => setActiveGenre("all")}
      >
        All
      </button>
      <button
        className={activeGenre === "react" ? "active" : ""}
        onClick={() => setActiveGenre("react")}
      >
        React
      </button>
      <button
        className={activeGenre === "angular" ? "active" : ""}
        onClick={() => setActiveGenre("angular")}
      >
        Angular
      </button>
      <button
        className={activeGenre === "phplaravel" ? "active" : ""}
        onClick={() => setActiveGenre("phplaravel")}
      >
        PHP (Laravel)
      </button>
      <button
        className={activeGenre === "django" ? "active" : ""}
        onClick={() => setActiveGenre("django")}
      >
        Django
      </button>

      <button
        className={activeGenre === "gsap" ? "active" : ""}
        onClick={() => setActiveGenre("gsap")}
      >
        GSAP
      </button>
      <button
        className={activeGenre === "framer" ? "active" : ""}
        onClick={() => setActiveGenre("framer")}
      >
        Framer Motion
      </button>
      <button
        className={activeGenre === "figma" ? "active" : ""}
        onClick={() => setActiveGenre("figma")}
      >
        Figma
      </button>
      <button
        className={activeGenre === "r3f" ? "active" : ""}
        onClick={() => setActiveGenre("r3f")}
      >
        React Three Fiber
      </button>
      <button
        className={activeGenre === "postgresql" ? "active" : ""}
        onClick={() => setActiveGenre("postgresql")}
      >
        PostgreSQL
      </button>
      <button
        className={activeGenre === "mysql" ? "active" : ""}
        onClick={() => setActiveGenre("mysql")}
      >
        MySQL
      </button>
    </div>
  );
}
export default Filter;
