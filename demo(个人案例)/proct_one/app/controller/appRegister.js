'use strict';

const Controller = require('egg').Controller;

class AppRegisterController extends Controller {
  async index() {
    await this.ctx.render('appRegister.html',{
        registe: "注册",
        MB: "手机",
        PIN: "验证码",
        PW: "密码",
        HPIN: "获取验证码",
        LD: "注册",
        agree: "注册代表同意",
        conesal: "《隐私条款》"
    })
  }
}

module.exports = AppRegisterController;
