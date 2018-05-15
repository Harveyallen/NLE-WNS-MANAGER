<template>
<div class="storeManage">
     <el-input
       placeholder="请输入邮箱或关键字"
       prefix-icon="el-icon-search"
       v-model="input21"
       style="width: 20%;margin:20px 0 20px 70%;">
     </el-input>
     <el-table
      :data="user_data"
      border
      style="width: 80%;margin:0 auto;">
      <el-table-column
        type="index"
        label="#">
      </el-table-column>
      <el-table-column
        prop="mail"
        label="账户邮箱"
        width="400">
      </el-table-column>
      <el-table-column
        prop="date_login"
        label="最后登录时间"
        width="400">
      </el-table-column>
      <el-table-column
        prop="handle"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="append(scope.row.id)"  size="mini">{{$t('append')}}</el-button>
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
      input21: '',
    };
  },
  created() {
    this.getUserList();
  },
  computed: {

  },
  methods: {
    getUserList() {
      $http.userList(this.params).then((res) => {
        this.user_data = res.data.data;
        console.log(this.user_data);
      });
    },
    append() {},
  },
};
</script>

<style lang="less" module>
@import '../../less/public_variable.less';
</style>
