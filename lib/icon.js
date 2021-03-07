import { kebabCase, trim } from '@/utils/string';

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
};

export const props = {
  name: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  width: {
    type: [String, Number],
    default: base.width,
  },
  height: {
    type: [String, Number],
    default: base.height,
  },
};

export const parseIcon = (icon) => {
  const { name, viewBox, content } = icon;
  const kebabName = kebabCase(name);

  return {
    name,
    viewBox: !viewBox ? base.viewBox : viewBox,
    content: trim(content),
    label: kebabName.replace(/-/g, ' '),
  };
};
