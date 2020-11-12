import React from 'react'

import EmojiResultRow from './EmojiResultRow'

const EmojiResultsContainer = (props) => {
  const {emojiList} = props

  return (
    <div className="emoji-results-container">
      {emojiList.map(emoji => <EmojiResultRow emoji={emoji} key={emoji.title} />)}
    </div>
  )
}

export default EmojiResultsContainer