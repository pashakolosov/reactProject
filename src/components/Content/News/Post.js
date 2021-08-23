import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.post}>
          <div className={s.postHeader}>
            <div className={s.postHeaderInfo}>
              <div className={s.authorImage}>
                <img src={props.img}/>
              </div>
              <div className={s.authorInfo}>
                <div className={s.authorTitle}>{props.title}</div>
                <div className={s.authorDate}>{props.date}</div>
              </div>
            </div>
          </div>
          <div className={s.postContent}>
            <div className={s.contentText}>{props.text}</div>
            <div className={s.contentImage}>
              <img className={s.image} src={props.postImage} />
            </div>
          </div>
          <div className="postFeedback"></div>
        </div>
      </div>
    </div>
    
  )
}

export default Post;