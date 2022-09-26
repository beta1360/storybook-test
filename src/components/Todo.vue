<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue'

export default defineComponent({
	props: {
		id: {
			type: Number,
			default: 0
		},
		label: {
			type: String,
			default: 'No Label'
		},
		pinned: {
			type: Boolean,
			default: false
		}
	},

	emits: ['pin'],

	setup(props, { emit }) {
		const { id, label, pinned } = toRefs(props)
		const imgSrc = computed(() => {
			const baseImage = '/bookmark'
			const pinnedLabel = pinned.value ? '-pinned' : ''
			const ext = '.png'
			return `${baseImage}${pinnedLabel}${ext}`
		})

		const onClickPin = (clickedId) => {
			emit('pin', clickedId)
		}

		return {
			id,
			label,
			pinned,
			imgSrc,
			onClickPin
		}
	}
})
</script>

<template>
	<div class="todo__wrapper">
		<p class="todo-label">{{ label }}</p>
		<img class="todo-bookmark" :src="imgSrc" @click="() => onClickPin(id)" />
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
