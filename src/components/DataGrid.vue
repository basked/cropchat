<template>
  <div class="demo-container">
    <div id="app">
      <span v-if="false">Loading...</span>
      <dx-data-grid :data-source="dataSource"
                    :remote-operations="false"
                    :allow-column-reordering="true"
                    :row-alternation-enabled="true"
                    :column-auto-width="true"
                    :allow-column-resizing= "true"
                    :show-borders="true"
                   >
        <!--<dx-column data-field="Product" :group-index="0"></dx-column>-->
        <!--<dx-column data-field="Amount"-->
                   <!--caption="Sale Amount"-->
                   <!--data-type="number"-->
                   <!--format="currency"-->
                   <!--alignment="right">-->
        <!--</dx-column>-->
        <!--<dx-column data-field="Discount"-->
                   <!--caption="Discount %"-->
                   <!--data-type="number"-->
                   <!--format="percent"-->
                   <!--alignment="right"-->
                   <!--:allow-grouping="false"-->
                   <!--cell-template="discountCellTemplate"-->
                   <!--css-class="bullet">-->
        <!--</dx-column>-->



        <dx-column data-field="employeeid" caption="ID" data-type="string" :width="60"></dx-column>
        <dx-column data-field="fio" caption="fio" data-type="string" :width="270"></dx-column>
        <dx-column data-field="tablenumber" caption="ТН" data-type="string" :width="60"></dx-column>
        <dx-column data-field="name"  caption="Подразделение" data-type="string" :width="550"></dx-column>
        <dx-column data-field="Name"  caption="Профессия" data-type="string" :width="550"></dx-column>
        <dx-summary>
          <dx-group-item
            :column= "name"
            :summary-type="count">
          </dx-group-item>
          <dx-total-item :column="fio" :summary-type="count"></dx-total-item>
        </dx-summary>


        <dx-group-panel :visible="true"></dx-group-panel>
        <dx-search-panel :visible="true" :highlight-case-sensitive="true"></dx-search-panel>
        <dx-grouping :auto-expand-all="false"></dx-grouping>
        <dx-selection mode="multiple"></dx-selection>
        <dx-pager allowed-page-sizes="pageSizes" :show-page-size-selector="true"></dx-pager>
        <dx-paging :page-size="100"></dx-paging>

      </dx-data-grid>
    </div>
  </div>
</template>

<script>
  import {personsGT} from './data/data'

  import {
    DxDataGrid,
    DxTotalItem,
    DxColumn,
    DxGrouping,
    DxSummary,
    DxGroupItem,
    DxGroupPanel,
    DxPager,
    DxPaging,
    DxSearchPanel,
    DxSelection
  } from 'devextreme-vue/ui/data-grid'
  import {
    DxBullet,
    DxFont,
    DxMargin,
    DxSize,
    DxTooltip
  } from 'devextreme-vue/ui/bullet'

  export default {
    el: '#app',
    name: 'DataGrid.vue',
    components: {
      DxDataGrid,
      DxColumn,
      DxGrouping,
      DxSummary,
      DxGroupItem,
      DxTotalItem,
      DxGroupPanel,
      DxPager,
      DxPaging,
      DxSearchPanel,
      DxSelection,
      DxBullet,
      DxFont,
      DxMargin,
      DxSize,
      DxTooltip
    },
    data: function () {
      return {
        dataSource: personsGT
      }
    }
  }
</script>

<style scoped>

</style>
