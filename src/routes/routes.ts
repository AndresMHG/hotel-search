import HomeViews from '../views/HomeViews/HomeViews.vue'
import SearchResults from '../views/SearchResults/SearchResults.vue'

const routes = [
    { path: '/', name: 'home', component: HomeViews },
    { path: '/search-results', name: 'search-results', component: SearchResults },
]

export default routes;
