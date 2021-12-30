import { expect } from "chai";
import { mount } from "@vue/test-utils";
import BaseInput from "@/components/BaseInput.vue";
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

describe("BaseInput.vue", () => {
  before(() => {
    extend("required", {
      ...required,
      message: "This field is required",
      computesRequired: true,
    });
  });

  context("props", () => {
    it("should render passed prop values", () => {
      const wrapper = mount(BaseInput, {
        propsData: {
          name: "first_name",
          type: "text",
          rules: { required: true },
          placeholder: "First Name",
          value: "Peter",
        },
        stubs: {
          "validation-provider": ValidationProvider,
        },
      });

      const textInput = wrapper.find('input[type="text"]');

      expect(textInput.attributes("name")).to.equal("first_name");
      expect(textInput.attributes("type")).to.equal("text");
      expect(wrapper.props("rules")).to.have.deep.property("required");
      expect(textInput.attributes("placeholder")).to.equal("First Name");
    });
  });

  context("onInput", () => {
    it("should trigger input event and update value", async () => {
      const wrapper = mount(BaseInput, {
        propsData: {
          name: "first_name",
          type: "text",
          rules: { required: true },
          placeholder: "First Name",
          value: "Peter",
        },
        stubs: {
          "validation-provider": ValidationProvider,
        },
      });
      const textInput = wrapper.find('input[type="text"]');
      await textInput.setValue("John");

      expect(wrapper.emitted().input).to.deep.equal([["John"]]);
    });
  });
});
