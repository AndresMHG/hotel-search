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
  state: string;
  cidade: string,
  pais: string,
  cidade_snake_case: string;
  latitude: string;
  longitude: string;
}

export const useSearchStore = defineStore('search', {
  state: (): {
    availableCities: City[];
    criteria: SearchCriteria;
    results: Destino[];
  } => ({
    availableCities: cityList,
    criteria: {} as SearchCriteria,
    results: hoteisData,
  }),
  actions: {
    setAvalableCities (listCity: City[]) {
      this.availableCities = listCity;
    },
    setSearchCriteria(criteria: SearchCriteria) {
      this.criteria = criteria;
    },
    setResults(results: Destino[]) {
      this.results = results;
    },
    async fetchHotels() {
      const response = hoteisData as Destino[]
      this.setResults(response);
    }    
  },
});
