import React from 'react'
import Community from './Community/Community'
import Friends from './Friends/Friends'
import Games from './Games/Games'
import Home from './Home/Home'
import Messages from './Messages/Messages'
import Music from './Music/Music'
import News from './News/News'
import Photo from './Photo/Photo'
import PublicWall from './PublicWall/PublicWall'
import Question from './Question/Question'
import ToDo from './ToDo/ToDo'
import Video from './Video/Video'

const Content = () => {
  let page = 'news'

  switch (page) {
    case 'community':
      return <Community />
    case 'friends': 
      return <Friends />
    case 'games': 
      return <Games />
    case 'messages': 
      return <Messages />
    case 'music': 
      return <Music />
    case 'news': 
      return <News />
    case 'photo': 
      return <Photo />
    case 'publickwall': 
      return <PublicWall />
    case 'question': 
      return <Question />
    case 'todo': 
      return <ToDo />
    case 'video': 
      return <Video />
    default: 
      return <Home />
  }
}

export default Content;