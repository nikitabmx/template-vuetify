<template>
	<div id="app">
		<v-app id="inspire">
			<v-main>
				<v-container fluid fill-height>
					<v-layout justify-center align-center>
						<router-view></router-view>
					</v-layout>
				</v-container>
			</v-main>
		</v-app>
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
