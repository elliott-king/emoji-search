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
      {/* TODO: fill in this div with an image and name, and maybe some informational text.
      Feel free to check the CSS and https://elliott-king.github.io/emoji-search/ */}
    </div>
  )
}

export default EmojiResultRow