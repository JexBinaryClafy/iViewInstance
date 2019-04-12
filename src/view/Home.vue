<style scoped>
.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>

<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" width="220" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu
          active-name="1-2"
          :open-names="['1']"
          theme="light"
          width="auto"
          :class="menuitemClasses"
        >
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>火灾监测与预警
            </template>
            <MenuItem name="1-1">安全评估分析</MenuItem>
            <MenuItem name="1-2">隐患历史记录</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>实战指挥分析
            </template>
            <MenuItem name="2-1">灾情历史记录</MenuItem>
            <MenuItem name="2-2">队站装备清单</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>党政建设分析
            </template>
            <MenuItem name="3-1">政治教育总览</MenuItem>
            <MenuItem name="3-2">党政要闻总览</MenuItem>
            <MenuItem name="3-3">论坛数据统计</MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>党政建设分析
            </template>
            <MenuItem name="4-1">人员评估</MenuItem>
            <MenuItem name="4-2">部位评估</MenuItem>
          </Submenu>
          <Submenu name="5">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>业务风险管控
            </template>
            <MenuItem name="5-1">异常性风险</MenuItem>
            <MenuItem name="5-2">时效性风险</MenuItem>
            <MenuItem name="5-3">合规性风险</MenuItem>
          </Submenu>
          <MenuItem name="6">
            <Icon type="ios-navigate"></Icon>问题台账管理
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding:0}" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin:'0 20px'}"
            type="md-menu"
            size="18"
          ></Icon>
        </Header>
        <Content :style="{margin:'20px',background:'#fff',minHeight:'260px'}">Content</Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>
