import { defineStore } from 'pinia';
import { cityList, hoteisData } from '../api/mock-hotel';

interface SearchCriteria {
  destination: string;
  checkIn: string;
  checkOut: string;
  rooms: number;
  guests: number;
}

interface HotelData {
  nome: string;
  endereco: string;
  avaliacao: number;
  preco: number;
  numero_quartos: number;
  numero_maximo_hospedes: number;
  datas_disponiveis: string[];
}

interface Destino {
  id_cidade: number;
  cidade: string;
  hoteis: HotelData[];
}

interface City {
  id: number;
  estado: string;
  cidade: string;
  pais: string;
  cidade_snake_case: string;
  latitude: number;
  longitude: number;
}

export const useSearchStore = defineStore('search', {
  state: (): {
    availableCities: City[];
    criteria: SearchCriteria;
    results: Destino[];
  } => ({
    availableCities: cityList,
    criteria: {} as SearchCriteria,
    results: [],
  }),
  actions: {
    setAvalableCities(listCity: City[]) {
      this.availableCities = listCity;
    },
    setSearchCriteria(criteria: SearchCriteria) {
      this.criteria = criteria;
    },
    setResults(results: Destino[]) {
      this.results = results;
    },
    async fetchHotels() {
      let filteredResults = hoteisData.destinos;

      // Filtrar por destino
      if (this.criteria.destination) {
        filteredResults = this.filterByDestination(filteredResults, this.criteria.destination);
      }

      // Filtrar por fechas
      if (this.criteria.checkIn && this.criteria.checkOut) {
        const checkIn = new Date(this.criteria.checkIn);
        const checkOut = new Date(this.criteria.checkOut);
        filteredResults = this.filterByDates(filteredResults, checkIn, checkOut);
      }

      // Filtrar por habitaciones y huéspedes
      if (this.criteria.rooms && this.criteria.guests) {
        filteredResults = this.filterByRoomsAndGuests(filteredResults, this.criteria.rooms, this.criteria.guests);
      }

      this.setResults(filteredResults);
    },
    filterByDestination(data: Destino[], destination: string): Destino[] {
      const lowerDestination = destination.toLowerCase();
      return data.filter(destino => destino.cidade.toLowerCase() === lowerDestination);
    },
    filterByDates(data: Destino[], checkIn: Date, checkOut: Date): Destino[] {
      return data.map(destino => {
        const filteredHotels = destino.hoteis.filter(hotel => {
          const availableDates = hotel.datas_disponiveis.map(date => new Date(date));
          return availableDates.some(date => date >= checkIn && date <= checkOut);
        });
        return { ...destino, hoteis: filteredHotels };
      }).filter(destino => destino.hoteis.length > 0);
    },
    filterByRoomsAndGuests(data: Destino[], rooms: number, guests: number): Destino[] {
      return data.map(destino => {
        const filteredHotels = destino.hoteis.filter(hotel => {
          const canAccommodateRooms = hotel.numero_quartos >= rooms;
          const canAccommodateGuests = hotel.numero_maximo_hospedes >= guests;
          return canAccommodateRooms && canAccommodateGuests;
        });
        return { ...destino, hoteis: filteredHotels };
      }).filter(destino => destino.hoteis.length > 0);
    }
  },
});
