<template>
<div class="storeManage">
   <wms-tags
     :tagList="tag_data"
     @change="userType"
     v-model="params.status"
   >
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
        label="账户邮箱">
      </el-table-column>
      <el-table-column
        prop="submit_date"
        label="提交申请权限认证时间">
      </el-table-column>
      <el-table-column
        prop="private_repository"
        label="可创建/已创建私有仓库数">
      </el-table-column>
      <el-table-column
        prop="public_repository"
        label="可创建/已创建公共仓库数">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template>
          <el-button size="mini">仓库数设置</el-button>
          <el-button size="mini">仓库详情</el-button>
          <el-button size="mini">提交详情</el-button>
        </template>
      </el-table-column>
    </el-table>
   </wms-tags>
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
      tag_data: [
        { name: '0', label: '可创建仓库用户列表' },
        { name: '1', label: '可租赁仓库用户列表' },
        { name: '2', label: '员工身份用户列表' },
      ],
      user_group_data: [
        { mail: '1234@qq.com',
          submit_date: '201403',
          private_repository: '201408',
          public_repository: '权限',
        }],
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
    userType() {
      this.getList();
    },
    getList() {
      $http.userlist(this.params).then((res) => {
        this.user_group_data = res.data.data;
      });
    },
  },
};
</script>

<style lang="less" module>
@import '../../less/public_variable.less';

.util {
  text-align: right;
  margin: 20px;
}
</style>
