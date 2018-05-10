<template>
<div class="storeManage">

      <el-row :class='$style.until' :gutter="20">
        <el-col :span="6" offset="2">
          <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </el-col>
        <el-col :span="6" offset="2">
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-input
          placeholder="请输入邮箱或关键字"
          prefix-icon="el-icon-search"
          v-model="input21">
          </el-input>
        </el-col>
      </el-row>

    <el-table
      :data="staff_data"
      border
      style="width: 98%;margin:0 auto;">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名（NLE账户邮箱）">
      </el-table-column>
      <el-table-column
        prop="name_cn"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="name_en"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="address"
        label="最后登陆时间">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template>
          <el-button size="mini">编辑资料</el-button>
        </template>
      </el-table-column>
    </el-table>

</div>
</template>

<script>
// import getListData from '@/mixin';
// import WmsTags from '@/components/wms_tags';
// import MySelect from '@/components/my_select';
// import MyGroup from '@/components/my_group';
// import $http from '@/api';

export default {
  data() {
    return {
      staff_data: [], // 员工列表
      options2: [{
        value: '选项1',
        label: '权限',
        disabled: true,
      }, {
        value: '选项2',
        label: '创建仓库',
      }, {
        value: '选项3',
        label: '租赁仓库',
      }],
      value2: '',
    };
  },
  // components: {
  //   WmsTags,
  //   MyGroup,
  //   MySelect,
  // },
  created() {
  },
  computed: {
  },
  methods: {
    addCommodity() {
      this.$router.push({
        name: 'staffAdd',
      });
    },
  },
};
</script>

<style lang="less" module>
@import '../../less/public_variable.less';
.until{
  margin: 20px;
  padding-left: 50px;
}
</style>
