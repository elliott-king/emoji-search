import React from 'react'
import './EmojiResultRow.css'

const EmojiResultRow = (props) => {
  const { emoji } = props
  const codePointHex = emoji.symbol.codePointAt(0).toString(16)
  const imgSrc = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emoji.symbol)
  }

  return (
    <div className="emoji-result-row" onClick={copyToClipboard}>
      <img alt={emoji.title} src={imgSrc} />
      <span className="title">{emoji.title}</span>
      <span className="info">Click to copy emoji</span>
    </div>
  )
}

export default EmojiResultRow