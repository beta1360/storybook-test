<script lang="ts">
import Todo from './Todo.vue'
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
	props: ['todos'],
	setup(props, { emit }) {
		const onClickPin = (id) => {
			emit('pin', id)
		}

		const addTodo = () => {
			emit('add')
		}

		return {
			...toRefs(props),
			onClickPin,
			addTodo
		}
	},
	components: {
		Todo
	}
})
</script>

<template>
	<div class="todos__wrapper">
		<Todo
			v-for="item in todos"
			:key="item.id"
			@pin="onClickPin"
			:id="item.id"
			:pinned="item.pinned"
			:label="item.label"
		/>
		<button class="todos-adder" @click="addTodo">
			<img src="/add-button.png" />
		</button>
	</div>
</template>

<style scoped>
.todos__wrapper {
	margin: 20px 0;
	padding: 20px;
	border: 1px solid #666;
	border-radius: 10px;
	box-shadow: 10px 5px 5px #ddd;
}
.todos-adder {
	width: 100%;
	background-color: transparent;
	border: 0;
	margin-top: 20px;
	cursor: pointer;
}
</style>
