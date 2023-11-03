import { useRef, useState, useEffect } from 'react';

type ComponentProps = {
  text: string;
};

function PrivacyHeader(props: ComponentProps) {
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
    <h3
      className={`privacy-header text-color-white element-apear-on-scroll ${
        position <= 100 && 'element-not-scrolled'
      }`}
      ref={textRef}
    >
      {props.text}
    </h3>
  );
}

export default PrivacyHeader;
