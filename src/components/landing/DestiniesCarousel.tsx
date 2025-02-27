import Item from "./DestinyCarousel";
import Slider from "react-slick";

type ItemType = {
  img: string;
  title: string;
  description: string;
  tours: number;
};

type ItemList = ItemType[];

export default function DestiniesCarousel({
  destinies,
}: {
  destinies: ItemList;
}) {
  const settings = {
    dots: true,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {destinies.map((destiny, index) => (
          <div className="!flex items-center justify-center">
            <Item
              key={index}
              img={destiny.img}
              title={destiny.title}
              description={destiny.description}
              tours={destiny.tours}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
