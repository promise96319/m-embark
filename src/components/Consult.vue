<template>
<!-- 咨询服务 -->
<footer class="consult">
  <!-- <section @click="outLink" class="edit-message">
    <van-popup v-model="handleUnreadMsg" position="top" :overlay="false" :lock-scroll="false">
      <img :src="logoImg" class="logo-img">
      <p>有方小助手:</p>
      <p>{{ unReadMsg }}</p>
       </van-popup>

    <img :src="editIcon" class="edit-img">
    <span id="unread-num" v-if="unReadMsgNum">{{ unReadMsgNum }}</span>
  </section> -->
  <a :href="goldDataUrl">
    <section class="edit-message">
      <img :src="editIcon" class="edit-img">
    </section>
  </a>
  <!-- <section @click="outLink" class="consult-link">
    在线咨询 &nbsp; <strong>+</strong>
  </section> -->

  <a :href="goldDataUrl">
    <section class="consult-link">
      免费咨询 &nbsp; <strong>+</strong>
    </section>
  </a>

  <!-- TODO 更改表单提交的地址 -->
  <!-- <section class="contact-info">
    <h5>留言板</h5>
    <van-field type="text" clearable v-model="userInfo.username" required placeholder="您的称呼..." maxlength="12" :error-message="errorNameMsg" />
    <van-field type="tel" clearable v-model="userInfo.telNumber" required placeholder="您的手机号码..." :error-message="errorTelMsg" maxlength="14" />
    <van-field type="textarea" clearable v-model="userInfo.message" placeholder="有任何问题您都可在此留言..." rows="1" autosize maxlength="150"></van-field>
    <van-button type="primary" size="large" @click="handleSubmitUserInfo" :loading="isLoading">提交</van-button>
  </section> -->

  <section>
    <div class="consult-code">
      <img :src="consultImg" class="consult-img">
      <p>立刻扫码咨询</p>
    </div>
  </section>

  <section class="embark-filing">泸ICP备17047449号-2@2018有方教育</section>

</footer>
</template>

<script>
import {
  Toast
} from 'vant'
import axios from 'axios'
import { goldDataUrl } from '@/globalConfig.js'

export default {
  data () {
    return {
      consultImg: require('@/assets/images/code.png'),
      editIcon: require('@/assets/images/chat.svg'),
      logoImg: require('@/assets/images/logo.png'),
      unReadMsgNum: 0,
      unReadMsg: '',
      goldDataUrl: goldDataUrl,
      // errorNameMsg: '',
      // errorTelMsg: '',
      // userInfo: {
      //   username: '',
      //   telNumber: '',
      //   message: ''
      // },
      // isLoading: false,
      flag: true
    }
  },
  methods: {
    // outLink () {
    //   _MEIQIA('allSet', () => _MEIQIA('showPanel'))
    //   _MEIQIA('init')
    // },
    // handleUnReadMsg (msg) {
    //   let text = ''
    //   let num = 0
    //   if (msg === 'hasBeenRead') { // 消息已被阅读
    //     num = 0
    //   } else if (typeof(msg) === 'object') {
    //     let unreadNum = this.unReadMsgNum,
    //       lastMsg = msg[msg.length - 1]
    //     num = isNaN(+unreadNum) ? msg.length : +unreadNum + msg.length
    //     // content_type 是消息的类型：
    //     // text（文字）、photo（图片）、file（文件）
    //     // content 是消息的内容
    //     if (lastMsg.content_type === 'text') {
    //       // 文字消息中可能会存在表情图片，由于路径问题
    //       // 将文字消息中的图片处理为文字'[表情]'
    //       text = lastMsg.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, '[表情]')
    //     } else if (lastMsg.content_type === 'photo') {
    //       text = '[图片]'
    //     } else if (lastMsg.content_type === 'file') {
    //       text = '[文件]'
    //     } else {
    //       text = '[新消息]'
    //     }
    //   }
    //   // 未读消息数量
    //   this.unReadMsgNum = num
    //   // 最后一条消息的内容
    //   this.unReadMsg = text
    // }
    // ,judgeSubmitData () {
    //   this.errorNameMsg = ''
    //   this.errorTelMsg = ''
    //   if (this.userInfo.username.length < 2) {
    //     this.flag = false
    //     return this.errorNameMsg = '用户名过短'
    //   }
    //   if (!(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/).test(this.userInfo.telNumber)) {
    //     this.flag = false
    //     return this.errorTelMsg = '手机号码格式错误'
    //   }
    // },
    // handleSubmitUserInfo () {
    //   this.judgeSubmitData()
    //
    //   if (!this.flag) return
    //
    //   // this.isLoading = true
    //   axios.post('', this.userInfo)
    //     .then(function(res) {
    //       this.isLoading = false
    //       Toast.success({
    //         duration: 1000,
    //         message: '提交成功'
    //       })
    //     })
    //     .catch(function(err) {
    //       this.isLoading = false
    //       Toast.success({
    //         duration: 1000,
    //         message: '提交失败'
    //       })
    //     })
    // }
  },
  computed: {
    // handleUnreadMsg: {
    //   get () {
    //     if (this.unReadMsg) {
    //       /* 在一定时间后弹窗关闭 */
    //       setTimeout(() => {
    //         this.unReadMsg = ''
    //       }, (2500))
    //       return true
    //     } else {
    //       return false
    //     }
    //   },
    //   set () {}
    // }
  },
  mounted () {
    // _MEIQIA('getUnreadMsg', this.handleUnReadMsg)
  }
}
</script>

