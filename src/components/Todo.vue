<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue'

export default defineComponent({
	props: ['todo'],
	setup(props, { emit }) {
		const { todo } = toRefs(props)
		const imgSrc = computed(() => {
			const baseImage = '/bookmark'
			const pinned = todo.value.pinned ? '-pinned' : ''
			const ext = '.png'
			return `${baseImage}${pinned}${ext}`
		})

		const onClickPin = (todo) => {
			emit('pin', todo)
		}

		return {
			todo,
			imgSrc,
			onClickPin
		}
	}
})
</script>

<template>
	<div class="todo__wrapper">
		<p class="todo-label">{{ todo.label }}</p>
		<img class="todo-bookmark" :src="imgSrc" @click="() => onClickPin(todo)" />
	</div>
</template>

<style scoped>
.todo__wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
	border-bottom: 1px solid #ddd;
}
.todo-label {
	color: #333;
	font-size: 15px;
	width: 100%;
	padding: 0 15px;
}
.todo-bookmark {
	width: 20px;
	cursor: pointer;
}
</style>
