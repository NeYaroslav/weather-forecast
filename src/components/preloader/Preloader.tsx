import React, { memo} from 'react'
import classes from './preloader.module.scss'

export const Preloader: React.FC = () => {
  return (
    <div className={classes['preloader']}>
      <span className={classes['preloader__spiner']}></span>
    </div>
  )
}

export const PreloaderMemo = memo(Preloader)