<template>
  <div class="dropdown">
    <button
      :id="id"
      type="button"
      :class="`btn btn--${buttonColor}`"
      :aria-expanded="`${isToggled}`"
      @click="onDropdownToggle"
    >
      {{ label }}&nbsp;<i
        :class="['bi', isToggled ? 'bi-chevron-up' : 'bi-chevron-down']"
      ></i>
    </button>
    <ul
      :class="['dropdown__menu', isToggled ? 'dropdown__menu--toggled' : '']"
      :aria-labelledby="id"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class BaseDropdown extends Vue {
  @Prop({ required: true, type: String }) readonly id!: string;
  @Prop({ required: true, type: String }) readonly label!: string;
  @Prop({ required: true, type: String }) readonly buttonColor!: string;

  public isToggled = false;

  public onDropdownToggle(): void {
    this.isToggled = !this.isToggled;
  }
}
</script>
