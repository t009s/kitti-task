import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FeaturedCharities from './featuredCharities.json'
import FeaturedCharity from './FeaturedCharity';

const App = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      partialVisibilityGutter: 50
    },
    phoneTab: {
      breakpoint: { max: 800, min: 500 },
      items: 2,
      partialVisibilityGutter: 60
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      partialVisibilityGutter: 100
    }
  }
  return (
    <div className='my-5 mx-xl-5 mx-l-5 mx-md-5 mx-sm-4 mx-3'>
      <div className='py-5 px-xl-5 mt-5 px-l-5 px-md-5 px-sm-4 px-3'>
        <div className='mt-5'>
          <span className='header'>SMALL DONATIONS.</span>
        </div>
        <div className=''>
          <span className='header'>BIG IMPACT.</span>
        </div>

        <div className='mt-5 pt-5 h-auto position-relative'>
          <Carousel
            additionalTransfrom={0}
            partialVisible
            responsive={responsive}
            arrows={false}
            autoPlaySpeed={60000}
            centerMode={false}
            className="h-100"
            customButtonGroup={<CustomButtonGroupAsArrows />}
            draggable
            infinite={false}
            minimumTouchDrag={80}
            renderButtonGroupOutside
            showDots={false}
            slidesToSlide={1}
            swipeable
          >
            {FeaturedCharities.map((charity, i) => {
              return (
                <FeaturedCharity key={i} charity={charity} />
              )
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

const CustomButtonGroupAsArrows = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems, slidesToShow }
  } = rest;

  return (
    <div className='d-flex justify-content-between position-absolute w-100' style={{ top: '0px' }}>
      <span className='fs-5 fw-bold fontManrope' style={{ color: '#cc4699' }}>Featured Charities</span>
      <div>
        <span disabled={currentSlide === 0} onClick={() => previous()}>
          <i
            className="bi bi-arrow-left fs-5 cursorPointer"
            style={{ color: currentSlide === 0 ? '#eeeef0' : '#14a357' }}
          ></i>
        </span>
        <span> </span>
        <span disabled={currentSlide === totalItems - slidesToShow} onClick={() => next()}>
          <i
            className="bi bi-arrow-right fs-5 cursorPointer"
            style={{ color: currentSlide === totalItems - slidesToShow ? '#eeeef0' : '#14a357' }}
          ></i>
        </span>
      </div>
    </div>
  );
};

export default App;
