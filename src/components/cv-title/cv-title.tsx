import './cv-title.css';

function Title() {
  return (
    <section className="section section-white">
      <div className="wrapper cv-title">
        <div className="cv-title__text-box">
          <span className="small-text text-color-blue">Aleksandr Chuchev</span>
          <span className="small-text text-color-blue">Portfolio</span>
        </div>
        <img src="/main-text.svg" alt="cv inspiration text" />
      </div>
    </section>
  );
}

export default Title;
