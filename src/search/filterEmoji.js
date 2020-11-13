import emojiList from "./emojiList.json";

const filterEmoji = (filter, maxResults) => {
  // TODO: implement a better filter
  return emojiList.slice(0, maxResults)
}

export default filterEmoji