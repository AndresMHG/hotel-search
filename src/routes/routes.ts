import HomeViews from '../views/HomeViews/HomeViews.vue'
import ComparisonViews from '../views/ComparisonViews/ComparisonViews.vue'

const routes = [
    { path: '/', name: 'home', component: HomeViews },
    { path: '/comparison', name: 'comparison', component: ComparisonViews },
]

export default routes;
