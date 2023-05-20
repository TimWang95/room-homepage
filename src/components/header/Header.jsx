import { ReactComponent as Logo } from 'src/assets/icons/logo.svg'
import { ReactComponent as Hamburger } from 'src/assets/icons/icon-hamburger.svg'
import { ReactComponent as ToggleClose } from 'src/assets/icons/icon-close.svg'
import useWidthSize from 'src/hooks/useWidthSize'
import useActive from 'src/hooks/useActive'

function NavbarMenu() {
  return (
    <>
      <nav className="navbar-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="https://github.com/TimWang95" className="nav-link">home</a>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="https://github.com/TimWang95" className="nav-link">shop</a>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="https://github.com/TimWang95" className="nav-link">about</a>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="https://github.com/TimWang95" className="nav-link">contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default function Header() {
  const { width } = useWidthSize()
  const { active, handleToggle } = useActive()

  return (
    <>
      <header className="header">
        {width < 1024 ? (
          <div className={active ? "navigate-mobile" : "navigate-mobile bg-none"}>

            {/* Navbar-toggle */}
            <button className="burger-container cursor-pointer" onClick={handleToggle}>
              {active ? (
                <ToggleClose className='menu-toggle-close'/>
              ) : (
                <Hamburger className='menu-toggle'/>
              )}    
            </button>
            
            {/* menu or logo */}
            {active ? (
              <>
                <NavbarMenu/>    
                {/* <div className="mask"></div>    */}
              </>
            ) : (
              <div className="logo-container">
                <Logo className='logo'/>
              </div>
            )}

          </div>
        ) : (
          <div className='navigate-desktop'>
            <div className="logo-container">
              <Logo className='logo'/>
            </div>
            <NavbarMenu/>
          </div>
        )}
      </header>
    </>
  )
}