import './index.css'

const NavBar = ({score, topScore, isGameInProgress}) => (
  <nav className="nav-bar">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="logo"
      />
      <h1 className="title">Emoji Game</h1>
    </div>
    {isGameInProgress && (
      <div className="score-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )}
  </nav>
)

export default NavBar
