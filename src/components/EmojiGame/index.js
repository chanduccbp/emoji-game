/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedList: [], score: 0, topScore: 0, isWon: ''}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedList, score, topScore} = this.state
    const clickedEmoji = emojisList.filter(eachEmoji => eachEmoji.id === id)
    if (clickedList.includes(clickedEmoji[0])) {
      const newTopScore = score > topScore ? score : topScore
      this.setState({topScore: newTopScore, isWon: false})
    } else {
      const newClickedList = [...clickedList, clickedEmoji[0]]
      if (newClickedList.length === emojisList.length) {
        this.setState({
          score: newClickedList.length,
          topScore: newClickedList.length,
          isWon: true,
        })
      } else {
        this.setState(prevState => ({
          clickedList: newClickedList,
          score: prevState.score + 1,
        }))
      }
    }
  }

  playAgain = () => {
    this.setState({clickedList: [], score: 0, isWon: ''})
  }

  render() {
    const {clickedList, score, topScore, isWon} = this.state
    const {emojisList} = this.props
    const eList =
      clickedList.length === 0 ? emojisList : this.shuffledEmojisList()

    let displayCard
    if (isWon !== '') {
      displayCard = (
        <WinOrLoseCard result={isWon} score={score} reset={this.playAgain} />
      )
    } else {
      displayCard = (
        <ul className="emojis">
          {eList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              eDetails={eachEmoji}
              onClickEmoji={this.onClickEmoji}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} result={isWon} />
        <div className="card-cont">{displayCard}</div>
      </div>
    )
  }
}

export default EmojiGame
