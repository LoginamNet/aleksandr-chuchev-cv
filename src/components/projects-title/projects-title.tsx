import { useState, useEffect } from 'react';

import './projects-title.css';

function ProjectsTitle() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const fullText = 'Projects';

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
      <div className="wrapper projects-title">
        <h1 className="small-text text-color-blue">
          {text}
          <span className="cursor">|</span>
        </h1>
      </div>
    </section>
  );
}

export default ProjectsTitle;