<style scoped>
/* 客户信息 */

.contact-info {
  margin: 2.6rem 1.2rem 2rem;
  padding: 0.5rem 0 0;
  border: 1px solid rgba(74, 144, 226, .8);
  border-radius: 1rem 1rem 0 0;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0.16rem 0.4rem 0 rgba(74, 144, 226, 0.33);
}

.contact-info h5 {
  line-height: 1.5rem;
}

button {
  margin-top: 1.2rem;
  border: none;
  background-color: rgba(74, 144, 226, 1);
}

/* 咨询服务 */

.edit-message {
  position: fixed;
  right: 1.2rem;
  bottom: 2rem;
  width: 2rem;
  height: 2rem;
  line-height: 2.4rem;
  border: 2px solid rgba(245, 245, 245, 1);
  border-radius: 1rem;
  background-color: rgba(74, 144, 226, .8);
  z-index: 9999;
}

/* 弹出框样式 */

/* #unread-num {
  position: absolute;
  top: -0.5rem;
  right: -0.2rem;
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  font-size: 0.6rem;
  line-height: 1rem;
  color: #fff;
  background-color: rgba(255, 0, 0, .98);
}

>>>.van-popup {
  height: 2.5rem;
  line-height: 1rem;
  padding: 0.4rem 1.2rem 0.4rem 2.3rem;
  box-sizing: border-box;
  text-align: left;
  color: rgba(78,78,78,1);
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(0,0,0,.1);
  border-top: 1px solid rgba(0,0,0,.1);
}

>>>.van-popup p:nth-child(2) {
  font-family: 'PingFang-Bold';
  font-size: 0.6rem;
  line-height: 0.8rem;
}

>>>.van-popup p:last-child {
  text-indent: 0.1rem;
  font-size: 0.5rem;
  line-height: 0.8rem;
  color: rgba(116,116,116,1);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.logo-img {
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;
  width: 1.6rem;
  height: 1.6rem;
}

.edit-message .unread-num {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.25rem;
  color: #fff;
  background-color: red;
} */

.edit-img {
  width: 70%;
}

.consult {
  padding-top: 3rem;
  text-align: center;
  position: relative;
  font-family: 'SourceHanSansCN-Medium';
  color: rgba(155, 155, 155, 1);
}

.consult-link {
  width: 7.2rem;
  height: 2rem;
  margin: 0 auto;
  line-height: 2rem;
  border-radius: 1rem;
  font-size: 0.64rem;
  letter-spacing: 0.006rem;
  color: #fff;
  background-color: rgba(74, 144, 226, 1);
  box-shadow: 0 0.16rem 0.4rem 0 rgba(74, 144, 226, 0.33);
}

.consult-code {
  position: absolute;
  bottom: 2.7rem;
  width: 7.8rem;
  height: 9.2rem;
  padding: 1.08rem 0.88rem;
  margin-left: 3.6rem;
  background-color: #fff;
  color: rgba(155, 155, 155, 1);
  font-size: 0.56rem;
  letter-spacing: 0.005rem;
  line-height: 1.3rem;
  border-radius: 0.32rem;
}

.consult-img {
  width: 100%;
  opacity: 0.75;
}

.embark-filing {
  z-index: -1;
  width: 100%;
  height: 7.6rem;
  padding-top: 5.6rem;
  margin-top: 6.4rem;
  color: #fff;
  font-size: 0.48rem;
  line-height: 1.1rem;
  background-color: rgba(74, 144, 226, 1);
}
</style>
