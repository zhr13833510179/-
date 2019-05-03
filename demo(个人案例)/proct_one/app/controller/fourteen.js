'use strict';

const Controller = require('egg').Controller;

class FourteenController extends Controller {
  async index() {
    await this.ctx.render('fourteen.html')
  }
}

module.exports = FourteenController;