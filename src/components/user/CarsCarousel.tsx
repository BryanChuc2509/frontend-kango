import Item from "./CarCarousel";
import Slider from "react-slick";

type ItemType = {
  img: string;
  name: string;
  quantity: number;
  onClick: () => void;
};

type ItemList = ItemType[];

export default function CarsCarousel({ cars }: { cars: ItemList }) {
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
        {cars.map((destiny, index) => (
          <div className="!flex items-center justify-center">
            <Item
              key={index}
              img={destiny.img}
              name={destiny.name}
              quantity={destiny.quantity}
              onClick={destiny.onClick}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
