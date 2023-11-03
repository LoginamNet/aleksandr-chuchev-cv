import { useRef, useState, useEffect } from 'react';

type ComponentProps = {
  text: string;
};

function PrivacyListItem(props: ComponentProps) {
  const listElRef = useRef<HTMLLIElement>(null);
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    if (listElRef.current !== null) {
      setPosition(window.screen.height - listElRef.current.getBoundingClientRect().top);
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
    <li
      className={`privacy-text text-color-white element-apear-on-scroll ${
        position <= 100 && 'element-not-scrolled'
      }`}
      ref={listElRef}
    >
      {props.text}
    </li>
  );
}

export default PrivacyListItem;
