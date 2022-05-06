<template>
	<v-flex shrink>
		<h1 class="display-1">Todo List</h1>
		<v-container>
			<v-row dense>
				<v-col
					cols="12"
					class="
						d-flex
						flex-no-wrap
						justify-space-between
						items-center
					"
				>
					<v-text-field
						label="Введите название дела"
						solo
						dense
						v-model="todoTitle"
					></v-text-field>
					<v-text-field
						label="Описание дела"
						solo
						dense
						v-model="todoDescription"
					></v-text-field>
					<v-btn
						@click="onCreateClicked"
						color="success"
						large
						class="ml-5"
						:disabled="!canSendTodo"
					>
						Создать todo
					</v-btn>
				</v-col>
			</v-row>
			<div v-if="todoList" class="mt-4 col-12">
				<v-col v-for="todo in todoList" :key="todo.id" col="12 mb-5">
					<v-card elevation="2">
						<div class="d-flex flex-no-wrap justify-space-between">
							<div>
								<v-card-title class="text-h5">
									{{ todo.title }}
								</v-card-title>

								<v-card-subtitle>
									{{ todo.description }}
								</v-card-subtitle>

								<v-card-actions>
									<v-btn
										class="ml-2"
										outlined
										small
										rounded
										color="error"
									>
										<v-icon> mdi-delete </v-icon>
									</v-btn>
									<v-btn
										v-if="todo.isCompleted"
										class="ml-2"
										outlined
										rounded
										small
										@click="onPatchTodoClicked(todo)"
									>
										Сделать незавершенным
										<v-icon> mdi-close </v-icon>
									</v-btn>
									<v-btn
										v-else
										class="ml-2"
										outlined
										rounded
										small
										@click="onPatchTodoClicked(todo)"
									>
										Завершить
										<v-icon> mdi-check </v-icon>
									</v-btn>
								</v-card-actions>
							</div>
						</div>
					</v-card>
				</v-col>
			</div>
		</v-container>
	</v-flex>
</template>

<script>
import { createTodo, fetchTodoList, patchTodo } from '@/api/todoService';

export default {
	name: 'Home',
	data: () => ({
		todoList: [],
		todoTitle: '',
		todoDescription: '',
	}),
	created() {
		this.fetchTodoList();
	},
	computed: {
		canSendTodo() {
			return this.todoTitle && this.todoDescription;
		},
	},
	methods: {
		async onCreateClicked() {
			if (this.canSendTodo) {
				const newTodo = await createTodo(
					this.todoTitle,
					this.todoDescription,
				);
				this.todoTitle = this.todoDescription = '';
				this.todoList = this.todoList.concat(newTodo);
			}
		},
		async fetchTodoList() {
			this.todoList = await fetchTodoList();
		},
		async onPatchTodoClicked(todo) {
			await patchTodo(todo.id, {
				isCompleted: !todo.isCompleted,
			});
			this.fetchTodoList();
			// const oldTodo = this.todoList.find(
			// 	({ id }) => id === todo.id,
			// );
			// console.warn({oldTodo });
			// oldTodo.isCompleted = patchedTodo.isCompleted;
		},
	},
};
</script>
