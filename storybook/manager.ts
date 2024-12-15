
import { addons } from '@storybook/manager-api';
addons.register('custom-panel', (api) => {
  api.togglePanel(false);
});



import {create} from '@storybook/theming';
addons.setConfig({
  theme: create({
    base: 'dark', 
    brandTitle: "React components",
    brandImage: "logo.svg", 
    brandTarget: '_self',
  }),
})


