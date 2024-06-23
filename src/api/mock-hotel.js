const cityList = [
  {
    "id": 1,
    "estado": "Paraná",
    "cidade": "Curitiba",
    "pais": "Brasil",
    "cidade_snake_case": "curitiba",
    "latitude": -25.4295963,
    "longitude": -49.2712724
  },
  {
    "id": 2,
    "estado": "Rio de Janeiro",
    "cidade": "Rio de Janeiro",
    "cidade_snake_case": "rio_de_janeiro",
    "pais": "Brasil",
    "latitude": -22.9068,
    "longitude": -43.1729
  }
];

const hotelImages = [
  '/src/assets/img/hotel-1.jpg',
  '/src/assets/img/hotel-2.jpg',
  '/src/assets/img/hotel-3.jpg',
  '/src/assets/img/hotel-4.jpg',
  '/src/assets/img/hotel-5.jpg',
  '/src/assets/img/hotel-6.jpg',
  '/src/assets/img/hotel-7.jpg',
  '/src/assets/img/hotel-8.jpg',
  '/src/assets/img/hotel-9.jpg',
  '/src/assets/img/hotel-10.jpg'
];

function generateRandomHotelName() {
  const prefixes = ["Grande", "Central", "Belvedere", "Estrela", "Palace", "Imperial", "Royal", "Mirante", "Pousada", "Praia"];
  const suffixes = ["Hotel", "Resort", "Inn", "Lodge", "Retreat", "Palace", "Suites", "Village", "Stay"];

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return `${prefix} ${suffix}`;
}

function generateRandomAddress(city) {
  const streets = ["Rua Principal", "Avenida Central", "Rua dos Girassóis", "Rua das Flores", "Avenida Beira-Mar", "Rua do Sol"];
  const randomStreet = streets[Math.floor(Math.random() * streets.length)];

  const numbers = [100, 200, 300, 400, 500];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  return `${randomStreet}, ${randomNumber}, ${city}`;
}

function generateRandomDates(count) {
  const dates = [];
  const startDate = new Date('2024-06-22');
  for (let i = 0; i < count; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dates.push(date.toISOString().slice(0, 10));
  }
  return dates;
}

function getRandomImage() {
  return hotelImages[Math.floor(Math.random() * hotelImages.length)];
}

const hoteisData = {
  "destinos": [
    {
      "id_cidade": 1,
      "cidade": "Curitiba",
      "hoteis": []
    },
    {
      "id_cidade": 2,
      "cidade": "Rio de Janeiro",
      "hoteis": []
    }
  ]
};

// Generar hoteles para Curitiba
for (let i = 0; i < 10; i++) {
  const numero_quartos = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
  const numero_maximo_hospedes = Math.floor(numero_quartos * (Math.random() * (1.5 - 1.1) + 1.1)); // Ajuste proporcional

  hoteisData.destinos[0].hoteis.push({
    "nome": generateRandomHotelName(),
    "endereco": generateRandomAddress("Curitiba"),
    "avaliacao": parseFloat((Math.random() * (4.5 - 3.5) + 3.5).toFixed(1)),
    "preco": Math.floor(Math.random() * (300 - 150 + 1)) + 150,
    "numero_quartos": numero_quartos,
    "numero_maximo_hospedes": numero_maximo_hospedes,
    "datas_disponiveis": generateRandomDates(5),
    "image": getRandomImage()
  });
}

// Generar hoteles para Rio de Janeiro
for (let i = 0; i < 10; i++) {
  const numero_quartos = Math.floor(Math.random() * (45 - 25 + 1)) + 25;
  const numero_maximo_hospedes = Math.floor(numero_quartos * (Math.random() * (1.5 - 1.1) + 1.1)); // Ajuste proporcional

  hoteisData.destinos[1].hoteis.push({
    "nome": generateRandomHotelName(),
    "endereco": generateRandomAddress("Rio de Janeiro"),
    "avaliacao": parseFloat((Math.random() * (4.5 - 3.5) + 3.5).toFixed(1)),
    "preco": Math.floor(Math.random() * (350 - 200 + 1)) + 200,
    "numero_quartos": numero_quartos,
    "numero_maximo_hospedes": numero_maximo_hospedes,
    "datas_disponiveis": generateRandomDates(5),
    "image": getRandomImage()
  });
}


export { cityList, hoteisData };
