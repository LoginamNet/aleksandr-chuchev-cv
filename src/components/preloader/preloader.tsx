import ScrollLock from 'react-scrolllock';

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

  return (
    <ScrollLock>
      <div
        className={`preloader ${!props.isPageLoaded ? 'preloader-shown' : ''} ${
          props.isPageLoaded ? 'section-rounded-top' : ''
        }`}
        onTransitionEnd={handleTransition}
      >
        <div className="preloader__background-blue">
          <div className="preloader__percentages-box preloader__percentages-box__align-left">
            <div className="preloader__percentages-slider">
              <div className="preloader__percentages">
                {percentages.map((percent, key) => (
                  <span key={key} className="preloader__percentages-box__text text-color-white">
                    {percent}
                  </span>
                ))}
              </div>
            </div>
            <span className="preloader__percentages-box__text text-color-white">%</span>
          </div>
        </div>
        <div className="preloader__background-white">
          <div className="preloader__percentages-box preloader__percentages-box__align-right">
            <div className="preloader__percentages-slider">
              <div className="preloader__percentages">
                {percentages.map((percent, key) => (
                  <span key={key} className="preloader__percentages-box__text text-color-blue">
                    {percent}
                  </span>
                ))}
              </div>
            </div>
            <span className="preloader__percentages-box__text text-color-blue">%</span>
          </div>
        </div>
      </div>
    </ScrollLock>
  );
}

export default Preloader;
