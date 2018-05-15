<template>
<div class="storeManage">

      <el-row :class='$style.until' type="flex" justify="space-around">
        <el-col :span="6">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-select v-model="value7" placeholder="权限">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="5">
          <el-input
          placeholder="请输入邮箱或关键字"
          prefix-icon="el-icon-search"
          v-model="input21">
          </el-input>
        </el-col>
      </el-row>

    <el-table
      :data="user_data"
      border
      style="width: 98%;margin:0 auto;">
      <el-table-column
        type="index"
        label="#">
      </el-table-column>
      <el-table-column
        prop="mail"
        label="注册邮箱"
        width="220">
      </el-table-column>
      <el-table-column
        prop="date_register"
        label="注册时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="date_login"
        label="最后登录时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="authority"
        label="权限"
        width="200">
      </el-table-column>
      <el-table-column
        prop="handle"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="goAuthList(scope.row.id)"  size="mini">创建权限详情</el-button>
          <el-button @click="goRenterList(scope.row.id)"  size="mini">租赁权限详情</el-button>
          <el-button @click="goStaffList(scope.row.id)"  size="mini">员工权限详情</el-button>
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
import $http from '@/api';

export default {
  data() {
    return {
      user_data: [{
        mail: '1234@qq.com',
        date_register: '201403',
        date_login: '201408',
        authority: '权限',
      },
      ],
      options2: [{
        value: '选项2',
        label: '创建仓库',
      }, {
        value: '选项3',
        label: '租赁仓库',
      }, {
        value: '选项4',
        label: '员工',
      }],
      value1: '',
      value7: '',
      input21: '',
    };
  },
  // components: {
  //   WmsTags,
  //   MyGroup,
  //   MySelect,
  // },
  created() {
    this.getUserList();
  },
  computed: {

  },
  methods: {
    getUserList() {
      $http.userList(this.params).then((res) => {
        this.user_data = res.data.data;
      });
    },
    goAuthList() {
      this.$router.push({
        name: 'authList',
      });
    },
    goRenterList() {
      this.$router.push({
        name: 'renterList',
      });
    },
    goStaffList() {
      this.$router.push({
        name: 'staffList',
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
