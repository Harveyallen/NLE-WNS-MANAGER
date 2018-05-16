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
          {{form.check_operator}}
        </el-form-item>
        <el-form-item label="审核时间">
          {{form.checked_at}}
        </el-form-item>
        <label :class="$style.label"> 基本信息 </label>
        <el-form-item label="仓库名称">
          {{form.company_name_cn}}
        </el-form-item>
        <el-form-item label="英文名称">
          {{form.company_name_en}}
        </el-form-item>
        <el-form-item label="仓库产权方">
          {{form.warehouse_owner}}
        </el-form-item>
        <el-form-item label="联系电话">
          {{form.phone}}
        </el-form-item>
        <label :class="$style.label">地址信息</label>
        <el-form-item label="国家">
          {{form.country}}
        </el-form-item>
        <el-form-item label="邮政编码">
          {{form.postcode}}
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
        check_operator: '', // 审核人
        checked_at: '', // 审核时间
        company_name_cn: '', // 仓库中文名
        company_name_en: '', // 仓库英文名
        warehouse_owner: '',
        phone: '',
        country: '', // 国家
        postcode: '', // 邮箱
        door_no: '', // 门牌号
        city: '', // 城市
        street: '', // 街道
        company_plan: '', // logo
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
        name: 'authList',
      });
    },
    getInfo() {
      $http.renterAuthInfo(this.$route.query.id).then((res) => {
        this.form = res.data;
        console.log(1, this.form);
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
