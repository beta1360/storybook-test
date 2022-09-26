<script lang="ts">
import TodoList from './components/TodoList.vue'
import { defineComponent, toRefs, reactive } from 'vue'

const defaultTodos = [
	{ pinned: true, label: 'issue1', id: 1 },
	{ pinned: false, label: 'issue2', id: 2 },
	{ pinned: false, label: 'issue3', id: 3 },
	{ pinned: false, label: 'issue4', id: 4 },
	{ pinned: false, label: 'issue5', id: 5 }
]

export default defineComponent({
	setup() {
		const title = 'Todo list'
		const state = reactive({
			todos: defaultTodos
		})

		const setPin = (id) => {
			state.todos = state.todos.map((item) => {
				if (item.id === id) item.pinned = !item.pinned
				return item
			})
		}

		const addTodo = () => {
			const id = state.todos.length + 1
			state.todos.push({
				id: id,
				pinned: false,
				label: `issue${id}`
			})
		}

		return {
			...toRefs(state),
			title,
			setPin,
			addTodo
		}
	},
	components: {
		TodoList
	}
})
</script>

<template>
	<div class="todo-list__wrapper">
		<p class="todo-list__title">{{ title }}</p>
		<TodoList :todos="todos" @pin="setPin" @add="addTodo" />
	</div>
</template>

<style scoped>
.todo-list__wrapper {
	background-color: #fff;
	width: 680px;
	padding: 20px 40px;
}
.todo-list__title {
	color: #000;
	font-weight: bold;
	font-size: 24px;
}
</style>
