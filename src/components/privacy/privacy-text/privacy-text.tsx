import { useRef, useState, useEffect } from 'react';

type ComponentProps = {
  textBefore?: string;
  link?: string;
  linkHref?: string;
  textAfter?: string;
};

function PrivacyText(props: ComponentProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    if (textRef.current !== null) {
      setPosition(window.screen.height - textRef.current.getBoundingClientRect().top);
    }
  };

  useEffect(() => {
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <span
      className={`privacy-text text-color-white element-apear-on-scroll ${
        position <= 100 && 'element-not-scrolled'
      }`}
      ref={textRef}
    >
      {props.textBefore}
      <a className="privacy__link text-color-white" href={props.linkHref}>
        {props.link}
      </a>
      {props.textAfter}
    </span>
  );
}

export default PrivacyText;
