import { configure } from '@storybook/vue';

function loadStories() {
  require('../src/stories/index');
  // You can require as many stories as you need.
}

configure(loadStories, module);