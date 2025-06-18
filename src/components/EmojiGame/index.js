import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojis: [], isGameInProgress: true})
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    const newTopScore = currentScore > topScore ? currentScore : topScore
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {clickedEmojis} = this.state
    const {emojisList} = this.props

    if (clickedEmojis.includes(id)) {
      this.finishGameAndSetTopScore(clickedEmojis.length)
    } else {
      const updatedClickedEmojis = [...clickedEmojis, id]
      if (updatedClickedEmojis.length === emojisList.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      } else {
        this.setState({clickedEmojis: updatedClickedEmojis})
      }
    }
  }

  renderGameView = () => {
    const {emojisList} = this.props
    const shuffledEmojis = [...emojisList].sort(() => Math.random() - 0.5)

    return (
      <ul className="emojis-list">
        {shuffledEmojis.map(emoji => (
          <EmojiCard
            key={emoji.id}
            emoji={emoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojis, isGameInProgress, topScore} = this.state
    const {emojisList} = this.props

    return (
      <div className="emoji-game-bg">
        <NavBar
          score={clickedEmojis.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="game-container">
          {isGameInProgress ? (
            this.renderGameView()
          ) : (
            <WinOrLoseCard
              isWon={clickedEmojis.length === emojisList.length}
              score={clickedEmojis.length}
              onClickPlayAgain={this.resetGame}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
