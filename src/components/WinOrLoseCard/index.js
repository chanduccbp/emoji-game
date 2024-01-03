// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {result, score, reset} = props
  const resultText = result ? 'You Won' : 'You Lose'
  const scoreText = result ? 'Best Score' : 'Score'
  const resultImg = result
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="result">
      <div className="res-det">
        <h1 className="head">{resultText}</h1>
        <p>{scoreText}</p>
        <p className="score">{score}/12</p>
        <button className="butt" type="button" onClick={reset}>
          Play Again
        </button>
      </div>
      <img src={resultImg} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
