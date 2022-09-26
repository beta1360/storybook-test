import Todo from '../components/Todo.vue'

export default {
  components: { Todo },
  title: 'Example/Todo'
}

const Template = (args) => ({
  components: { Todo },
  setup() {
    return { args }
  },
  template: '<Todo v-bind="args" />',
});

export const BaseTodo = Template.bind({});
BaseTodo.args = {
  pinned: false,
  label: '스토리북1'
}

export const PinnedTodo = Template.bind({});
PinnedTodo.args = {
  pinned: true,
  label: '스토리북2'
}

export const NoLabelTodo = Template.bind({});
NoLabelTodo.args = {
  pinned: false
}
