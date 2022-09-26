import App from '../App.vue'

export default {
  components: { App },
  title: 'Example/App'
}

const Template = (args) => ({
  components: { App },
  setup() {
    return { args }
  },
  template: '<App v-bind="args" />',
});

export const BaseApp = Template.bind({});
BaseApp.args = {}

