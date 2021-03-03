# 简介
基于electron，用于与用户交互，以及驱动彩印机的项目

## 运行

```shell
$ git clone https://github.com/LitStronger/printer-web.git
$ cd printer-web
$ npm install #安装失败的话，尝试更换npm源或者使用cnpm进行安装
$ npm start
```

## 打包

```shell
$ npm install electron-builder --save-dev
```

配置package.json [具体操作](https://liaoyq.club/2020/09/02/electron%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95/)

```shell
$ npm run dist
```

打包后的文件在dist文件夹下

更多详情见[官方文档](https://www.electronjs.org/docs/tutorial/quick-start)

## 页面

**1. index 主页面** 

操作选择 

**2. 其他页面 /pages**

- QRCode.html 二维码扫描获取图片
- print.html 打印界面
- randomGet.html 随机获取图片
- specification.html 说明页
- telephone.html 联系方式页
- ad.html 广告页

首页
![image](https://user-images.githubusercontent.com/44419860/109752192-eb15cb00-7c1a-11eb-9750-105c4de941b7.png)
随机获取
![image](https://user-images.githubusercontent.com/44419860/109752245-fec13180-7c1a-11eb-9cda-d495cc718b29.png)
准备打印
![image](https://user-images.githubusercontent.com/44419860/109752255-04b71280-7c1b-11eb-87d4-3675c80d86a1.png)


