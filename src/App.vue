<template>
	<div id="app">
		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
		</nav>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style scoped>
nav {
	display: flex;
	flex-direction: row nowrap;
	gap: 16px;
	padding: 16px;
	color: black;
	font-size: 20px;
}

</style>