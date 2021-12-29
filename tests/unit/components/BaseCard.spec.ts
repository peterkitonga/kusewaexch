import { expect } from "chai";
import { mount } from "@vue/test-utils";
import BaseCard from "@/components/BaseCard.vue";

describe("BaseCard.vue", () => {
  context("slot renders", () => {
    it("should render content to respective named slots", () => {
      const wrapper = mount(BaseCard, {
        slots: {
          header: "<span>Example Header</span>",
          body: "<span>Example Text</span>",
          footer: "<span>Example Footer</span>",
        },
        stubs: {
          "base-card": BaseCard,
        },
      });
      const headerEl = wrapper.find(".card__header");
      const bodyEl = wrapper.find(".card__body");
      const footerEl = wrapper.find(".card__footer");

      expect(headerEl.find("span").html()).to.equal(
        "<span>Example Header</span>"
      );
      expect(bodyEl.find("span").html()).to.equal("<span>Example Text</span>");
      expect(footerEl.find("span").html()).to.equal(
        "<span>Example Footer</span>"
      );
    });
  });
});
