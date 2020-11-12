import {useState} from 'react'
import logo from './logo.svg'

import Header from './components/Header'
import SearchInput from './components/SearchInput'
import EmojiResultsContainer from './components/EmojiResultsContainer'
import filterEmoji from './search/filterEmoji'


function App() {
  const [emoji, setEmoji] = useState(filterEmoji("", 25))

  const handleSearchChange = (event) => {
    setEmoji(filterEmoji(event.target.value, 25))
  }

  return (
    <div className="App">
      <Header />
      <SearchInput handleSearchChange={handleSearchChange}/>
      <EmojiResultsContainer emojiList={emoji}/>
    </div>
  )
}

export default App
