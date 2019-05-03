'use strict';

const Controller = require('egg').Controller;

class SignController extends Controller {
  async index() {
    await this.ctx.render('sign.html',{
        user: "用户名",
        password_box: "密码",
        sign_in: "登录",
        register: "注册用户",
        forget: "忘记密码"
    })
  }
}

module.exports = SignController;
