import './cv-about.css';

function About() {
  return (
    <section className="section section-blue" id="about">
      <div className="wrapper cv-about">
        <h2 className="text-color-white">/about</h2>
        <div className="cv-about__text-box">
          <span className="about-text text-color-white">
            I always wanted to be a teacher, but the Russian education system quickly brought me
            down from heaven to earth. So I decided to work with the passion of my childhood -
            computers. I've been working as a system administrator for seven years, fixing computer
            hardware and dealing with networks. But one day I had to develop a website. Without
            having any experience.
          </span>
          <span className="about-text text-color-white">
            However, it was since then that I began to wonder how all this works outside of special
            services for creating websites.
          </span>
          <span className="about-text text-color-white">
            I also like computer games, volleyball and cycling.
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
