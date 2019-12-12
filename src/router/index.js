import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../page/index/index.vue'
import Table from '../views/table/index.vue'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	redirect: '/table'
}, {
	path: '/',
	name: 'index',
	component: Index,
	children: [{
		path: 'table',
		component: Table
	}]
}]

const router = new VueRouter({
	routes
})

export default router
