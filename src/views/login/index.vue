<template>
  <div class="login">
    <div class="login-form">
      <img src=""
           class="logo">
      <p>房车宝BI</p>
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm">
        <el-form-item prop="identifier">
          <el-input placeholder="输入用户名"
                    v-model="ruleForm.identifier">
            <svg t="1618816432863"
                 slot="prefix"
                 class="icon"
                 viewBox="0 0 1024 1024"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="2039"
                 width="20"
                 height="20">
              <path d="M621.8 601.2c86.8-49.5 146.1-141.9 146.1-249 0-158.9-128.8-287.7-287.7-287.7S192.5 193.3 192.5 352.2c0 107.1 59.2 199.5 146.1 249-150 54.5-259.7 192.7-272.3 358.3h63.9c16.2-178.9 166.9-319.6 350-319.6s333.8 140.7 350 319.6h63.9c-12.6-165.6-122.3-303.8-272.3-358.3z m-365.4-249c0-123.4 100.4-223.7 223.8-223.7S704 228.8 704 352.2 603.6 575.9 480.2 575.9 256.4 475.6 256.4 352.2z"
                    p-id="2040"
                    fill="#cdcdcd"></path>
            </svg>
          </el-input>
        </el-form-item>
        <el-form-item prop="credential">
          <el-input placeholder="请输入密码"
                    v-model="ruleForm.credential"
                    type="password">
            <svg t="1618816515175"
                 class="icon"
                 slot="prefix"
                 viewBox="0 0 1024 1024"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="3111"
                 width="20"
                 height="20">
              <path d="M838.144 352.256h-120.32v-133.12c0-105.984-86.016-192-192-192h-27.136c-105.984 0-192 86.016-192 192v133.12H185.856c-50.688 0-92.16 41.472-92.16 92.16v421.888c0 50.688 41.472 92.16 92.16 92.16h652.288c50.688 0 92.16-41.472 92.16-92.16V444.416c0-50.688-41.472-92.16-92.16-92.16z m-470.016-133.12c0-72.192 58.368-130.56 130.56-130.56h27.136c72.192 0 130.56 58.368 130.56 130.56v130.56H368.128V219.136z m500.736 647.168c0 16.896-13.824 30.72-30.72 30.72H185.856c-16.896 0-30.72-13.824-30.72-30.72V444.416c0-16.896 13.824-30.72 30.72-30.72h652.288c16.896 0 30.72 13.824 30.72 30.72v421.888z"
                    fill="#cdcdcd"
                    p-id="3112"></path>
              <path d="M512 499.712c-62.976 0-113.664 28.672-113.664 64 0 29.184 35.328 54.272 82.944 61.44v99.328c0 16.896 13.824 30.72 30.72 30.72s30.72-13.824 30.72-30.72v-99.328c47.616-7.68 82.944-32.256 82.944-61.44 0-35.328-50.688-64-113.664-64z"
                    fill="#cdcdcd"
                    p-id="3113"></path>
            </svg>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button size="small"
                 type="primary"
                 :loading="loading"
                 :disabled="loading"
                 @click="submitForm('ruleForm')">登录</el-button>
    </div>
  </div>
</template>
<script>
import {
  Form,
  FormItem,
  Input,
  Button
} from 'element-ui'
import { mapMutations, mapState } from 'vuex'
import { getToken } from '@/utils/tools'
export default {
  name: 'Login',
  components: {
    'el-button': Button,
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input
  },
  data () {
    return {
      ruleForm: {
        identifier: '',
        credential: ''
      },
      loading: false,
      rules: {
        identifier: { required: true, message: '请填写用户名', trigger: 'blur' },
        credential: { required: true, message: '请填写密码', trigger: 'blur' }
      }
    }
  },
  computed: {
    ...mapState('login', ['user'])
  },
  beforeRouteEnter (to, from, next) {
    // 判断是否已经登录,如果已经登录则跳转到首页
    next(vm => {
      const { emsNum, sessionId } = vm.user
      if (emsNum && sessionId) {
        next('/')
      } else {
        next()
      }
    })
  },
  methods: {
    ...mapMutations('login', ['SET_USER']),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submit()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submit () {
      if (this.loading) return
      this.loading = true
      const token = 'eyJlbXNOdW0iOiIxMTExMDIwMjEwMjEiLCJzZXNzaW9uSWQiOiJleUpoYkdjaU9pSklVelV4TWlJc0lucHBjQ0k2SWtSRlJpSjkuZUp3MWp0MXV3akFNaGRfRjE0MlVoUHpSdXhiS0E2Qkp1MWgyRVlxaG5kb1ZKZW1ZaEhqM3VVV3pmT1BQNTlqbkFWLTVoeEswTWxvNHBSbDN6akJsWldCT2JwQnBLUW1jWEd2YkFBV2stVVRpaDRjMllzajQzbUZFRHlVdlBGekh2RnNoelI0a2w0Snh4YVI3RTZaVTI1SmJENlRxejdRV2x1dkZjZ3NwM2FkNFhoMWFtTHB1YXJ2WlZfdEtOOWFwdWxMR0NXZWtQRFRWZHJXbk1PUlZmUjN1cHRjdmxrT2UwM0tXaGpsaF9BN2pLNFNnNGtzU2FnOVB5dC1uUlBuek5MSXc1NDZSLUFmandrTW1QMzFTU2prckNzRGYyejl3YWdGOU91SWxZdXFndklRaFlRRnhHcEN1Zlh3LV93Q0dyMXN2LjJNVzhnOGVIblU1WnlYeXY2ME5nOHQxd2JnRXBTMkNCeWxRYlUzRlM0YUxXc2NFV2RFbW1rS3hodDVSX0hmUWtzaDg0Q3VzVC16R3lydncyQ3N3enNRIiwiaGFzQWRtaW4iOmZhbHNlfQ=='
      localStorage.setItem('user', token)
      this.SET_USER(getToken())
      this.$router.replace({
        path: '/'
      }).catch(() => { })
    }
  }

}
</script>
<style lang="less" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 320px;
    .logo {
      display: block;
      width: 102px;
      height: 102px;
      margin: 10px auto;
    }
    p {
      color: rgba(216, 12, 24, 100);
      font-size: 28px;
      text-align: center;
    }
    .el-form {
      padding-top: 20px;
    }
    .el-form-item {
      margin-bottom: 15px;
      .icon {
        position: relative;
        top: 4px;
      }
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
