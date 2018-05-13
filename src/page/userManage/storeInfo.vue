<template>
<div class="storeManage">
  <wms-tags
    :tagList="tag_data"
    @change="storeType"
    v-model="params.status">
    <el-table
      :data="renters_list_data"
      border
      style="width: 100%">
      <el-table-column
        type="index"
        label="#">
      </el-table-column>
      <el-table-column
        prop="name_cn"
        label="仓库名称">
      </el-table-column>
      <el-table-column
        prop="name_en"
        label="英文名称">
      </el-table-column>
      <el-table-column
        prop="country"
        label="国家">
      </el-table-column>
      <el-table-column
        prop="contact_user"
        label="联系人">
      </el-table-column>
      <el-table-column
        prop="contact_number"
        label="联系方式">
      </el-table-column>
      <el-table-column
        prop="temperature"
        label="储存温度">
      </el-table-column>
      <el-table-column
        prop="area"
        label="面积(平方米)">
      </el-table-column>
      <el-table-column
        prop="address"
        width="180"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="info(scope.row.id)" size="mini">查看信息</el-button>
        </template>
      </el-table-column>
    </el-table>
  </wms-tags>
</div>
</template>

<script>
import WmsTags from '@/components/wms_tags';
import mixin from '@/mixin/list';
import $http from '@/api';

export default {
  data() {
    return {
      tag_data: [
        { name: '0', label: '私有仓库' },
        { name: '1', label: '公共仓库' },
      ],
      renters_list_data: [], // 仓库列表状态
    };
  },
  mixins: [mixin],
  components: {
    WmsTags,
  },
  created() {
    this.getList();
  },
  computed: {
    ownerId() {
      return this.$store.state.token.id;
    },
  },
  methods: {
    // 获取到选中仓库类型
    storeType(val) {
      console.log(val);
    },
    // 获取仓库列表
    getList() {
      $http.rentersList(this.params).then((res) => {
        this.renters_list_data = res.data.data;
      });
    },
    // 查看详情
    info(ids) {
      this.$router.push({
        name: 'storeInfoDetails',
        query: {
          id: ids,
        },
      });
    },
  },
};
</script>

<style lang="less" module>
  @import '../../less/public_variable.less';
</style>
<style lang="less">
  @import '../../less/public_variable.less';
</style>
