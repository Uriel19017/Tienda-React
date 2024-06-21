export const data = [
	{
	  id: 1,
	  img: './public/Img/TN.jpg',
	  nameProduct: 'Tennis Nike',
	  price: 300,
	  quantity: 1,
	},
	{
	  id: 2,
	  img: './public/Img/RLJ.jpg',
	  nameProduct: 'Reloj',
	  price: 50,
	  quantity: 100,
	},
	{
	  id: 3,
	  img: './public/Img/SW.jpg',
	  nameProduct: 'Smartwatch',
	  price: 150,
	  quantity: 3,
	},
	{
	  id: 4,
	  img: './public/Img/PF.jpg',
	  nameProduct: 'Perfume',
	  price: 100,
	  quantity: 13,
	},
	{
	  id: 5,
	  img: './public/Img/SONY.jpg',
	  nameProduct: 'Audifonos',
	  price: 33,
	  quantity: 31,
	},
	{
		id: 6,
		img: './public/Img/pl.jpg',
		nameProduct: 'Playera',
		price: 18,
		quantity: 1,
	  },
	  {
		id: 7,
		img: './public/Img/BL.jpg',
		nameProduct: 'Blusa',
		price: 15,
		quantity: 1,
	  },
	  {
		id: 8,
		img: './public/Img/MOUSE.jpg',
		nameProduct: 'Mouse',
		price: 120,
		quantity: 1,
	  },
	  {
		id: 9,
		img: './public/Img/MNr.jpg',
		nameProduct: 'Monitor',
		price: 200,
		quantity: 1,
	  },
	  {
		id: 10,
		img: './public/Img/BOTAS.jpg',
		nameProduct: 'Botas',
		price: 25,
		quantity: 1,
		genero: matchMedia,
	  },
	  {
		id: 1,
		img: './public/Img/MNr.jpg',
		nameProduct: 'Monitor',
		price: 250,
		quantity: 1,
	  },



  ];
  
  // Ordenar productos de mayor a menor precio
  data.sort((a, b) => b.price - a.price);
  
  console.log(data);
  