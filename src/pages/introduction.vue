<template lang="pug">
Page
  Header
    Navbar
      Title(:title="$t('index.introduction')")
  Content.outer-content(padding)
    h5 简介
    p 这个项目是进行移动端H5开发的种子项目, 相关的初始化的配置已经搞定, 且在components页面中写了一些demo, 这个可以再实际项目中删减.
    h5 组成
    p Vimo在初始化时只安装了必要的结构及布局组件: App/Nav/Page/Header/Content/Footer, 其余的组件需要按需引入.
    h5 全局方法
    p 如果获取当前平台配置, 可在业务代码中执行: vm.$config; 平台对应信息: vm.$platform
    p 打印window.VM可以看到更多的详情.
    h5 编码规范
    p StandardJS
    h5 主题
    p Vimo框架自带基础结构的样式, 但是各个平台的具体样式则是在业务中的theme文件中定义的, 包括预设的IOS/MD两个皮肤, 如果业务需要改写皮肤, 建议根据其中一个预设的样式作为模板改写, 并且按需选择生效的样式组件避免加载包过大.
    h5 建议
    p 
      span 如果有问题和已提issue, 或者通过我的主页找到我: 跳转到
      a(target="_blank" href="http://xiangsongtao.com") 主页
    h5 文档
    ul 
      li 
        span 跳转到
        a(target="_blank", href="https://dtfe.github.io/vimo/") 组件使用文档
      li
        span 跳转到
        a(target="_blank", href="https://dtfe.github.io/vimo-demo/") Demo示例
</template>
<script type="text/javascript">
  export default{
    name: 'Introduction',
    data () {
      return {}
    },
    props: {},
    watch: {},
    computed: {},
    methods: {},
    created () {},
    mounted () {},
    activated () {},
    deactivate () {},
    components: {},
    destroyed () {}
  }
</script>
<style scoped lang="less"></style>
