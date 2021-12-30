import { expect } from "chai";
import { mount, RouterLinkStub } from "@vue/test-utils";
import BaseNavbar from "@/components/BaseNavbar.vue";

describe("BaseNavbar.vue", () => {
  context("onNavbarToggle", () => {
    it("should toggle the nav list modifier class", async () => {
      const wrapper = mount(BaseNavbar, {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });
      const navToggle = wrapper.findComponent({ ref: "nav-toggle" });
      const rightMenuEl = wrapper.findComponent({ ref: "right-menu" });

      await navToggle.trigger("click");

      expect(rightMenuEl.classes("navbar__list--toggled")).to.be.true;
    });
  });
});
