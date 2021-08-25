import s from './Post.module.css'
import Comment from './Comment.jsx'
import {useState} from 'react'

const Post = (props) => {
  const [like, setLike] = useState(props.post.postFeedback.like)
  const [comment, setComment] = useState(props.post.postFeedback.comments)

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.post}>
          <div className={s.postHeader}>
            <div className={s.postHeaderInfo}>
              <div>
                <img className={s.authorImage} src={props.post.postHeader.ava}/>
              </div>
              <div className={s.authorInfo}>
                <div className={s.authorTitle}>{props.post.postHeader.name}</div>
                <div className={s.authorDate}>{props.post.postHeader.date}</div>
              </div>
            </div>
          </div>
          <div className={s.postContent}>
            <div className={s.contentText}>{props.post.postContent.text}</div>
            <div className={s.contentImage}>
              <img className={s.image} src={props.post.postContent.image} />
            </div>
          </div>
          <div className={s.postFeedback}>
            <div className={s.button}>
              <button className={s.btn} onClick={() => setLike(like + 1)}>
                <ion-icon name="heart-outline" className={s.like}></ion-icon>
                <div>Нравиться {like}</div>
              </button>
              <button className={s.btn}>
                <ion-icon name="chatbox-outline"></ion-icon>
                <div>{props.post.postFeedback.comments.length}</div>
              </button>
              <button className={s.btn}>
                <ion-icon name="arrow-redo-outline"></ion-icon>
                <div>{props.post.postFeedback.repost}</div>
              </button>
            </div>
            <div className={s.views}>
              <ion-icon name="eye-outline" style={{fontSize: '24px'}}></ion-icon>
              <span>{props.post.postFeedback.views}</span>
            </div>
          </div>
          <hr className={s.hr} />
          {comment.map(comment => <Comment comment={comment}/>)}
        </div>
      </div>
    </div>
    
  )
}

export default Post;