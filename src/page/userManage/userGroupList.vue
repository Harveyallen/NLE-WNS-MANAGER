<template>
<div class="storeManage">
     <el-row :class='$style.until' type="flex" justify="space-between">
       <el-col :span="6">
         <el-input :class='$style.user_input'
                   placeholder="请输入邮箱或关键字"
                   prefix-icon="el-icon-search"
                   v-model="input21">
         </el-input>
       </el-col>
       <el-col :span="4">
         <el-button :class='$style.user_btn' @click="manageAdd" type="primary"  plain>
           {{$t('manageAdd')}}
         </el-button>
       </el-col>
     </el-row>

    <el-table
      :data="user_group_data"
      border
      style="width: 98%;margin:0 auto;">
      <el-table-column
        type="index"
        label="#">
      </el-table-column>
      <el-table-column
        prop="mail"
        width="400"
        label="账户邮箱">
      </el-table-column>
      <el-table-column
        prop="submit_date"
        width="400"
        label="最后登录时间">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="removeManager(scope.row.id)" size="mini">
            {{$t('removeManager')}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
</div>
</template>

<script>
import mixin from '@/mixin/list';
import WmsTags from '@/components/wms_tags';
// import MySelect from '@/components/my_select';
// import MyGroup from '@/components/my_group';
import $http from '@/api';

export default {
  data() {
    return {
      user_group_data: [
        { mail: '1234@qq.com',
          submit_date: '201403',
        }],
      input21: '',
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
  },
  methods: {
    getList() {
      $http.userList(this.params).then((res) => {
        this.user_group_data = res.data.data;
      });
    },
    removeManager() {
    },
    manageAdd() {
      this.$router.push({
        name: 'manageAdd',
      });
    },
  },
};
</script>

<style lang="less" module>
@import '../../less/public_variable.less';
.user_top{
  float:right;
}
.user_input {
  display: block;
  width: 240px;
  margin: 20px;
}
.user_btn {
  margin: 20px;
}
</style>
