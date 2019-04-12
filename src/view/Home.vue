<template>
    <div class="layout">
    <Layout>
      <Header>
        <Sider ref="side1"
          hide-trigger
          collapsible
          :collapsed-width="78"
          v-model="isCollapsed"
        >
          <Menu
            active-name="1-2"
            :open-names="['1']"
            theme="dark"
            width="auto"
            accordion
            :class="menuitemClasses"
          >
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                火灾监测与预警
              </template>
              <MenuItem name="1-1">安全评估分析</MenuItem>
              <MenuItem name="1-2">隐患历史记录</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                实战指挥分析
              </template>
              <MenuItem name="2-1">灾情历史记录</MenuItem>
              <MenuItem name="2-2">队站装备清单</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                党政建设分析
              </template>
              <MenuItem name="3-1">政治教育总览</MenuItem>
              <MenuItem name="3-2">党政要闻总览</MenuItem>
              <MenuItem name="3-3">论坛数据统计</MenuItem>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                党政建设分析
              </template>
              <MenuItem name="4-1">人员评估</MenuItem>
              <MenuItem name="4-2">部位评估</MenuItem>
            </Submenu>
            <Submenu name="5">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                业务风险管控
              </template>
              <MenuItem name="5-1">异常性风险</MenuItem>
              <MenuItem name="5-2">时效性风险</MenuItem>
              <MenuItem name="5-3">合规性风险</MenuItem>
            </Submenu>
            <MenuItem name="6">
                <Icon type="ios-navigate"></Icon>
                问题台账管理
            </MenuItem>
          </Menu>
        </Sider>
      </Header>
    </Layout>
    
  </div>
</template>
<script>
export default {
    
}
</script>