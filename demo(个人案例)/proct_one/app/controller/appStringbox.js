'use strict';

const Controller = require('egg').Controller;

class AppStringboxController extends Controller {
  async index() {
   await this.ctx.render('AppStringbox.html',{
      msg: '智能保险箱',
            text: '详情',
            imgurl:'/public/images/status.png',

            imgurltwo:'/public/images/Return@2x.png',
            msgtwo: '最后一次位置：幻想乡',
            texttwo: '当前状态：打开',
            imgurlthree:'/public/images/icon.png',

            msgthree: '灵敏度设置',
            textthree: '灵敏度介绍',
            safe: '保险箱',
            opendoor: '开门记录',
            Alarmrecord: '报警记录',
            Relation: '关联记录',
            urlone:'/public/images/fase2@2x.png',
            urltwo: '/public/images/Opendoor1@3x.png',
            urlthree:'/public/images/Callthepolice1@3x.png',
            urlfore:'/public/images/Relation1@3x.png',
   })
  }
}

module.exports = AppStringboxController;
