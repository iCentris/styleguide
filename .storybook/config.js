import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

const req = require.context('../stories', true, /.js$/);

function loadStories() {
  req.keys().forEach(fn => req(fn));
}

configure(loadStories, module);
