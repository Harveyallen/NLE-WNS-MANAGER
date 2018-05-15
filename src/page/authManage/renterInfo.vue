<template>
  <div>
  <div :class="$style.mask"></div>
   <model-form :class="$style.view">
    <el-form slot="left" label-width="120px">
      <label :class="$style.label"> 审核信息 </label>
      <el-form-item label="审核状态">
        {{form.status}}
      </el-form-item>
      <el-form-item label="审核人">
        {{form.auditor}}
      </el-form-item>
      <el-form-item label="审核时间">
        {{form.date}}
      </el-form-item>
      <label :class="$style.label"> 基本信息 </label>
      <el-form-item label="仓库名称">
        {{form.warehouse_name_cn}}
      </el-form-item>
      <el-form-item label="英文名称">
        {{form.warehouse_name_en}}
      </el-form-item>
      <el-form-item label="仓库产权方">
        {{form.warehouse_property}}
      </el-form-item>
      <el-form-item label="联系电话">
        {{form.contact_number}}
      </el-form-item>
      <label :class="$style.label">地址信息</label>
      <el-form-item label="国家">
        {{form.country}}
      </el-form-item>
      <el-form-item label="邮政编码">
        {{form.contact_email}}
      </el-form-item>
      <el-form-item label="门牌号">
        {{form.door_no}}
      </el-form-item>
      <el-form-item label="城市">
        {{form.city}}
      </el-form-item>
      <el-form-item label="街道">
        {{form.street}}
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="goBack">返回</el-button>
      </el-form-item>
    </el-form>

    <div slot="right">
      <label :class="$style.label"> 仓库平面图(选填) </label>
    </div>
   </model-form>
  </div>
</template>

<script>
import ModelForm from '@/components/form';
import $http from '@/api';
import mixin from '@/mixin/form_config';

export default {
  components: {
    ModelForm,
  },
  data() {
    return {
      form: {
        status: '', // 审核状态
        auditor: '', // 审核人
        date: '', // 审核时间
        warehouse_name_cn: '', // 仓库中文名
        warehouse_name_en: '', // 仓库英文名
        contact_number: '',
        country: '', // 国家
        contact_email: '', // 邮箱
        door_no: '', // 门牌号
        city: '', // 城市
        street: '', // 街道
        warehouse_plan: '', // logo
      },
    };
  },
  computed: {
    // form() {
    //   return {},
    // },
  },
  mixins: [mixin],
  created() {
    if (!this.$route.query.id) return;
    this.getInfo();
  },
  methods: {
    goBack() {
      this.$router.push({
        name: 'renterList',
      });
    },
    getInfo() {
      $http.WarehouseInfo(this.$route.query.id).then((res) => {
        res.data_id = res.data.id;
        this.form = res.data;
      });
    },
  },
};
</script>

<style lang="less" module>
  .mask {
    width:100%;
    height:100%;
    left:0;
    top:0;
    position:fixed;
    background:rgba(0,0,0,0.3);
    z-index: 9999;
  }
  .view {
    top:0;
    width: 80%;
    position: absolute;
    z-index: 10000;
  }
  .label {
    font-size: 18px;
  }
  .avatar_uploader {
    margin-top: 10px;
  }
</style>
