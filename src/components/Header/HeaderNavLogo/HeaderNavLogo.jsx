import img from './messager.png'

const HeaderNavLogo = () => {
  return (
    <div style={{background:'white', minWidth: "165px", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 7}}>
      <img src={img} alt="" style={{maxHeight: 30 }} />
      <div style={{fontSize: 21, fontFamily: 'monospace', color: '#38010f'}}>messenger</div>
    </div>
  )
}

export default HeaderNavLogo;