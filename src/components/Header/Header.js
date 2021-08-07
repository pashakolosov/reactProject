import HeaderNavLogo from './HeaderNavLogo/HeaderNavLogo'
import HeaderNavSearch from './HeaderNavSearch/HeaderNavSearch'
import HeaderNavBell from './HeaderNavBell/HeaderNavBell'
import HeaderNavPlayer from './HeaderNavPlayer/HeaderNavPlayer'
import HeaderNavProfile from './HeaderNavProfile/HeaderNavProfile'

const Header = () => {
  return (
    <div className="header" style={{listStyle: 'none', height: "100%", display: 'flex', justifyContent: 'space-around'}}>
      <HeaderNavLogo />
      <HeaderNavSearch />
      <HeaderNavBell />
      <HeaderNavPlayer />
      <HeaderNavProfile />
    </div>
  )
}

export default Header;