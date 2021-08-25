import s from './Comment.module.css'

const Comment = (props) => {
  console.log(props)
  return (
    <div className={s.comment}>
        <div className={s.ava}>
          <img src={props.photo} />
        </div>
        <div className={s.info}>
          <div className={s.person}></div>
          <div className={s.text}></div>
        </div>
    </div>
  )
}

export default Comment;