function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Your premier destination for beautiful
          houseplants. We offer a curated selection of air-purifying plants,
          aromatic herbs, and flowering indoor plants to transform your living
          space into a green sanctuary.
        </p>
        <button className="get-started-btn" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
