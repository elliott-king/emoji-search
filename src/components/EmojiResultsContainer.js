import React from 'react'

import EmojiResultRow from './EmojiResultRow'

const EmojiResultsContainer = (props) => {
  const {emojiList} = props

  return (
    <div className="emoji-results-container">
      {/* TODO: create some rows using your emojiList */}
      <p>{emojiList[0].symbol}</p>
    </div>
  )
}

export default EmojiResultsContainer