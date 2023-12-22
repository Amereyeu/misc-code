
function Hero({ title, option }) {
  return (
    <div className="hero-wrap">
      <div className={`hero hero--${option}`}>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Hero;

