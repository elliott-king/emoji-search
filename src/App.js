import {useState} from 'react'
import logo from './logo.svg'

import Header from './components/Header'
import SearchInput from './components/SearchInput'
import EmojiResultsContainer from './components/EmojiResultsContainer'
import filterEmoji from './search/filterEmoji'


function App() {
  const [emoji, setEmoji] = useState(filterEmoji("", 25))
  // TODO: note that setEmoji is not used

  return (
    <div className="App">
      <Header />
      <SearchInput />
      <EmojiResultsContainer emojiList={emoji}/>
    </div>
  )
}

export default App
