<template>
  <!-- eslint-disable vue/no-v-html -->
  <svg
    class="v-icon"
    :class="`v-icon_${theme}`"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="icon.viewBox"
    focusable="false"
    role="presentation"
    :aria-label="icon.label"
    v-html="icon.content"
  />
  <!-- eslint-enable vue/no-v-html -->
</template>

<script>
import { props } from './icon';

export default {
  name: 'VIcon',
  props,
  icons: [],
  computed: {
    icon() {
      const { $options, name } = this;
      const icon = $options.icons.find((i) => i.name === name);

      return !icon
        ? new Error(`Name of the ${name} icon is not correct.`)
        : icon;
    },
  },
};
</script>

<style lang='scss' scoped>
.v-icon {
  display: block;

  &.v-icon_accent {
    /deep/ .v-icon__01 {
      fill: var(--cl-accent-01);
    }

    /deep/ .v-icon__02 {
      fill: var(--cl-accent-02);
    }

    /deep/ .v-icon__03 {
      fill: var(--cl-accent-03);
    }

    /deep/ .v-icon__04 {
      fill: var(--cl-accent-04);
    }
  }
}
</style>
