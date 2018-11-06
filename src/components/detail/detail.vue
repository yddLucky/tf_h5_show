<template>
<div class='detail'>
  <scroll ref="pro" class="pro">
    <el-row>
      <el-col :sm='{span: 12, offset: 6}'>
      <el-header class="back"><i class="el-icon-arrow-left" @click='back'></i>{{product.name}}</el-header>
        <img :src="product.img" alt="" draggable="false">
        <el-card class="box-card">
          <div slot="header" class="clearfix" v-if='product.name'>
            <span>{{product.name}}</span>
            <span class="addition" @click="showAdd" v-if="product.addition.length">可附加<i class="el-icon-caret-right"></i></span>
          </div>
          <el-button type="primary" round v-if='product.h5'>
            <a :href="product.h5" ondragstart="return false">
              <i class="el-icon-mobile-phone"></i>
              H5
            </a>
          </el-button>
          <el-button type="primary" round v-if='product.ppt'>
            <a :href="product.ppt" ondragstart="return false">
              <i class="el-icon-tickets"></i>
              PPT
            </a>
          </el-button>
          <el-button type="primary" round v-if='product.video'>
            <a :href="product.video" ondragstart="return false">
              <i class="el-icon-view"></i>
              视频
            </a>
          </el-button>
          <el-button type="primary" round v-if='product.page'>
            <a :href="product.page" ondragstart="return false">
              <i class="el-icon-picture-outline"></i>
              彩页
            </a>
          </el-button>
          <el-button type="primary" round v-if='product.term'>
            <a :href="product.term" ondragstart="return false">
              <i class="el-icon-document"></i>
              条款
            </a>
          </el-button>
          <el-button type="primary" round v-if='product.rate'>
            <a :href="product.rate" ondragstart="return false">
              <i class="el-icon-document"></i>
              费率
            </a>
          </el-button>
        </el-card>
      </el-col>
    </el-row>
  </scroll>
  <transition name="fade">
    <div class="additionWraper" v-if="show" @click="hide">
      <scroll class="additionCont" ref="addition">
        <div @click.stop="" class="cont">
          <div class="additionHeader">可附加：</div>
          <div class="additionList" v-for="(item, index) in product.addition" :key="index">
            <div class="additionTit">{{item.name}}</div>
            <ul>
              <li><a :href="item.term" ondragstart="return false"><i class="el-icon-document"></i>条款</a></li>
              <li><a :href="item.rate" ondragstart="return false"><i class="el-icon-document"></i>费率</a></li>
            </ul>
          </div>
        </div>
      </scroll>
    </div>
  </transition>
</div>
</template>

<script type='text/ecmascript-6'>
import Scroll from 'base/scroll/scroll'
export default {
  data () {
    return {
      show: false
    }
  },
  created () {
  },
  props: [
    'product'
  ],
  methods: {
    log () {
      console.log(1)
    },
    showAdd () {
      this.show = true
      this.$emit('initScroll', false)
      this.$refs.pro.disable()
    },
    hide () {
      this.show = false
      this.$emit('initScroll', true)
      this.$refs.pro.enable()
    },
    back () {
      this.$router.go(-1)
    }
  },
  components: {
    Scroll
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.detail
  width: 100%
  height: 100%
  background-color: #fff
  .pro
    position: relative
    height: 100%
    overflow: hidden
    .el-row
      padding-bottom: 40px
  .additionWraper
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: hidden
    background-color: rgba(0, 0, 0, 0.5)
    @media (min-width: 768px)
      width: 50%
      left: 25%
    &.fade-enter-active, &.fade-leave-active
      transition: all .3s linear
    &.fade-enter, &.fade-leave-to
      transform: translate3d(100%, 0, 0)
    .additionCont
      width: 80%
      min-width: 320px
      height: 100%
      background-color: #fff
      position: absolute
      right: 0
      top: 0
      box-sizing: border-box
      .cont
        padding: 0 20px 40px
        min-height: 100%
        box-sizing: border-box
        .additionHeader
          font-size: 18px
          line-height: 40px
          border-bottom: 1px solid #ebeef5
        .additionList
          margin-top: 15px
          padding: 0 15px
          border: 1px solid #e6e9f0
          box-shadow: 0 3px 10px 0 rgba(209, 213, 222, 0.15)
          .additionTit
            position: relative
            font-size: 16px
            line-height: 24px
            margin: 0 -15px
            padding: 15px
            color: #0e90d2
            font-weight: 700
            border-bottom: 1px solid #ebeef5
            &:before
              content: ""
              position: absolute
              left: 10px
              top: 15px
              height: 24px
              border-left: 3px solid #0e90d2
          ul
            li
              border-bottom: 1px solid #ebeef5
              a
                display: block
                width: 100%
                color: #303133
                font-size: 16px
                padding: 20px 0
              &:last-child
                border-bottom: none
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
    .addition
      float: right
      color: #397be6
      position: relative
      cursor: pointer
      &:before
        content: ''
        position: absolute
        top: -10px
        left: -10px
        right: -10px
        bottom: -10px
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
