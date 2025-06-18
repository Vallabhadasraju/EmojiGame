import './index.css'

const WinOrLoseCard = ({isWon, score, onClickPlayAgain}) => {
  const resultText = isWon ? 'You Won' : 'You Lose'
  const resultImage = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="result-card">
      <div className="text-container">
        <h1 className="result-text">{resultText}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={resultImage} alt="win or lose" className="result-img" />
    </div>
  )
}

export default WinOrLoseCard
