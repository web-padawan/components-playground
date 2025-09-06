import '@vaadin/popover';
import '@vaadin/tooltip';
import { initControls } from './controls.js';

const sample = document.querySelector('.sample');
const element = sample && sample.firstElementChild;

if (element) {
  initControls(element);
}
