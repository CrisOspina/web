import React from 'react'
import Popup from 'reactjs-popup'
import BurgerIcon from './BurgerIcon'
import Menu from './Menu'
import './index.css'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  marginTop: '40px'
}

const backgroundDark = {
  backgroundColor: '#212121'
}
const contentStyle = {
  background: 'rgba(255,255,255,0)',
  width: '80%',
  border: 'none',
  color: '#fff',
  borderLeft: '1px solid #444',
  borderRight: '1px solid #444'
}

const BurgerMenu = () => {
  return (
    <div style={styles}>
      <Popup
        modal
        overlayStyle={backgroundDark}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={open => <BurgerIcon open={open} />}
      >
        {close => <Menu close={close} />}
      </Popup>
    </div>
  )
}

export default BurgerMenu
