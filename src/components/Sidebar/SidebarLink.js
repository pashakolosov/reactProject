import s from './SidebarLink.module.css'
import sl from './Sidebar.module.css'

const Sidebar_link = (props) => {  
  return (
      <div>
        <a href="f#" className={`${s.list} ${ props.styleName }`} >
          <span className={s.icon}>
            <ion-icon name={props.icon}></ion-icon>
          </span>
          <span className={s.title}>{props.title}</span>
        </a>
      </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  let list = document.querySelectorAll(`.${s.list}`)

  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    element.onclick = () => {
      let j = 0;
      while (j < list.length) {
        list[j++].className = `${s.list}`
      }
      list[i].className = `${s.list} ${sl.active}`
    } 
  }
})


export default Sidebar_link;