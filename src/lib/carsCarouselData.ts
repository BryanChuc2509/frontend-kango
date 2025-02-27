export type destiniesType = {
  img: string;
  name: string;
  quantity: number;
  onClick: () => void;
};

type destiniesList = destiniesType[];

export const cars: destiniesList = [
  {
    img: "https://assets.stickpng.com/thumbs/5860ef6f4fc7f3474eb80d90.png",
    name: "Vocho",
    quantity: 4,
    onClick: () => alert("Carro 1"),
  },
  {
    img: "https://assets.stickpng.com/thumbs/5860ef6f4fc7f3474eb80d90.png",
    name: "Otro vocho",
    quantity: 5,
    onClick: () => alert("Carro 2"),
  },
  {
    img: "https://assets.stickpng.com/thumbs/5860ef6f4fc7f3474eb80d90.png",
    name: "Otra vez un Vocho",
    quantity: 10,
    onClick: () => alert("Carro 3"),
  },
  {
    img: "https://assets.stickpng.com/thumbs/5860ef6f4fc7f3474eb80d90.png",
    name: "oli",
    quantity: 8,
    onClick: () => alert("Carro 4"),
  },
];
