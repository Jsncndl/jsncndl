import { createContext, useEffect, useState } from 'react'

const defaultValue = {
  currentPath: '',
  setCurrentPath: (path: string) => {},
  openMenu: false,
  setOpenMenu: () => {},
}

export const NavContext = createContext(defaultValue)

export const NavProvider = (props: any) => {
  const [currentPath, setCurrentPath] = useState('home')
  const [openMenu, setOpenMenu] = useState(false)
  const [firstLoad, setFirstLoad] = useState(true)

  useEffect(() => {
    if (firstLoad) {
      setCurrentPath(currentPath)
      setFirstLoad(false)
    }
  })

  const toggleCurrentPath = (path: string) => {
    /* const pathName = path.slice(0, path.search('-'))
    setCurrentPath(pathName) */
    setCurrentPath(path)
  }

  const toggleOpenMenu = () => {
    if (openMenu) {
      setOpenMenu(false)
      document.getElementById('header')?.classList.add('activeNavlist')
      document.getElementById('header')?.classList.remove('hiddenNavlist')
    } else {
      setOpenMenu(true)
      document.getElementById('header')?.classList.add('hiddenNavlist')
      document.getElementById('header')?.classList.remove('activeNavlist')
    }
  }

  const contextValue = {
    currentPath: currentPath,
    setCurrentPath: toggleCurrentPath,
    openMenu: openMenu,
    setOpenMenu: toggleOpenMenu,
  }

  return <NavContext.Provider value={contextValue}>{props.children}</NavContext.Provider>
}
