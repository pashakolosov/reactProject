const Post = (props) => {
  return (
    <div className="wrapper">
      <div className="postHeader">
        <div className="postHeaderInfo">
          <div className="authorImage">
            <img src={props.img}/>
          </div>
          <div className="authorInfo">
            <div className="authorTitle">{props.title}</div>
            <div className="authorDate">{props.date}</div>
          </div>
        </div>
      </div>
      <div className="postContent"></div>
      <div className="postFeedback"></div>
    </div>
  )
}

export default Post;