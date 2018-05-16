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
          label="仓库名称">
        </el-table-column>
        <el-table-column
          prop="date_register"
          label="仓库编号">
        </el-table-column>
        <el-table-column
          prop="audit_status"
          label="国家">
        </el-table-column>
        <el-table-column
          prop="audit_status"
          label="仓库面积（平方米）">
        </el-table-column>
        <el-table-column
          prop="audit_status"
          label="开通状态">
        </el-table-column>
        <el-table-column
          prop="handle"
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="storeInfo(scope.row.id)">仓库详情</el-button>
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
        { name: '0', label: '私有仓库' },
        { name: '1', label: '公共仓库' },
      ],
      user_data: [{
        mail: '1234@qq.com',
        date_register: '201403',
        audit_status: '已通过',
      },
      ],
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
    storeInfo(id) {
      this.$router.push({
        name: 'storeInfo',
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
