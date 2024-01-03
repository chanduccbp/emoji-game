// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = eDetails

  const onClickingEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="e-card">
      <button type="button" onClick={onClickingEmoji} className="e-butt">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
