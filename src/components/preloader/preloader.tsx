import './preloader.css';

function Preloader() {
  const percentages = [0, 14, 27, 38, 42, 53, 64, 75, 86, 100];

  return (
    <div className="preloader">
      <div className="preloader__background"></div>
      <div className="preloader__percentages">
        {percentages.map((percent, key) => (
          <span key={key} className={percent <= 50 ? 'text-color-blue' : 'text-color-white'}>
            {percent}%
          </span>
        ))}
      </div>
    </div>
  );
}

export default Preloader;
