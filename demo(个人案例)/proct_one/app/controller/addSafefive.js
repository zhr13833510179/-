'use strict';

const Controller = require('egg').Controller;

class AddSafefiveController extends Controller {
  async index() {
    await this.ctx.render('addSafefive.html',{
      png: "/public/images/状态栏.png",
      return_png: "/public/images/Return.png",
      add: "添加保险箱",
      ico_png:"/public/images/ico.png",
      add_box: "添加保险箱",
      automatic: "扫一扫保险箱二维码即可自动添加保险箱",
      qr_code: "扫描二维码添加"
    })
  }
}

module.exports = AddSafefiveController;