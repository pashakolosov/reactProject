import Post from './Post'
import { useState } from 'react'

const News = () => {

  const [posts, setPosts] = useState([
    {
      id: '3df2323kj4hk32jjk2754jkh34jk6517vhg57',
      postHeader: {
        ava: 'https://sun1.beltelecom-by-minsk.userapi.com/impf/c831309/v831309010/1723ee/0NBy-lypKYY.jpg?size=1200x1200&quality=96&sign=26399360bdeb2aebdf6463d244b058a1&type=album',
        name: 'reddit',
        date: '24.02.2000'
      },
      postContent: {
        text: 'I am searching English practising partner, if you are searching too, please message me ) My level is intermediate.',
        image: 'https://sun2.beltelecom-by-minsk.userapi.com/impg/8J7PfAjIDfeHxNnpTdZOeCB0jC_XUz8Yt9iXiw/RLzwFjTXnSQ.jpg?size=978x620&quality=96&sign=eaaa308b8d2c46626c3605dbfb0db545&type=album'
      },
      postFeedback: {
        views: 234324,
        like: 91,
        repost: 12,
        comments: [
          {
            person: 'mike',
            photo: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/2HSaukpPG4ifZHa4UWVJ4Hb33ABHk0E90u_d_dtJiLN4SceUs5edxTfAbnCxlYiRcy-fTplvAqqhswus98zj1sos.jpg?size=200x200&quality=96&crop=1,335,995,995&ava=1',
            text: 'comment test text'
          }
        ]
      }
    },
    {
      id: '3df2323kj4hk32jjk2754jte34jk6517vhg57',
      postHeader: {
        ava: 'https://lastfm.freetls.fastly.net/i/u/770x0/140ab88fbc27abfda6001d33718a52db.jpg',
        name: 'MDK',
        date: '04.02.2020'
      },
      postContent: {
        text: 'Чeтырe cтaдии кaрaнтинa. Bы ceйчac нa кaкoй?',
        image: 'https://sun1.beltelecom-by-minsk.userapi.com/impg/lQvVqmMbZklnKqbwjvqswHV8uCQ-vbbre45aeQ/ew6eiScNyRo.jpg?size=700x691&quality=96&sign=ae65ce6587914d06a57f846d86aa7da6&type=album'
      },
      postFeedback: {
        views: 2232324,
        like: 3291,
        repost: 123,
        comments: [
          {
            person: 'mike',
            photo: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/2HSaukpPG4ifZHa4UWVJ4Hb33ABHk0E90u_d_dtJiLN4SceUs5edxTfAbnCxlYiRcy-fTplvAqqhswus98zj1sos.jpg?size=200x200&quality=96&crop=1,335,995,995&ava=1',
            text: 'comment test text'
          },
          {
            person: 'nick',
            photo: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/xT7LWRSSADtj4mocLraShpZ14RRly8bcmr7OKHJASEqPBhXzn6eEdhH6LO26sb3rk52wufj_dTFJJE_fIqRvct9O.jpg?size=200x244&quality=95&crop=179,0,736,898&ava=1',
            text: 'comment test text'
          },
          {
            person: 'masha',
            photo: 'https://i.ytimg.com/vi/05SiSThZ4XY/maxresdefault.jpg',
            text: 'comment test text'
          }
        ]
      }
    }
  ])

  return (
    <div style={{background:"purpure"}}>
      {posts.map((post) => <Post post={post} key={post.id}/> )}
    </div>
  )
}

export default News;