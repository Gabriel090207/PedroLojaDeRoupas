import './Header.css'

import { useEffect, useState } from 'react'

import {
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiChevronDown,
  FiMenu,
  FiX,
} from 'react-icons/fi'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenu, setMobileMenu] = useState(false)
const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`header ${scrolled || activeMenu || mobileMenu ? 'scrolled' : ''}`}
    >
      <div className="header-container">
        <div className="header-mobile-left">
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenu(true)}
          >
            <FiMenu />
          </button>

          <button className="mobile-search-button">
            <FiSearch />
          </button>
        </div>

        <div className="header-logo">
          <h1>LOGO</h1>
        </div>

        <nav className="header-nav">
          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu('masculino')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="nav-link">
              <a href="/">Masculino</a>

              <FiChevronDown />
            </div>

            <div
              className={`dropdown ${
                activeMenu === 'masculino' ? 'active' : ''
              }`}
            >
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h4>Camisetas</h4>

                  <a href="/">Oversized</a>
                  <a href="/">Regular</a>
                  <a href="/">Slim Fit</a>
                  <a href="/">Essentials</a>
                </div>

                <div className="dropdown-column">
                  <h4>Shorts</h4>

                  <a href="/">Linho</a>
                  <a href="/">Swimshorts</a>
                  <a href="/">Moletom</a>
                </div>

                <div className="dropdown-column">
                  <h4>Calças</h4>

                  <a href="/">Cargo</a>
                  <a href="/">Wide Leg</a>
                  <a href="/">Minimal</a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu('feminino')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="nav-link">
              <a href="/">Feminino</a>

              <FiChevronDown />
            </div>

            <div
              className={`dropdown ${
                activeMenu === 'feminino' ? 'active' : ''
              }`}
            >
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h4>Roupas</h4>

                  <a href="/">Summer</a>
                  <a href="/">Lounge</a>
                  <a href="/">Minimal</a>
                  <a href="/">Streetwear</a>
                </div>

                <div className="dropdown-column">
                  <h4>Destaques</h4>

                  <a href="/">Beachwear</a>
                  <a href="/">Linho</a>
                  <a href="/">Essentials</a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu('colecoes')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="nav-link">
              <a href="/">Coleções</a>

              <FiChevronDown />
            </div>

            <div
              className={`dropdown ${
                activeMenu === 'colecoes' ? 'active' : ''
              }`}
            >
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h4>Editorial</h4>

                  <a href="/">Summer 26</a>
                  <a href="/">New Drop</a>
                  <a href="/">Urban Line</a>
                  <a href="/">Minimal Club</a>
                </div>

                <div className="dropdown-column">
                  <h4>Trending</h4>

                  <a href="/">Best Sellers</a>
                  <a href="/">New Arrivals</a>
                  <a href="/">Premium Basics</a>
                </div>
              </div>
            </div>
          </div>

          <a href="/" className="simple-link">
            Novidades
          </a>

          <a href="/" className="simple-link">
            Contato
          </a>
        </nav>

        <div className="header-actions">
          <button className="desktop-search">
            <FiSearch />
          </button>

          <button>
            <FiUser />
          </button>

          <button>
            <FiShoppingBag />
          </button>
        </div>
      </div>

      <div className={`mobile-sidebar ${mobileMenu ? 'active' : ''}`}>
        <div className="mobile-sidebar-header">
          <h2>Menu</h2>

          <button onClick={() => setMobileMenu(false)}>
            <FiX />
          </button>
        </div>

       <div className="mobile-sidebar-links">
  <div className="mobile-accordion">
    <button
      className="mobile-dropdown-item"
      onClick={() =>
        setOpenMobileMenu(
          openMobileMenu === 'masculino' ? null : 'masculino'
        )
      }
    >
      <span>Masculino</span>

      <FiChevronDown
        className={
          openMobileMenu === 'masculino' ? 'rotate' : ''
        }
      />
    </button>

    <div
      className={`mobile-dropdown-content ${
        openMobileMenu === 'masculino' ? 'active' : ''
      }`}
    >
      <a href="/">Oversized</a>
      <a href="/">Regular</a>
      <a href="/">Slim Fit</a>
      <a href="/">Essentials</a>
    </div>
  </div>

  <div className="mobile-accordion">
    <button
      className="mobile-dropdown-item"
      onClick={() =>
        setOpenMobileMenu(
          openMobileMenu === 'feminino' ? null : 'feminino'
        )
      }
    >
      <span>Feminino</span>

      <FiChevronDown
        className={
          openMobileMenu === 'feminino' ? 'rotate' : ''
        }
      />
    </button>

    <div
      className={`mobile-dropdown-content ${
        openMobileMenu === 'feminino' ? 'active' : ''
      }`}
    >
      <a href="/">Summer</a>
      <a href="/">Minimal</a>
      <a href="/">Beachwear</a>
      <a href="/">Streetwear</a>
    </div>
  </div>

  <div className="mobile-accordion">
    <button
      className="mobile-dropdown-item"
      onClick={() =>
        setOpenMobileMenu(
          openMobileMenu === 'colecoes' ? null : 'colecoes'
        )
      }
    >
      <span>Coleções</span>

      <FiChevronDown
        className={
          openMobileMenu === 'colecoes' ? 'rotate' : ''
        }
      />
    </button>

    <div
      className={`mobile-dropdown-content ${
        openMobileMenu === 'colecoes' ? 'active' : ''
      }`}
    >
      <a href="/">Summer 26</a>
      <a href="/">Urban Line</a>
      <a href="/">Best Sellers</a>
    </div>
  </div>

  <a href="/">Novidades</a>

  <a href="/">Contato</a>
</div>
      </div>

      <div
        className={`mobile-overlay ${mobileMenu ? 'active' : ''}`}
        onClick={() => setMobileMenu(false)}
      />
    </header>
  )
}