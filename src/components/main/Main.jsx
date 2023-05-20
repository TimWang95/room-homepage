import { ReactComponent as ArrowBack} from 'src/assets/icons/icon-angle-left.svg'
import { ReactComponent as ArrowNext} from 'src/assets/icons/icon-angle-right.svg'
import ArrowSHop from 'src/assets/icons/icon-arrow.svg' 
// hooks
import useWidthSize from "src/hooks/useWidthSize"
import useDinamicCard from 'src/hooks/useDinamicCard'
// section-2 img
import imgLeft from 'src/assets/images/image-about-dark.jpg'
import imgRight from 'src/assets/images/image-about-light.jpg'

function Content({ title, description }) {
  return (
    <>
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="#home">
          <p>Shop Now</p>
          <img src={ArrowSHop} alt="arrowSHop" className='arrowSHop'/>
        </a>
      </div>
    </>
  )
}

export default function Main() {
  const { width } = useWidthSize()
  const { dinamicIndex, nextProduct, previousProduct, dinamicProducts} = useDinamicCard()

  return (
    <>
      <main className="main">
        <section className="section-1">
          <div className="img-carrousel">
            {width < 1024 && (
              <div>
                <img src={dinamicProducts[dinamicIndex].imgMobile} alt="dinamicProducts" className="img" />
                <div className="btn">
                  <button onClick={() => previousProduct()}>
                    <ArrowBack/>
                  </button>
                  <button onClick={() => nextProduct()}>
                    <ArrowNext/>
                  </button>
                </div>
              </div>
            )}
            {width >= 1024 && (
              <img src={dinamicProducts[dinamicIndex].img} alt="dinamicProducts" className="img" />
            )}
          </div>
          <div className='main-content'>
            <Content
              title={dinamicProducts[dinamicIndex].title}
              description={dinamicProducts[dinamicIndex].description}
            />
            {width >= 1024 && (
              <div className="btn">
                <button onClick={() => previousProduct()}>
                  <ArrowBack/>
                </button>
                <button onClick={() => nextProduct()}>
                  <ArrowNext/>
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="section-2">
          <div className="imgLeft-container">
            <img src={imgLeft} alt="imgLeft" />
          </div>
          <div className="content">
            <h3>ABOUT OUR FURNITURE</h3>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <div className="imgRight-container">
            <img src={imgRight} alt="imgRight" />
          </div>
        </section>
      </main>
    </>
  )
}