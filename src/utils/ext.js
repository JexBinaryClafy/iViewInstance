/* 基于原型拓展实用方法 */

//标准AJAX请求头，便于正式环境发布时进行配置修改
Vue.prototype.URLHEAD = 'http://114.115.153.22:3333/Interface/API.aspx?Method='

//对象深拷贝，浅拷贝直接使用Object.assign即可
Vue.prototype._deepCopy = function (obj) {
  if (typeof obj !== 'object') {
    return obj;
  }
  var newobj = {};
  for (var attr in obj) {
    newobj[attr] = obj[attr];
  }
  return newobj;
}

//时间漫游，通过参数来获取一定时间前或时间后的日期
Vue.prototype._dateShift = function (offset) {
  let now = new Date()
  let newTime = new Date(now.getTime() + (offset * 24 * 60 * 60 * 1000))
  let obj = {
    year: newTime.getFullYear(),
    month: (newTime.getMonth() + 1 < 10) ? '0' + (newTime.getMonth() + 1) : newTime.getMonth() + 1,
    day: newTime.getDate() < 10 ? '0' + newTime.getDate() : newTime.getDate()
  }
  return `${obj.year}-${obj.month}-${obj.day}`
}

//echarts渲染方法，封装了DOM初始化、setOption以及resize事件的响应
Vue.prototype._genChart = function (wrappId, option) {
  let wrapper = document.getElementById(wrappId);
  let newChart = echarts.init(wrapper);
  newChart.setOption(option);
  newChart.resize();
  window.resize = function () {
    newChart.resize();
  };
  return newChart;
}
