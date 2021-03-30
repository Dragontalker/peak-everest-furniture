import { useEffect, useRef } from 'react';

const products = [
  {img:"https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/categories/gaming/it_cmp_gaming_motia_gaming_table.jpg"},
  {img:"https://i.gyazo.com/cc114cc01d65fa4820be8652151b61b0.png"},
  {img:"https://i.gyazo.com/97b764beb0a96af871fec590c7e217c3.png"}
]

function Carousel() {

  const slideContainer = useRef(null);
  const indicators = useRef(null);
  const interval = useRef(null);

  useEffect(() => {
    // create slide effect
    function slideRight() {
      // creates animation for images
      // ...
      // creates animation for buttons
      for (let i=0; i<indicators.current.children.length; i++) {
        let thisBtn = indicators.current.children[i];
        if (thisBtn.classList.contains("active") && i<indicators.current.children.length-1) {
          thisBtn.classList.remove("active");
          indicators.current.children[i+1].classList.add("active");
          break;
        }
        else if (thisBtn.classList.contains("active")) {
          thisBtn.classList.remove("active");
          indicators.current.children[0].classList.add("active");
          break;
        }
      }
    }
    // create interval to slide
    if (slideContainer) interval.current = setInterval(slideRight, 3000);
    // clear interval when component user navigates to a different page
    return () => {
      clearInterval(interval.current);
    }
  }, [])

  return(
    <div className="carousel">
      <div className="slide-container" ref={slideContainer}>
        {/* create slides */}
        {products.map((each,idx) => 
          <div key={idx} className="slide-item">
            <img src={each.img} alt="product" />
          </div>
        )}
        <div className="slide-item">
          <img src={products[0].img} alt="product" />
        </div>
        <div className="slide-item">
          <img src={products[1].img} alt="product" />
        </div>
        <div className="slide-item">
          <img src={products[2].img} alt="product" />
        </div>
      </div>
      <div className="carousel-indicators" ref={indicators}>
        {/* create indicators */}
        {products.map((each, idx) => {
          if (idx) return <button key={idx}></button>
          else return <button key={idx} className="active"></button>
        })}
      </div>
    </div>
  )
}

export default Carousel;