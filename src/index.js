import './styles.css';
import './js/fetchCountries';

import { alert, defaultModules } from '.././node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '.././node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';


defaults.styling = 'material';
defaults.icons = 'material';


export {alert, defaultModules, PNotifyMobile};