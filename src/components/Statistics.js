import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { data1, data2, data3, data4, data5, data6, data7, data8 } from "./Data";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export default function Statistics() {
  return (
    <section className="StatSection">
      <h2>survey in idm</h2>
      <h3 className="StatHeader">General Questions</h3>
      <div className="StatWrapper">
        <div>
          <h4 className="StatTitle">What is your age?</h4>
          <Bar
            data={data1}
            options={{
              indexAxis: "x",
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                  display: false,
                },
              },
            }}
          />
        </div>

        <div>
          <h4 className="StatTitle">What is your gender identity?</h4>
          <Doughnut data={data2} className="StatDoughnut" />
        </div>

        <div>
          <h4 className="StatTitle">
            Which of these social media apps do you use more than once a week?
          </h4>
          <Bar
            data={data3}
            options={{
              indexAxis: "y",
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                  display: false,
                },
              },
            }}
          />
        </div>

        <div>
          <h4 className="StatTitle">
            How many hours a day in total do you spend on social media?
          </h4>
          <Doughnut data={data4} className="StatDoughnut" />
        </div>
      </div>

      <h3 className="StatHeader2">Filter Dysmorphia</h3>
      <h4 className="StatQuestion">
        Have you ever experienced facial dysmorphia because of filters on social
        media?
      </h4>
      <div className="StatWrapper2">
        <div>
          <h4 className="StatTitle">Men</h4>
          <Doughnut data={data5} className="StatDoughnut" />
        </div>

        <div>
          <h4 className="StatTitle">women</h4>
          <Doughnut data={data6} className="StatDoughnut" />
        </div>
      </div>

      <h4 className="StatQuestion">
        Has the thought of getting cosmetic procedures done ever cross your mind
        because of filters?
      </h4>
      <div className="StatWrapper2">
        <div>
          <h4 className="StatTitle">men</h4>
          <Doughnut data={data7} className="StatDoughnut" />
        </div>

        <div>
          <h4 className="StatTitle">women</h4>
          <Doughnut data={data8} className="StatDoughnut" />
        </div>
      </div>

      {/* <div className="Carousel-nav">
          <button className="prev">
            <FaChevronLeft />
          </button>
          <button className="next">
            <FaChevronRight onClick={handleNext} />
          </button>
        </div> */}
    </section>
  );
}
