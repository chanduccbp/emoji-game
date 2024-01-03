// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, result} = props
  let scoreCont
  if (result === '') {
    scoreCont = (
      <div className="score-cont">
        <p>Score: {score}</p>
        <p className="ts">Top Score: {topScore}</p>
      </div>
    )
  }

  return (
    <navbar className="navbar">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {scoreCont}
    </navbar>
  )
}

export default NavBar
