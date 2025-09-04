import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const History = () => import('../views/History.vue')
const Events = () => import('../views/Events.vue')
const EventsBusiness = () => import('../views/events/Business.vue')
const EventsSocial = () => import('../views/events/Social.vue')
const Projects = () => import('../views/Projects.vue')
const ProjectsEducational = () => import('../views/projects/Educationale.vue')
const ProjectsSocial = () => import('../views/projects/Sociale.vue')
const Startups = () => import('../views/Startups.vue')
const Donate = () => import('../views/Donate.vue')
const Academic = () => import('../views/Academic.vue')
const Search = () => import('../views/Search.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },

  { path: '/despre-noi', name: 'About', component: About },
  { path: '/scurt-istoric', name: 'History', component: History },

  {
    path: '/evenimente',
    name: 'Events',
    component: Events,
    redirect: { name: 'EventsBusiness' },
    children: [
      { path: 'business', name: 'EventsBusiness', component: EventsBusiness },
      { path: 'sociale', name: 'EventsSocial', component: EventsSocial },
    ],
  },

  {
    path: '/proiecte',
    name: 'Projects',
    component: Projects,
    redirect: { name: 'ProjectsEducational' },
    children: [
      { path: 'educationale', name: 'ProjectsEducational', component: ProjectsEducational },
      { path: 'sociale', name: 'ProjectsSocial', component: ProjectsSocial },
    ],
  },

  { path: '/startup-uri', name: 'Startups', component: Startups },
  { path: '/doneaza', name: 'Donate', component: Donate },
  { path: '/academic', name: 'Academic', component: Academic },

  { path: '/cautare', name: 'Search', component: Search },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
