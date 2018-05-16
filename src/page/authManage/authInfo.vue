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
        {{form.warehouse_name_cn}}
      </el-form-item>
      <el-form-item label="英文名称">
        {{form.warehouse_name_en}}
      </el-form-item>
      <el-form-item label="仓库产权方">
        {{form.warehouse_property}}
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
      <el-form-item v-if="this.ctr==1">
        <el-button type="primary" plain>审核通过</el-button>
        <el-button type="text" @click="open3" plain>审核不通过</el-button>
        <div :class="$style.denyInfo" v-if="dialogVisible">
          <span>确认拒绝12345@qq.com用户创建仓库权限？</span>
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="denyInfo">
          </el-input>
          <div>
            <el-button type="primary"
                       @click="confirmDeny"
                       :class="$style.popBtn" plain>
              确认</el-button>
            <el-button type="primary" plain>取消</el-button>
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="goBack">返回</el-button>
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
        warehouse_name_cn: '', // 仓库中文名
        warehouse_name_en: '', // 仓库英文名
        phone: '',
        country: '', // 国家
        postcode: '', // 邮箱
        door_no: '', // 门牌号
        city: '', // 城市
        street: '', // 街道
        warehouse_plan: '', // logo
      },
      ctr: '',
      denyStatus: '1',
      denyInfo: '',
      dialogVisible: false,
    };
  },
  computed: {
  },
  mixins: [mixin],
  created() {
    if (!this.$route.query.id) return;
    this.ctr = this.$route.query.ctr;
    this.getInfo();
  },
  methods: {
    goBack() {
      this.$router.push({
        name: 'authList',
      });
    },
    confirmDeny() {
      console.log(this.denyInfo);
      $http.submitDenyInfo({
        id: this.$route.query.id,
        status: 3,
        remark: this.denyInfo,
      }).then(() => {
        this.dialogVisible = false;
      });
    },
    open3() {
      this.dialogVisible = true;
    },
    getInfo() {
      $http.ownerAuthInfo(this.$route.query.id).then((res) => {
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
  .back {
    position: absolute;
    top: 0;
    right: 0;
  }
  .denyInfo {
    width: 250px;
    height: 200px;
    position: fixed;
    background-color: #ccc;
    border-radius: 5px;
    padding: 10px;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    z-index: 10002;
  }
  .mask2 {
    width:100%;
    height:100%;
    left:0;
    top:0;
    position:fixed;
    background:rgba(0,0,0,0.3);
    z-index: 10001;
  }
  .avatar_uploader {
    margin-top: 10px;
  }
  .popBth {
    margin: 20px 0 0 40px;
  }
</style>
