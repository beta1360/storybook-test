import TodoList from '../components/TodoList.vue'

const defaultTodos = [
	{ pinned: true, label: 'issue1', id: 1 },
	{ pinned: false, label: 'issue2', id: 2 },
	{ pinned: false, label: 'issue3', id: 3 },
	{ pinned: false, label: 'issue4', id: 4 },
	{ pinned: false, label: 'issue5', id: 5 }
]

export default {
  components: { TodoList },
  title: 'Example/TodoList/TodoList'
}

const Template = (args) => ({
  components: { TodoList },
  setup() {
    return { args }
  },
  template: '<TodoList v-bind="args" />',
});

export const BaseTodos = Template.bind({});
BaseTodos.args = {
  todos: defaultTodos
}

export const EmptyTodos = Template.bind({});
EmptyTodos.args = {
  todos: []
}
