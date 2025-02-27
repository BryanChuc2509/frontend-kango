export type destiniesType = {
  img: string;
  title: string;
  description: string;
  tours: number;
};

type destiniesList = destiniesType[];

export const destinies: destiniesList = [
  {
    img: "https://media.istockphoto.com/id/583809524/es/foto/desierto-de-alberta-cerca-de-banff.jpg?s=612x612&w=0&k=20&c=mvDownbgLZRz1Wci6yV68NRRngqWNrl_lRF6QtrdJkw=",
    title: "Destino 1",
    description:
      "Una imagen de Stock sacada de Google para visitar, visita este sitio turistico ya no se q mas escribir",
    tours: 4,
  },
  {
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88ecb9ac-5d37-4bfa-ae57-0f41196c5eb4/d88wbal-45864a66-700b-4045-8c94-ac8d355e979d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjIwIiwicGF0aCI6IlwvZlwvODhlY2I5YWMtNWQzNy00YmZhLWFlNTctMGY0MTE5NmM1ZWI0XC9kODh3YmFsLTQ1ODY0YTY2LTcwMGItNDA0NS04Yzk0LWFjOGQzNTVlOTc5ZC5qcGciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WNXSWWVxWe6awReMWlbN2xVDkg_BqhXM_QKnvNnsomk",
    title: "Destino 2",
    description: "Texto de prueba",
    tours: 4,
  },
  {
    img: "https://i.pinimg.com/originals/92/2b/ce/922bcecf57a44a03f3e9178d561a340a.jpg",
    title: "Destino 3",
    description: "Texto de prueba",
    tours: 4,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6E6v5QhdVdAAPeJLLva8CtIAc7ms-DM_u1--6jAGDkzn5IgQ&s",
    title: "Destino 4",
    description: "Texto de prueba",
    tours: 4,
  },
];
