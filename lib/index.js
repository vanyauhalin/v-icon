import is from '@/utils/is';

import { parseIcon } from './icon';
import VIcon from './VIcon';

export default {
  install: (Vue, icons, props = {}) => {
    const push = (icon) => VIcon.icons.push(parseIcon(icon));

    if (is(icons).array) {
      icons.forEach((icon) => push(icon));
    } else {
      push(icons);
    }

    Object.entries(props).forEach(([key, value]) => {
      if (VIcon.props[key]) VIcon.props[key].default = value;
    });

    Vue.component(VIcon.name, VIcon);
  },
};
