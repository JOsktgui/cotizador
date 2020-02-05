import React from 'react';
import Slider from 'react-slick';
import './styles.scss';

const CarouselPlans = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      /*{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true
        }
      },
*/
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='carousel-plans'>
      <Slider {...settings}>
        <div className='carousel-plans__item'>
          <h3>1</h3>
        </div>
        <div className='carousel-plans__item'>
          <h3>2</h3>
        </div>
        <div className='carousel-plans__item'>
          <h3>3</h3>
        </div>
        <div className='carousel-plans__item'>
          <h3>4</h3>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselPlans;
