<template>
  <validation-provider
    tag="div"
    :rules="rules"
    v-slot="{ errors, classes }"
    class="form__field"
    :name="name"
  >
    <select
      :id="`${name}Select`"
      :name="name"
      class="form__field-control"
      :class="classes"
      :value="inputValue"
      v-model="model"
    >
      <slot></slot>
    </select>
    <small v-if="errors[0]" class="form__field-help text-primary">{{
      errors[0]
    }}</small>
  </validation-provider>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Vue, Component, Prop } from "vue-property-decorator";
import { InputValidationRule } from "@/types";

@Component
export default class BaseSelect extends Vue {
  @Prop({ required: true, type: String }) readonly name!: string;
  @Prop({ required: true, type: Object as PropType<InputValidationRule> })
  readonly rules!: string;
  @Prop({ required: true }) readonly inputValue!: unknown;

  get model(): unknown {
    return this.inputValue;
  }

  set model(newValue: unknown) {
    this.$emit("input", newValue);
  }
}
</script>
