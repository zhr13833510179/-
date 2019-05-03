'use strict';

const Controller = require('egg').Controller;

class AddSafeController extends Controller {
  async index() {
    await this.ctx.render('addSafe.html',{
        jiao33: "/public/images/Return.png",
        coffer0: "添加保险箱",
        coffer: "保险箱信息",
        coffer1: "保险箱品牌：三星",
        coffer2: "保险箱序列号：12335566hdhhjasdj",
        coffer3: "保险箱IP：192.168.1.1",
        coffer4: "添加保险箱"
    })
  }
}

module.exports = AddSafeController;