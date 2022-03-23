import "./App.css";
import Hero from "./components/Hero";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="App">
      <section className="Hero">
        <Hero />
      </section>
      <section className="Overview">
        <Overview />
      </section>
      <section className="Statistics">
        <h2>Statistics</h2>
      </section>
    </div>
  );
}

export default App;
