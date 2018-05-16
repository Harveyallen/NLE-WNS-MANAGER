<template>
  <div>
  <el-row :class='$style.until' type="flex" justify="space-between">
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
    @change="getOwnerList"
    v-model="params.status">
    <el-table
      :data="list_data"
      border
      style="width: 98%;margin:0 auto;">
      <el-table-column
        prop="mail"
        label="用户邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date_register"
        label="提交申请权限认证时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="audit_status"
        label="可创建/已创建私有仓库数"
        width="200">
      </el-table-column>
      <el-table-column
        prop="audit_status"
        label="可创建/已创建公共仓库数"
        width="200">
      </el-table-column>
      <el-table-column
        prop="audit_status"
        label="审核人">
      </el-table-column>
      <el-table-column
        prop="handle"
        label="操作"
        width="330">
        <template slot-scope="scope">
          <div>
            <el-button size="mini" @click="setStoreNumber(scope.row.id)">仓库数设置</el-button>
            <el-button size="mini" @click="storeList(scope.row.id, scope)">查看仓库</el-button>
            <el-button size="mini" @click="authDetail(scope.row.id, 0)">申请详情</el-button>
            <el-button size="mini" @click="authDetail(scope.row.id, 1)">详情</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </wms-tags>
  </div>
</template>

<script>
import mixin from '@/mixin/list';
import WmsTags from '@/components/wms_tags';
import $http from '@/api';

export default {
  data() {
    return {
      tag_data: [
        { name: '0', label: '已通过' },
        { name: '1', label: '待审核' },
        { name: '2', label: '未通过' },
      ],
      owner_data: [],
      list_data: [],
      defaultPublicNumber: 'defaultPublicNumber',
      defaultPrivateNumber: 'defaultPrivateNumber',
      value1: '',
      num1: '',
      num2: '',
      input21: '',
      seen: false,
    };
  },
  components: {
    WmsTags,
  },
  mixins: [mixin],
  created() {
    this.getOwnerList();
  },
  computed: {
  },
  methods: {
    handleChange1() {

    },
    getOwnerList() {
      $http.ownerList(this.params).then((res) => {
        this.owner_data = res.data.data;
        const arr = [];
        this.owner_data.forEach((Item) => {
          const obj = {};
          obj.mail = Item.applicant.email;
          obj.date_register = Item.applicant.created_at;
          const obj2 = Object.assign({}, obj, Item);
          arr.push(obj2);
        });
        this.list_data = arr;
      });
    },
    setStoreNumber() {
      this.seen = true;
    },
    storeList(id, scope) {
      console.log(scope);
      this.$router.push({
        name: 'storeList',
        params: {
          id,
        },
      });
    },
    authDetail(id, ctr) {
      this.$router.push({
        name: 'authInfo',
        query: {
          id,
          ctr,
        },
      });
    },
  },
};
</script>

<style lang="less" module>
@import '../../less/public_variable.less';
.mask {
  width:100%;
  height:100%;
  left:0;
  top:0;
  position:fixed;
  background:rgba(0,0,0,0.3);
  z-index: 9999;
   .view {
     position: fixed;
     width:316px;
     height:168px;
     padding: 20px;
     overflow: hidden;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
     z-index: 10000;
     border-radius: 6px;
     background-color: #fff;
     .number{
       margin: 20px auto;
     }
     .btn{
       margin-left: 86px;
     }
   }
}

.until{
  margin: 10px 40px;
}
</style>
