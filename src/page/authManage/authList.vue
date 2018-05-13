<template>
  <div>
  <el-row :class='$style.until' type="flex" justify="space-around">
    <el-col :span="4">
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </el-col>
    <el-col :span="7">
      <span>{{$t(defaultPublicNumber)}}</span>
      <el-input-number
        v-model="num1" @change="handleChange1"
        :min="1"
        size="middle">
      </el-input-number>
    </el-col>
    <el-col :span="7">
      <span>{{$t(defaultPrivateNumber)}}</span>
      <el-input-number
        v-model="num1" @change="handleChange1"
        :min="1"
        size="middle">
      </el-input-number>
    </el-col>
    <el-col :span="4">
      <el-input
        placeholder="请输入邮箱或关键字"
        prefix-icon="el-icon-search"
        v-model="input21">
      </el-input>
    </el-col>
  </el-row>
  <wms-tags
    :tagList="tag_data"
    @change="getList"
    v-model="params.status">
    <el-table
      :data="user_data"
      border
      style="width: 98%;margin:0 auto;">
      <el-table-column
        prop="mail"
        label="用户邮箱">
      </el-table-column>
      <el-table-column
        prop="date_register"
        label="提交申请权限认证时间">
      </el-table-column>
      <el-table-column
        prop="audit_status"
        label="审核状态">
      </el-table-column>
      <el-table-column
        prop="handle"
        label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="goAuthInfo(scope.row.id)">详情</el-button>
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
        { name: '0', label: '全部' },
        { name: '1', label: '待审核' },
        { name: '2', label: '已通过' },
        { name: '3', label: '未通过' },
      ],
      user_data: [{
        mail: '1234@qq.com',
        date_register: '201403',
        audit_status: '已通过',
      },
      ],
      defaultPublicNumber: 'defaultPublicNumber',
      defaultPrivateNumber: 'defaultPrivateNumber',
      value1: '',
      num1: '',
      input21: '',
    };
  },
  components: {
    WmsTags,
  },
  mixins: [mixin],
  created() {
    this.getList();
  },
  computed: {
  },
  methods: {
    handleChange1() {

    },
    getList() {
      $http.userList(this.params).then((res) => {
        this.user_data = res.data.data;
      });
    },
    goAuthInfo(id) {
      this.$router.push({
        name: 'authInfo',
        params: {
          id,
        },
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
