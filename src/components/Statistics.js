import { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { data3, data4, data5, data6 } from "./Data";

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
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="StatSection">
      <h2>data.</h2>
      <p className="StatDescription">
        I surveyed 21 female and non-binary participants between the ages of 21
        - 29 regarding their use of beauty filters on social media. I wanted to
        understand the impact of filters on one's self-image. I found that there
        was a positive correlation between social media screen time and
        frequency of filter usage with dysmorphia and considering getting
        cosmetic procedures done.
      </p>
      <ul>
        <li>
          There is a 10% increase in experiencing dysmorphia with each increased
          level in frequency of using beauty filters.
        </li>
        <li>
          There is a 30% increase in those who have considered getting cosmetic
          procedures done with each increased level in frequency of using beauty
          filters.
        </li>
        <li>
          Of those who spent more than 3 hour on social media, 60% of those
          individuals have experienced facial dysmorphia.
        </li>
      </ul>
      <h3 className="StatHeader">General</h3>

      <div className="StatWrapper">
        <div data-aos={"fade-up"} data-aos-duration="1000">
          <h4 className="StatTitle">
            How frequently do you use beauty filters on social media?
          </h4>
          <Bar
            data={data3}
            options={{
              indexAxis: "x",
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>

        <div data-aos={"fade-up"} data-aos-duration="1000">
          <h4 className="StatTitle">
            How many hours a day in total do you spend on social media?
          </h4>
          <Doughnut data={data4} className="StatDoughnut" />
        </div>
      </div>

      <h3 className="StatHeader2">Dysmorphia</h3>
      <div className="StatWrapper2">
        <div data-aos={"fade-up"} data-aos-duration="1000">
          <h4 className="StatTitle">
            Have you ever experienced facial dysmorphia because of filters on
            social media?
          </h4>
          <Doughnut data={data5} className="StatDoughnut" />
        </div>

        <div data-aos={"fade-up"} data-aos-duration="1000">
          <h4 className="StatTitle">
            Has the thought of getting cosmetic procedures done cross your mind
            before because of beauty filters?
          </h4>
          <Doughnut data={data6} className="StatDoughnut" />
        </div>
      </div>
    </section>
  );
}
