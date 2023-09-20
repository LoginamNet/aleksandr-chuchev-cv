import { useEffect } from 'react';
import './preloader.css';

type ComponentProps = {
  isPageLoaded: boolean;
  setIsPreloadesDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
};

function Preloader(props: ComponentProps) {
  const percentages = [0, 14, 27, 38, 42, 53, 64, 75, 86, 100];

  const handleTransition = () => {
    props.setIsPreloadesDisplayed(false);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className={`preloader ${!props.isPageLoaded ? 'preloader-shown' : ''}`}
      onTransitionEnd={handleTransition}
    >
      <div className="preloader__background"></div>
      <div className="preloader__percentages-box">
        <div className="preloader__percentages">
          {percentages.map((percent, key) => (
            <span key={key} className={percent >= 65 ? 'text-color-blue' : 'text-color-white'}>
              {percent}%
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Preloader;
