import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { data } from "./Data";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Statistics() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <section className="Stat-section">
      <h2>Statistics</h2>
      <div className="Stat-slideshow">
        <div className="Carousel">
          {data.map((item, key) => {
            if (data.indexOf(item) === currentIndex) {
              return (
                <div className="Carousel-slide" key={key}>
                  <h3 className="Carousel-title">
                    Out of 175 young women and nonbinary people...
                  </h3>
                  <Doughnut data={item} className="Carousel-item" />
                </div>
              );
            }
          })}
        </div>
        <div className="Carousel-nav">
          <button className="prev">
            <FaChevronLeft />
          </button>
          <button className="next">
            <FaChevronRight onClick={handleNext} />
          </button>
        </div>
      </div>
    </section>
  );
}
