import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		component: () => import('@/views/Main'),
		name: 'Main',
		redirect: {
			name: 'Home'
		},
		meta: {
			title: '主入口布局'
		},
		children: [{
			path: '/home',
			component: () => import('@/views/modules/Home'),
			name: 'Home',
			meta: {
				title: '首页',
				isTab: true
			}
		}, {
			path: '/china',
			component: () => import('@/views/modules/echarts/China'),
			name: 'China',
			meta: {
				title: 'echarts',
				isTab: true
			}
		}, {
			path: '/chengdu',
			component: () => import('@/views/modules/echarts/ChengDu'),
			name: 'ChengDu',
			meta: {
				title: 'echarts',
				isTab: true
			}
		}, ]
	},
	// {
	//   path: '/',
	//   name: 'Home',
	//   component: Home
	// },
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
