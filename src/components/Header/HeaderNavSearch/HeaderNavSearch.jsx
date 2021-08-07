import s from './HeaderNavSearch.module.css'

const HeaderNavSearch = () => {
  return (
    <div style={{ minWidth: "245px", display: 'flex', alignItems: 'center'}}>
      <div className={s.search}>
        <div className={s.icon}></div>
        <div className={s.input}>
          <input placeholder="Search" id="mySearch" />
        </div>
      </div> 
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector(`.${s.search}`)
  const icon = document.querySelector(`.${s.icon}`)
  icon.onclick = () => {
    search.classList.toggle(s.active)
}})


export default HeaderNavSearch;