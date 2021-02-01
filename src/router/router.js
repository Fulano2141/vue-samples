import HomePage from "../views/HomePage.vue"
import HomeBasics from "../views/HomeBasics.vue"
import Animations from "../views/Animations.vue"
import DynamicStyles from "../components/basic/DynamicStyles";
import Exercise4 from "../components/basic/Exercise4";
import Conditionals from "../components/basic/Conditionals";
import Loops from "../components/basic/Loops";
import Exercise5 from "../components/basic/Exercise5";
import Game from "../components/basic/Game";
import UserPage from "../views/UserPage";
import QuotePage from "../views/QuotePage"

export const routes = [

    {
        path: '/',
        component: HomePage
    },
    {
        path: "/basics",
        component: HomeBasics
    },
    {
        path: "/styles",
        component: DynamicStyles
    },
    {
        path: "/exercise4",
        component: Exercise4
    },
    {
        path: "/conditionals",
        component: Conditionals
    },
    {
        path: "/loops",
        component: Loops
    },
    {
        path: "/exercise5",
        component: Exercise5
    },
    {
        path: "/game1",
        component: Game
    },
    {
        path: "/user",
        component: UserPage
    },
    {
        path: "/animation",
        component: Animations
    },
    // 

    {
        path: "/quotes",
        component: QuotePage
    },
    {
        path: '/project',
        name: 'Project',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/ProjectPage.vue')
    },
    {
        path: '/forms',
        name: 'Forms',
        component: () => import('../views/FormsPage.vue')
    },
    {
        path: '/directives',
        name: 'Directives',
        component: () => import('../views/DirectivesPage.vue')
    },
    {
        path: '/filmix',
        name: 'Filters And Mixis',
        component: () => import('../views/FilterAndMixins.vue')
    }
]