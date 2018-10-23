<template>
<div class='detail'>
  <el-row>
    <el-col :sm='{span: 12, offset: 6}'>
    <el-header class="back"><i class="el-icon-arrow-left" @click='back'></i>{{product.name}}</el-header>
      <img :src="product.img" alt="">
      <el-card class="box-card">
        <div slot="header" class="clearfix" v-if='product.name'>
          <span>{{product.name}}</span>
        </div>
        <el-button type="primary" round v-if='product.h5'>
          <a :href="product.h5">
            <i class="el-icon-mobile-phone"></i>
            H5
          </a>
        </el-button>
        <el-button type="primary" round v-if='product.ppt'>
          <a :href="product.ppt">
            <i class="el-icon-tickets"></i>
            PPT
          </a>
        </el-button>
        <el-button type="primary" round v-if='product.video'>
          <a :href="product.video">
            <i class="el-icon-view"></i>
            视频
          </a>
        </el-button>
        <el-button type="primary" round v-if='product.page'>
          <a :href="product.page">
            <i class="el-icon-picture-outline"></i>
            彩页
          </a>
        </el-button>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  props: [
    'product'
  ],
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.detail
  width: 100%
  min-height: 100%
  background-color: #fff
  .back
    background-color: #b3c0d1
    color: #333
    line-height: 60px
    position: relative
    i
      font-size: 24px
      line-height: 60px
      position: absolute
      left: 20px
  .el-col
    min-width: 280px
  .el-col
    img
      width: 100%
      display: block
      margin: 0 auto
  .item
    margin-bottom: 18px
  .el-button
    font-size: 16px
    width: 100%
    text-align: center
    margin-bottom: 15px
    height: 46px
    line-height: 44px
    padding: 0
    a
      color: #fff
      width: 100%
      display: block
.el-button+.el-button
    margin-left: 0px
</style>
