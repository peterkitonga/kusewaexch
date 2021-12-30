<template>
  <validation-provider
    tag="div"
    :rules="rules"
    v-slot="{ errors, classes }"
    class="form__field"
    :name="name"
  >
    <input
      :id="`${name}Input`"
      :type="type"
      :name="name"
      class="form__field-control"
      :class="classes"
      :placeholder="placeholder"
      :value="inputValue"
      v-model="model"
    />
    <label v-if="label" :for="`${name}Input`" class="form__field-label">{{
      label
    }}</label>
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
export default class BaseInput extends Vue {
  @Prop({ required: true, type: String }) readonly name!: string;
  @Prop({ required: true, type: String }) readonly type!: string;
  @Prop({ required: true, type: Object as PropType<InputValidationRule> })
  readonly rules!: string;
  @Prop({ required: false, type: String }) readonly placeholder!: string;
  @Prop({ required: true }) readonly inputValue!: unknown;
  @Prop({ required: false, type: String }) readonly label!: string;

  get model(): unknown {
    return this.inputValue;
  }

  set model(newValue: unknown) {
    this.$emit("input", newValue);
  }

  public onInput(event: Event): void {
    const targetEl = event.target as HTMLInputElement;

    this.$emit("input", targetEl.value);
  }
}
</script>
