import { useEffect, useRef } from 'react';
import { useStoreContext } from '../GlobalStore';

const products = [
  {img:"https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/categories/gaming/it_cmp_gaming_motia_gaming_table.jpg"},
  {img:"https://i.gyazo.com/cc114cc01d65fa4820be8652151b61b0.png"},
  {img:"https://i.gyazo.com/97b764beb0a96af871fec590c7e217c3.png"}
]

function Carousel() {

  const [store] = useStoreContext();
  const slideContainer = useRef(null);
  const indicators = useRef(null);
  const interval = useRef(null);
  const interval2 = useRef(null);

  useEffect(() => {
    // reset on window resize
    clearInterval(interval.current);
    clearInterval(interval2.current);
    // find current highlighted indicator
    let currentSlide = 0;
    for (let i=0; i<indicators.current.children.length; i++) {
      if (indicators.current.children[i].classList.contains("active")) {
        currentSlide = i;
        break;
      }
    }
    slideContainer.current.scrollLeft = currentSlide*slideContainer.current.clientWidth;
    // create slide effect
    function slideRight() {
      // creates animation for images
      const divWidth = slideContainer.current.clientWidth;
      const fullWidth = slideContainer.current.scrollWidth - 2*divWidth;
      const currentScroll = slideContainer.current.scrollLeft;
      if (currentScroll < fullWidth) {
        // slide to the right
        const target = currentScroll + divWidth;
        interval2.current = setInterval(() => {
          if (!slideContainer.current) clearInterval(interval2.current);
          else if (slideContainer.current.scrollLeft < target) slideContainer.current.scrollLeft += 5;
          else if (slideContainer.current.scrollLeft > target) {
            slideContainer.current.scrollLeft = target;
            clearInterval(interval2.current);
          }
          else clearInterval(interval2.current);
        }, 5);
      }
      else {
        // slide to the right
        const target = currentScroll + divWidth;
        interval2.current = setInterval(() => {
          if (!slideContainer.current) clearInterval(interval2.current);
          else if (slideContainer.current.scrollLeft < target) slideContainer.current.scrollLeft += 5;
          else {
            slideContainer.current.scrollLeft = 0;
            clearInterval(interval2.current);
          }
        }, 5)
      }
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
  }, [store.winX])

  return(
    <div className="carousel">
      <div className="slide-container" ref={slideContainer}>
        {/* create slides */}
        {products.map((each,idx) => 
          <div key={idx} className="slide-item">
            <span>Product {idx+1}</span>
            <img src={each.img} alt="product" />
          </div>
        )}
        <div key={products.length+1} className="slide-item">
          <span>HIDDEN</span>
          <img src={products[0].img} alt="product" />
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