'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('ad.html',{
      text: "智能保险箱",
      text1: "有安全感，才能稳稳的幸福",
      count: "" // 倒计时
    })
  }
}

module.exports = HomeController;
