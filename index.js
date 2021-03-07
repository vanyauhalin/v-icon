import Vue from 'vue';

import VIcon from './lib';
import * as icons from './lib/icons';

Vue.use(VIcon, Object.values({ ...icons }));
