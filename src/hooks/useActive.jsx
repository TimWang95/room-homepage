import { useState } from 'react'

const useActive = () => {
  const [active, setActive] = useState(false)
  const handleToggle = () => {
    setActive(!active)
  }

  return {
    active,
    handleToggle
  }
}

export default useActive