<template>
  <div class="table">
    <el-table :data="tableData" v-bind="$attrs" align="center">
      <slot name="start"></slot>
      <el-table-column
        :key="item.id"
        :type="item.type"
        :label="item.label"
        :width="item.width"
        :prop="item.prop"
        :align="item.align || 'center'"
        v-for="item in tableCol"
      >
        <!--默认column-->
      </el-table-column>
      <slot name="end"></slot>
      <!--自定义column-->
    </el-table>
    <el-pagination
      v-if="showPagination"
      :current-page="tablePage.pageNum"
      :page-size="tablePage.pageSize"
      :page-sizes="tablePage.sizes"
      :total="tablePage.total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      background
      layout="sizes, prev, pager, next, jumper, total"
    >
    </el-pagination>
  </div>
</template>
<script>
import { Table, TableColumn, Pagination } from 'element-ui'
export default {
  name: 'Table',
  components: {
    'el-pagination': Pagination,
    'el-table': Table,
    'el-table-column': TableColumn
  },
  props: {
    tableSlot: { type: Array, default: () => [] }, // 自定义列column
    tableData: { type: Array, default: () => [] },
    // 表格列配置
    tableCol: { type: Array, default: () => [] },
    showPagination: { type: Boolean, default: true }, // 是否展示分页
    // 分页数据
    tablePage: {
      type: Object,
      default: () => ({
        pageSize: 10,
        pageNum: 1,
        total: 0,
        sizes: [10, 20, 30, 40, 50]
      })
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('currentChange', val)
    },
    handleSizeChange(val) {
      this.$emit('sizeChange', val)
    }
  }
}
</script>
