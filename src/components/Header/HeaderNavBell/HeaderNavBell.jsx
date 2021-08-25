import './HeaderNavBell.css'

const HeaderNavBell = () => {
  return (
    <div style={{padding: "5px"}}>
      <button className="iconButton" type="button" style={{position: "relative", display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px', border: 'none', outline: 'none', color: '#333333', background: 'dddddd', borderRadius: '50%'}}>
        <span className="bell"><ion-icon name="notifications-outline"></ion-icon></span>
        <span style={{position: 'absolute', top: '-5px', right: '-5px', color: '#fff', background: '#d40404', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>12</span>
      </button>
    </div>
  )
}

export default HeaderNavBell;