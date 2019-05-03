'use strict';

const Controller = require('egg').Controller;

class AppbaoController extends Controller {
  async index() {
   await this.ctx.render('AppBao.html',{
    title:'报警记录',
    subtitler:'有人移动保险箱',
        subtitler3:'修改配置',
        subtitleTow:'2分钟前',
        subtitleTow2:'1天前',
        subtitleTow3:'18天前',
        name:'幻想乡',
        subtitler2:'保险箱电量低于20%',
        subtitler4:'保险箱电量低于30%'
   })
  }
}

module.exports = AppbaoController;