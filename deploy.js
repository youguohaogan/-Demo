// 第一步执行命令npm run build
// 第二步 dist目录压缩成dist.zip
// 第三步连接ssh服务器
// 第四步上传dist.zip至 /data/analytically-system目录下
// 第五步解压zip执行命令 unzip -O CP936  dist.zip
// 第六步删除dist.zip rm -f dist.zip
// 第七步删除本地dist.zip和dist目录
global.hasBuilding = false
const { NodeSSH } = require('node-ssh')
const ssh = new NodeSSH()
const fs = require('fs')
const path = require('path')
const shell = require('shelljs')
const compressing = require('compressing')
deleteFolderRecursive('./dist') // 清空上一次的缓存
function deleteFolderRecursive (url) {
  // 删除文件及文件夹
  let files = []
  /**
   * 判断给定的路径是否存在
   */
  if (fs.existsSync(url)) {
    /**
     * 返回文件和子目录的数组
     */
    files = fs.readdirSync(url)
    files.forEach(function (file) {
      const curPath = path.join(url, file)
      // console.log(curPath)
      /**
       * fs.statSync同步读取文件夹文件，如果是文件夹，在重复触发函数
       */
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    /**
     * 清除文件夹
     */
    fs.rmdirSync(url)
  } else {
    console.log('给定的路径不存在，请给出正确的路径')
  }
}
// eslint-disable-next-line no-unused-vars
function uploadFile () {
  console.log('开始远程连接ssh')
  ssh.connect({
    host: Buffer.from(`MTAuMTAxLjQwLjIxNw==`, 'base64').toString(),
    username: Buffer.from(`aGRi`, 'base64').toString(),
    password: Buffer.from(`RGV2MTIzNDU2`, 'base64').toString()
  }).then(async () => {
    console.log('远程ssh连接成功')
    // 上传网站的发布包至configs中配置的远程服务器的指定地址
    try {
      await ssh.execCommand('sudo su')
      await ssh.putFile(`./dist.zip`, `/data/analytically-system/dist.zip`)
      await ssh.execCommand('cd /data/analytically-system && sudo rm -rf dist/ && sudo unzip -o  dist.zip && sudo rm -f dist.zip')
      console.log('文件上传执行成功')
      deleteFolderRecursive('./dist')
      fs.unlinkSync(`${__dirname}/dist.zip`)
      close()
    } catch (err) {
      deleteFolderRecursive('./dist')
      fs.unlinkSync(`${__dirname}/dist.zip`)
      console.log(err, '文件上传执行失败')
      close()
    }
  }).catch((err) => {
    console.log('SSH is fail:', err)
    deleteFolderRecursive('./dist')
    fs.unlinkSync(`${__dirname}/dist.zip`)
    close()
  })
}
function close () {
  // deleteFolderRecursive('./dist/')
  // fs.unlink('./dist.zip')
  process.exit(0)
}
function isFileExisted (path_way) {
  // js判断文件存不存在
  return new Promise((resolve, reject) => {
    fs.access(path_way, (err) => {
      if (err) {
        reject(false)// "不存在"
      } else {
        resolve(true)// "存在"
      }
    })
  })
}
// 第一步执行命令 npm run build
const child = shell.exec('npm run build', { async: true })
child.stdout.on('data', async function (data) {
  try {
    await isFileExisted('./dist')
    if (!global.hasBuilding) {
      global.hasBuilding = true
      console.log('文件存在')
      setTimeout(async () => {
        await startZIP()
        uploadFile()
      }, 12000)
    }
  } catch (err) {
    console.log(err, '文件不存在')
  }
})
// 第二步压缩dist目录为dist.zip
// eslint-disable-next-line no-unused-vars
// 开始压缩文件
function startZIP () {
  return new Promise((resolve, reject) => {
    compressing.zip
      .compressDir('./dist', './dist.zip')
      .then(() => {
        console.log('文件压缩成功')
        resolve()
      })
      .catch(err => {
        console.log(err, '文件压缩失败')
        reject()
      })
  })
}
