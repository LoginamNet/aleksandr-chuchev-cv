import { useState, useEffect } from 'react';
import './cv-title.css';

function Title() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const fullText = 'Aleksandr Chuchev';

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 70);
    }
  }, [fullText, index, text]);

  return (
    <section className="section section-white">
      <div className="wrapper cv-title">
        <div className="cv-title__text-box">
          <h1 className="small-text text-color-blue">
            {text}
            <span className="cv-title__cursor">|</span>
          </h1>
          <span className="cv-title__text text-color-dark">Portfolio</span>
        </div>
      </div>
    </section>
  );
}

export default Title;
