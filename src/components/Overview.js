export default function Overview() {
  return (
    <>
      <section className="OverviewSection">
        <h2>History.</h2>
        <div className="TimelineSection">
          <div className="TimelineWrapper">
            <div className="TimelineContainer left">
              <div className="TimelineDate">2013</div>
              <div className="TimelineContent">
                <h3>Looksery</h3>
                <p>
                  Looksery was a San Francisco software and photography startup
                  founded by Victor Shaburov and Yuri Monastyrshin. Looksery
                  specialised in facial tracking and face modification
                  technology. They developed a mobile application that allowed
                  users to simulate their appearance for a photo or video chat
                  in real-time.{" "}
                  <sub>
                    <a href="#footnote1">[1]</a>
                  </sub>
                </p>
              </div>
            </div>
            <div className="TimelineContainer right">
              <div className="TimelineDate">Sep 2015</div>
              <div className="TimelineContent">
                <h3>Snapchat release Lenses</h3>
                <p>
                  Snapchat acquires Looksery for $150 million and introduced
                  their new feature called Lenses. Snapchat Lenses allowed users
                  to take photos and videos using AR filters to add 3D elements
                  into the camera photo.{" "}
                </p>
              </div>
            </div>
            <div className="TimelineContainer left">
              <div className="TimelineDate">Dec 2017</div>
              <div className="TimelineContent">
                <h3>Lens Studio</h3>
                <p>
                  Snapchat launched Lens Studio after their in-house team built
                  more than 3000 AR filters. Lens Studio is a tool for creating
                  Snapchat lenses and allows anyone to create their own
                  customized filter.{" "}
                  <sub>
                    <a href="#footnote2">[2]</a>
                  </sub>
                </p>
              </div>
            </div>
            <div className="TimelineContainer right">
              <div className="TimelineDate">Apr 2017</div>
              <div className="TimelineContent">
                <h3>Facebook joins...</h3>
                <p>
                  Facebook introduced their AR building tool called Camera
                  Effects. It was later renamed as Spark AR and got expanded to
                  Instagram as well. Beta participants were able to create AR
                  filters and make them avaliable to their followers.
                  <sub>
                    <a href="#footnote3">[3]</a>
                  </sub>
                </p>
              </div>
            </div>
            <div className="TimelineContainer left">
              <div className="TimelineDate">Apr 2019</div>
              <div className="TimelineContent">
                <h3>Lens Studio 2.0</h3>
                <p>
                  Snapchat launched the 2.0 version of Lens Studio. Lens Studio
                  2.0 included tools for transforming pets, hands, bodies, and
                  background.
                  <sub>
                    <a href="#footnote4">[4]</a>
                  </sub>
                </p>
              </div>
            </div>
            <div className="TimelineContainer right">
              <div className="TimelineDate">Aug 2019</div>
              <div className="TimelineContent">
                <h3>SparkAR is Public</h3>
                <p>
                  Facebook made SparkAR avaliable for everyone, allowing people
                  to create experiences on Instagram and Facebook.
                  <sub>
                    <a href="#footnote5">[5]</a>
                  </sub>
                </p>
              </div>
            </div>
            <div className="TimelineContainer left">
              <div className="TimelineContent">
                <h3>References</h3>
                <div className="OverviewFoot">
                  <p id="footnote1">
                    <a href="https://techcrunch.com/2015/09/15/snapchat-looksery/">
                      [1]
                    </a>{" "}
                    Constine, Josh. "Snapchat Acquires Looksery To Power Its
                    Animated Lenses". <i>Indestry.</i> 15 Sep. 2015.
                    https://techcrunch.com/2015/09/15/snapchat-looksery/.
                  </p>
                  <p id="footnote2">
                    <a href="https://martech.org/snapchats-lens-studio-app-opens-augmented-reality-format-everyone-including-self-serve-advertisers/">
                      [2]
                    </a>{" "}
                    Peterson, Tim. "Snapchat’s Lens Studio app opens
                    augmented-reality format to everyone, including self-serve
                    advertisers". <i>MarTech.</i> 14 Dec. 2017.
                    https://martech.org/snapchats-lens-studio-app-opens-augmented-reality-format-everyone-including-self-serve-advertisers/.
                  </p>
                  <p id="footnote3">
                    <a href="https://www.roadtovr.com/facebook-adding-ar-tools-camera-platform-foundation-advanced-augmented-reality/">
                      [3]
                    </a>{" "}
                    Palladino, Tommy. "Facebook Launches New Camera Tools as a
                    Foundation for Advanced Augmented Reality". <i>RoadTovr.</i>{" "}
                    18 Apr. 2017.
                    https://www.roadtovr.com/facebook-adding-ar-tools-camera-platform-foundation-advanced-augmented-reality/.
                  </p>
                  <p id="footnote4">
                    <a href="https://next.reality.news/news/snap-simplifies-lens-studio-with-no-code-ar-tools-new-templates-invests-3-5-million-ar-development-0384128/">
                      [4]
                    </a>{" "}
                    Hayden, Scott. "Facebook Launches New Camera Tools as a
                    Foundation for Advanced Augmented Reality".{" "}
                    <i>Next Reality.</i> 08 Dec. 2020.
                    https://next.reality.news/news/snap-simplifies-lens-studio-with-no-code-ar-tools-new-templates-invests-3-5-million-ar-development-0384128/.
                  </p>
                  <p id="footnote5">
                    <a href="https://developers.facebook.com/blog/post/2019/08/13/spark-ar-publish-to-instagram/">
                      [5]
                    </a>{" "}
                    Roberts, Matt. "Creativity for all: Facebook’s Spark AR now
                    lets anyone build and share effects on Instagram".{" "}
                    <i>Meta for Developers.</i> 13 Aug. 2019.
                    https://developers.
                    facebook.com/blog/post/2019/08/13/spark-ar-publish-to-instagram/.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
