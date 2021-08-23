import s from './HeaderNavPlayer.module.css'

const HeaderNavPlayer = () => {
  let song = 'i belive i can fly'
 
  return (
    <div className={s.playerContent}>
      <div className={s.player}>
        <div  className={s.icon}>
          <ion-icon name="play-back-outline"></ion-icon>
        </div>
        <div  className={s.icon}>
          <ion-icon name="play-outline"></ion-icon>
        </div>
        <div  className={s.icon}>
          <ion-icon name="play-forward-outline"></ion-icon>
        </div>
      </div>
      <p className={s.songTitle}>
        {song}
      </p>
    </div>
  )
}

export default HeaderNavPlayer;