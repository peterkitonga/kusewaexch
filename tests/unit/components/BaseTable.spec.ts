import { expect } from "chai";
import { mount } from "@vue/test-utils";
import BaseTable from "@/components/BaseTable.vue";

describe("BaseTable.vue", () => {
  context("props", () => {
    it("should render passed prop values", () => {
      const wrapper = mount(BaseTable, {
        propsData: {
          fields: [
            {
              name: "Name",
              field: "name",
            },
            {
              name: "Email",
              field: "email",
            },
          ],
          data: [
            {
              name: "Peter Kitonga",
              email: "kitonga@example.com",
            },
            {
              name: "John Doe",
              email: "doe@example.com",
            },
            {
              name: "Jane Doe",
              email: "jane@example.com",
            },
          ],
        },
      });

      const tableHead = wrapper.find("thead");
      const tableBody = wrapper.find("tbody");

      expect(tableHead.findAll("th").length).to.equal(2);
      expect(tableBody.findAll("tr").length).to.equal(3);
    });
  });
});
