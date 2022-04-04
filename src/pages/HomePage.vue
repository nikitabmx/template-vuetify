<template>
	<div>
		<h4>HOME</h4>
		<div class="todo-list">
			<ul v-if="todoList">
				<li v-for="todo in todoList" :key="todo.id">
					{{ todo.title }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data: () => ({
		todoList: [],
	}),
	created() {
		this.fetchTodoList();
	},
	methods: {
		async fetchTodoList() {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users/1/todos',
			);
			this.todoList = await response.json();
		},
	},
};
</script>
