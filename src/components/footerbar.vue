<style lang="less" scoped>
.footerbarview {
    width: 100%;
    .footerbar {
        width: 100%;
        background: #22272b;
        padding: 35px 0;
        box-sizing: border-box;
        .w1600 {
        max-width: 1600px;
        min-width: 320px;
        margin: 0px auto;
        .service {
            // margin-bottom: 3%;
            .flogo {
            text-align: left;
            float: left;
            padding-right: 5%;
            margin-right: 5%;
            }
            @media (max-width: 1640px) {
            .flogo {
                width: 100%;
                margin-bottom: 35px;
                padding-right: 0;
                margin-right: 0;
            }
            }
            .left {
            width: 15%;
            float: left;
            padding-right: 5%;
            margin-right: 5%;
            text-align: left;
            dt {
                margin-bottom: 30px;
                span {
                font-size: 18px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #ffffff;
                line-height: 25px;
                }
            }
            dd {
                margin-bottom: 15px;
                margin-left: 0px;
                a {
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #ffffff;
                line-height: 20px;
                }
            }
            }
            .centre {
            width: 30%;
            float: left;
            padding-right: 5%;
            margin-right: 5%;
            text-align: left;
            dt {
                margin-bottom: 30px;
                span {
                font-size: 18px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #ffffff;
                line-height: 25px;
                }
            }
            dd {
                margin-bottom: 15px;
                margin-left: 0px;
                span {
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #ffffff;
                line-height: 20px;
                }
            }
            }
            .right {
            width: 10%;
            min-width: 138px;
            float: right;
            dl {
                img {
                width: 138px;
                border: 1px solid #fff;
                }
                p {
                color: #fff;
                }
            }
            }
        }
        .servicelink {
            color: #fff;
            text-align: left;
            // padding-top: 15px;
            // border-top: 1px solid #4e5255;
            h3 {
            font-size: 16px;
            margin-bottom: 10px;
            }
            .con {
            font-weight: 100;
            a {
                color: #fff;
            }
            i {
                padding: 0 18px;
            }
            }
        }
        }
    }
    @media (max-width: 1640px) {
        .footerbar {
        padding: 35px 5%;
        }
    }
    .copyright {
        background: #22272b;
        border-top: 1px solid #4e5255;
        padding: 16px 0;
        color: #ddd;
        font-weight: normal;
        text-align: center;
        .w1600 {
        max-width: 1600px;
        min-width: 320px;
        margin: 0px auto;
        }
    }
    .clear {
        clear: both;
    }
}
</style>


<template>
  <div class="footerbarview">
    <!-- 底栏 -->
    <div class="footerbar">
      <div class="w1600">
        <div class="service">
          <div class="flogo"><img :src="logo" /></div>
          <!-- <div class="left">
            <dl>
              <dt><span>智慧知识产权</span></dt>
              <dd>
                <a @click="jump('/agreement/agreement')" target="_blank"
                  >隐私声明</a
                >
              </dd>
              <dd><a @click="jump()" target="_blank">关于我们</a></dd>
            </dl>
          </div>
          <div class="centre">
            <dl>
              <dt><span>联系我们</span></dt>
              <dd><span>电话：400-679-8999</span></dd>
              <dd><span>邮箱：kefu@rongketech.com</span></dd>
              <dd><span>地址：北京市顺义区信中北街16号院1号楼1层1-12</span></dd>
              <dd><span>工作时间：9：00 - 18：00</span></dd>
            </dl>
          </div>
          <div class="right">
            <dl>
              <img :src="qrCode" alt="" />
              <p>薪必果APP</p>
            </dl>
          </div> -->
          <div class="clear"></div>
        </div>
        <div class="servicelink">
          <h3>友情链接</h3>
          <div class="con">
            <a @click="jump('https://www.gongsibao.com/')">公司宝</a>
            <i>|</i>
            <a @click="jump('http://www.sinotone.net/')">汉唐咨询</a>
            <i>|</i>
            <a @click="jump('http://pku.pkusp.com.cn/')">北大科技园</a>
            <i>|</i>
            <a @click="jump('https://www.jdcloud.com/cn/')">京东云</a>
            <i>|</i>
          </div>
        </div>
      </div>
    </div>
    <!-- ICP -->
    <div class="copyright">
      <div class="w1600">版权所有汉唐融科（北京）科技有限公司</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerbar',
  data() {
    return {
        logo: require("../../public/imgs/home/logoimg.png"),
        qrCode: require("../assets/icon/wm.png")
    }
  },
  methods: {
    jump(url) {
      if (!url) {
        return;
      }
      if (url == "/agreement/agreement") {
        let routeData = this.$router.resolve({
          path: url,
          query: {},
        });
        window.open(routeData.href, "_blank");
      } else {
        // this.$router.push({path: url})
        window.open(url);
      }
    }
  },
  components: {

  }
}
</script>
