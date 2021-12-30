<template>
  <div class="table-responsive">
    <table class="table">
      <caption class="table__caption">
        Swipe horizontally to view >>
      </caption>
      <thead>
        <tr>
          <th v-for="(item, index) in fields" :key="index" scope="col">
            {{ item.name !== null ? item.name : "" }}
          </th>
        </tr>
      </thead>
      <tbody>
        <caption
          v-if="data.length === 0"
          class="table__caption table__caption--shown"
        >
          No table data!
        </caption>
        <tr v-else v-for="(rowItem, rowIndex) in data" :key="rowIndex">
          <td
            v-for="(cellItem, cellIndex) in fields"
            :key="cellIndex"
            :style="cellItem.width ? `max-width : ${cellItem.width}` : ''"
          >
            <span v-if="!$scopedSlots[`col_${cellItem.field}`]">{{
              rowItem[cellItem.field]
            }}</span>
            <slot
              :name="`col_${cellItem.field}`"
              :row="rowItem"
              :index="rowIndex"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { TableHeadItem } from "@/types";

@Component
export default class BaseTable extends Vue {
  @Prop({ required: true, type: Array }) readonly fields!: TableHeadItem[];
  @Prop({ required: true, type: Array }) readonly data!: unknown[];
}
</script>
