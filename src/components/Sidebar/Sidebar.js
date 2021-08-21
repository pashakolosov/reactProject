import SidebarLink from "./SidebarLink"
import s from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className={s.nav}>
        <ul className={s.list}>
          <SidebarLink title="news" icon="newspaper-outline" styleName={s.active} />
          <SidebarLink title="home" icon="home-outline" />
          <SidebarLink title="message" icon="chatbox-outline" />
          <SidebarLink title="friend" icon="people-outline" />
          <SidebarLink title="community" icon="chatbubbles-outline" />
          <SidebarLink title="photos" icon="images-outline" />
          <SidebarLink title="music" icon="musical-notes-outline" />
          <SidebarLink title="video" icon="videocam-outline" />
          <SidebarLink title="games" icon="game-controller-outline" />
          <SidebarLink title="todo" icon="document-text-outline" />
          <SidebarLink title="public wall" icon="brush-outline" />
          <SidebarLink title="question" icon="help-outline" />
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;