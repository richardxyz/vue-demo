<template>
	<div class="main">
		<main-navbar />
		<main-sidebar />
		<main-content />
	</div>
</template>

<script>
	import MainNavbar from './MainNavbar'
	import MainSidebar from './MainSidebar'
	import MainContent from './MainContent'
	export default {
		name: 'Main',
		components: {
			MainNavbar,
			MainSidebar,
			MainContent
		}
	}
</script>

<style scoped>
	.main {
		/* position: relative; */
	}
</style>
