'use strict';

const Controller = require('egg').Controller;

class AppDateilsController extends Controller {
  async index() {
    await this.ctx.render('AppDateils.html',{
        imgurlone: "/public/images/status.png",
        imgurltwo: "/public/images/Relation1.png",
        imgurlthree: "/public/images/add.png",
        strongbox: "保险箱",
  
        imgurl: "/public/images/safe@2x.png",
        msgone: "N·B",
        strongbox: "保险箱",
        text: "最后一次位置：幻想乡",
        txt: "监听此保险箱",
  
        np: "牛批",
        Intelligence: "智能",
        strongbox: "保险箱",
        msg: "别说了",
        Love: "我爱了"
    })
  }
}

module.exports = AppDateilsController;