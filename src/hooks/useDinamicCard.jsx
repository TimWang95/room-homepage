import { dinamicProducts } from 'src/data/data'
import { useState } from 'react'

const useDinamicCard = () => {
  const [dinamicIndex, setDinamicInde] = useState(0)

  const nextProduct = () => {
    if (dinamicIndex === dinamicProducts.length - 1) return 
    
    setDinamicInde(dinamicIndex + 1)
  }

  const previousProduct = () => {
    if (dinamicIndex === 0) return 

    setDinamicInde(dinamicIndex - 1)
  }

  return {
    dinamicIndex, 
    nextProduct,
    previousProduct,
    dinamicProducts
  }
}

export default useDinamicCard