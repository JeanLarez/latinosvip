// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
// import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const Carousel = () => {
  const slides = [
    {
      url: "src/assets/imgs/1.jpg",
    },
    {
      url: "src/assets/imgs/8.jpg",
    },
    {
      url: "src/assets/imgs/10.jpg",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Añadir el efecto de desvanecimiento
  };

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };

  return (
    
    <div className="relative h-[670px] w-full">
      {/* Texto estático en el centro */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-wide md:text-6xl">
          BIENVENIDOS
        </h1>
        <p className="my-4 text-lg md:text-2xl">
          El lugar ideal para disfrutar el sabor latino
        </p>
        <a
          href=""
          className="mt-4 inline-block border-4 border-white px-8 py-2 text-lg font-bold hover:shadow-[inset_0_0_0_4px_rgba(255,255,255,1)]"
        >
          RESERVAR UNA MESA
        </a>
      </div>

      {/* Slider de imágenes de fondo */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${slide.url})`,
              }}
              className="h-[670px] w-full bg-cover bg-center"
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
