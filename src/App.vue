<template>
  <div id="app" v-loading.fullscreen.lock="fullscreenLoading">
    <div v-show="typeof this.$route.query.id === 'undefined'">
      <el-header>同方全球人寿</el-header>
      <el-main>
        <el-row>
          <el-col v-for='(product, index) in products' :key='index'>
            <el-card :body-style="{ padding: '0px'}">
              <img :src="product.img" class="image">
              <div style="padding: 14px 14px 30px 14px;">
                <span>{{product.name}}</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">
                    <router-link :to="{path: '/detail', query: {'id': index}}">查看更多</router-link>
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </div>
    <router-view :product='products[proNum]'></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      'products': [
        {
          'name': '「聚财人生」养老年金保险',
          'h5': 'https://www.rrxiu.net/view-sz4gf1',
          'ppt': 'http://www.aegonthtf.com/down/1017/jcrspx.pdf',
          'video': '',
          'page': 'http://www.aegonthtf.com/down/1017/faszy.jpg',
          'img': './static/images/jcrs.jpg'
        },
        {
          'name': '「康爱一生」（多倍保）',
          'h5': 'https://www.rrxiu.net/view-ekdumy',
          'ppt': 'http://www.aegonthtf.com/down/20180821/同方全球康健一生多倍保 - 标准篇V3.0.pdf',
          'video': 'https://brokerannday-1256449920.cos.ap-shanghai.myqcloud.com/%E5%BA%B7%E7%88%B1%E4%B8%80%E7%94%9F%EF%BC%88%E5%A4%9A%E5%80%8D%E4%BF%9D%EF%BC%89%E9%AB%98%E6%B8%85%E7%89%88.mp4',
          'page': 'http://www.aegonthtf.com/down/jdkays.jpg',
          'img': './static/images/kadbb.jpg'
        },
        {
          'name': '传世荣耀',
          'h5': 'http://u4554935.viewer.maka.im/k/6OYYOO3O',
          'ppt': 'http://www.aegonthtf.com/down/20180821/传世荣耀终身寿1.0.pdf',
          'video': 'https://brokerannday-1256449920.cos.ap-shanghai.myqcloud.com/180926-%E4%BC%A0%E4%B8%96%E8%8D%A3%E8%80%80.mp4',
          'page': 'http://www.aegonthtf.com/down/jdcsryv5012.jpg',
          'img': './static/images/csry.jpg'
        },
        {
          'name': '康健一生多倍保',
          'h5': 'http://u4554935.viewer.maka.im/k/75WPU6VL',
          'ppt': 'http://www.aegonthtf.com/down/20180821/同方全球康健一生多倍保 - 标准篇V3.0.pdf',
          'video': 'https://brokerannday-1256449920.cos.ap-shanghai.myqcloud.com/180926-%E5%BA%B7%E5%81%A5%E4%B8%80%E7%94%9F%EF%BC%88%E5%A4%9A%E5%80%8D%E4%BF%9D%EF%BC%89.mp4',
          'page': 'http://www.aegonthtf.com/down/jdjkdbb.jpg',
          'img': './static/images/kjysdbb.jpg'
        },
        {
          'name': '乐无忧B款',
          'h5': 'http://u4554935.viewer.maka.im/k/A967UAP2',
          'ppt': 'http://www.aegonthtf.com/down/20180821/乐无忧B培训PPT.pdf',
          'video': '',
          'page': 'http://www.aegonthtf.com/down/jdwy.jpg',
          'img': './static/images/lwy.jpg'
        },
        {
          'name': '康健一生',
          'h5': 'http://u4554935.viewer.maka.im/k/037ON4FB',
          'ppt': 'http://www.aegonthtf.com/down/20180821/康健全保险培训资料v2.0.pdf',
          'video': 'https://brokerannday-1256449920.cos.ap-shanghai.myqcloud.com/180926-%E5%BA%B7%E5%81%A5%E4%B8%80%E7%94%9F.mp4',
          'page': 'http://www.aegonthtf.com/down/zsjdjbbx.jpg',
          'img': './static/images/kjys.jpg'
        },
        {
          'name': '御护一生',
          'h5': 'http://u4554935.viewer.maka.im/k/L338JAS5',
          'ppt': 'http://www.aegonthtf.com/down/20180821/御护一生产品2.0.pdf',
          'video': '',
          'page': 'http://www.aegonthtf.com/down/jdyhys.jpg',
          'img': './static/images/yhys.jpg'
        }
      ],
      proNum: 0,
      fullscreenLoading: false
    }
  },
  created () {
    this.proNum = this.$route.query.id
  },
  computed: {
  },
  watch: {
    $route (to, from) {
      if (typeof to.query.id !== 'undefined') {
        this.proNum = to.query.id
      }
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
html,body
  margin: 0
  height: 100%
  background-color: #e9eef3
#app
  height: 100%
.el-header
  background-color: #B3C0D1
  color: #333
  text-align: center
  line-height: 60px
.el-main
  background-color: #E9EEF3
  color: #333
  .el-col
    min-width: 290px
    margin-top: 10px
.time
  font-size: 13px
  color: #999
.bottom
  margin-top: 13px
  line-height: 12px
.button
  padding: 0
  float: right
.image
  width: 100%
  display: block
.clearfix:before
  display: table
  content: ""
.clearfix:after
  clear: both
a
  color: #397BE6;
  text-decoration: none;
  -webkit-backface-visibility: hidden;
a:link
  color: #397BE6;
  text-decoration: none;
a:visited
  color: #397BE6;
  text-decoration: none;
a:hover
  color: #397BE6;
  text-decoration: none;
a:active
  color: #397BE6;
  text-decoration: none;
</style>
