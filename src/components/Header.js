import { default as hamburger } from "../icons/bars-solid.svg";
import { default as cancel } from "../icons/xmark-solid.svg";

export default function Header() {
  function handleClick() {
    const dropdown = document.querySelector(".HeaderWrapper");
    const icon = document.querySelector(".HeaderIcon");
    if (dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("hidden");
      icon.classList.add("hidden");
    } else {
      dropdown.classList.add("hidden");
      icon.classList.remove("hidden");
    }
  }

  return (
    <header className="Header">
      <img src={hamburger} className="HeaderIcon" onClick={handleClick} />

      <nav className="HeaderWrapper hidden">
        <img src={cancel} className="HeaderCancel" onClick={handleClick} />
        <a href="/">Home</a>
        <a href="/overview">History</a>
        <a href="/statistics">Analysis</a>
      </nav>
    </header>
  );
}
