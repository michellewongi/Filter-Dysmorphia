export default function Overview() {
  return (
    <section className="Overview-section">
      <h2 className="Subheaders">Overview.</h2>
      <div className="timeline-section">
        <div className="timeline">
          <div className="container left">
            <div className="date">2013</div>
            <div className="content">
              <h2>Looksery</h2>
              <p>
                Looksery was a San Francisco software and photography startup
                founded by Victor Shaburov and Yuri Monastyrshin. Looksery
                specialised in facial tracking and face modification technology.
                They developed a mobile application that allowed users to
                simulate their appearance for a photo or video chat in
                real-time.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="date">Sep 2015</div>
            <div className="content">
              <h2>Snapchat release Lenses</h2>
              <p>
                Snapchat acquires Looksery for $150 million and introduced their
                new feature called Lenses. Snapchat Lenses allowed users to take
                photos and videos using AR filters to add 3D elements into the
                camera photo.
              </p>
            </div>
          </div>
          <div className="container left">
            <div className="date">Dec 2017</div>
            <div className="content">
              <h2>Lens Studio</h2>
              <p>
                Snapchat launched Lens Studio after their in-house team built
                more than 3000 AR filters. Lens Studio is a tool for creating
                Snapchat lenses and allows anyone to create their own customized
                filter.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="date">Apr 2017</div>
            <div className="content">
              <h2>Facebook joins...</h2>
              <p>
                Facebook introduced their AR building tool called Camera
                Effects. It was later renamed as Spark AR and got expanded to
                Instagram as well. Beta participants were able to create AR
                filters and make them avaliable to their followers.
              </p>
            </div>
          </div>
          <div className="container left">
            <div className="date">Apr 2019</div>
            <div className="content">
              <h2>Lens Studio 2.0</h2>
              <p>
                Snapchat launched the 2.0 version of Lens Studio. Lens Studio
                2.0 included tools for transforming pets, hands, bodies, and
                background.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="date">Aug 2019</div>
            <div className="content">
              <h2>SparkAR is Public</h2>
              <p>
                Facebook made SparkAR avaliable for everyone, allowing people to
                create experiences on Instagram and Facebook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
