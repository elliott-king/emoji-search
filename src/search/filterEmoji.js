import emojiList from "./emojiList.json";

const filterEmoji = (filter, maxResults) => {
  return emojiList
    .filter(emoji => {
      if (
        emoji.title.toLowerCase().includes(filter.toLowerCase())
        || emoji.keywords.toLowerCase().includes(filter.toLowerCase())
        || emoji.symbol === filter
      ) return true
      else return false
    })
    .slice(0, maxResults)
}

export default filterEmoji