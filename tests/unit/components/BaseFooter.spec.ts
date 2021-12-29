import { expect } from "chai";
import { mount } from "@vue/test-utils";
import BaseFooter from "@/components/BaseFooter.vue";

describe("BaseFooter.vue", () => {
  context("slot renders", () => {
    it("should render content to respective named slots", () => {
      const wrapper = mount(BaseFooter, {
        slots: {
          main: "<span>Example Footer</span>",
        },
        stubs: {
          "base-card": BaseFooter,
        },
      });
      const containerEl = wrapper.find(".container");

      expect(containerEl.find("span").html()).to.equal(
        "<span>Example Footer</span>"
      );
    });
  });
});
