'use strict';

const Controller = require('egg').Controller;

class Appdateils1Controller extends Controller {
  async index() {
   await this.ctx.render('Appdateils1.html',{
    msg:'保险箱详情',
    text:'保险箱详情',
    txt:'牛批保险箱',
    textTwo:'品牌',
    txtTwo: '三星',
    textThree:'序列号',
    txtThree: 'gfrgr44fdfd5fd',
    textFore: '设备IP',
    txtFore: '192.168.1.1',
    textFive: '固件版本',
    txtFive: 'V2.01245',
    textSix: '连接状态',
    txtSix : '已连接'
   })
  }
}

module.exports = Appdateils1Controller;