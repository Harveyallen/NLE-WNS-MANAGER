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
        label="操作"
        width="400">
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
import $http from '@/api';

export default {
  data() {
    return {
      tag_data: [
        { name: '0', label: '私有仓库' },
        { name: '1', label: '公共仓库' },
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
          arr.push(obj);
        });
        this.list_data = arr;
      });
    },
    setStoreNumber() {
      this.seen = true;
    },
    checkStore() {
      this.$router.push({
        name: 'storeList',
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
