function getView(viewName) {
  return (resolve, reject) => {
    require.ensure(
      [],
      (require) => {
        const mapItem = {
          login: require('@/page/login/login'), // 登录------------------------------login模块
          register: require('@/page/login/register'), // 注册
          backPassword: require('@/page/login/back_password'), // 找回密码
          topNav: require('@/page/NavMenu/top'), // 顶部导航
          home: require('@/page/myWms/home'), // 首页--------------------------------MyWMS模块
          homeSetup: require('@/page/myWms/home_setup'), // 首页配置
          editPassword: require('@/page/myWms/edit_password'), // 修改密码
          userList: require('@/page/userManage/userList'), // 员工列表----------------userManage模块
          userAdd: require('@/page/userManage/userAdd'), // 新增员工组
          userGroupList: require('@/page/userManage/userGroupList'), // 员工组列表
          userGroupAdd: require('@/page/userManage/userGroupAdd'), // 新增员工组
          manageAdd: require('@/page/userManage/manageAdd'), // 新增员工组
          storeInfo: require('@/page/userManage/storeInfo'), // 创建仓库预览
          storeInfoDetails: require('@/page/userManage/storeInfoDetails'), // 仓库详情
          storeSubmitDetails: require('@/page/userManage/storeSubmitDetails'), // 仓库提交详情
          authList: require('@/page/authManage/authList'), // 仓库所有者权限认证状态列表------authManage模块
          storeList: require('@/page/authManage/storeList'), // 仓库列表
          authInfo: require('@/page/authManage/authInfo'), // 列表详情
          renterList: require('@/page/authManage/renterList'), // 仓库租户权限认证状态列表
          renterInfo: require('@/page/authManage/renterInfo'), // 列表详情
          staffList: require('@/page/authManage/staffList'), // 员工
          commodityManage: require('@/page/storeManage/commodityManage'), // 商品分类管理
          commodityInfo: require('@/page/storeManage/commodityInfo'), // 商品信息
          commodityEdit: require('@/page/storeManage/commodityEdit'), // 商品编辑
        };
        resolve(mapItem[viewName]);
      },
      reject,
      'home',
    );
  };
}

function addComponent(routes) {
  routes.forEach((v) => {
    if (!v.component && !v.redirect) {
      v.component = getView(v.name);
    }
    if (v.children) {
      addComponent(v.children);
    }
  });
}

export default addComponent;
