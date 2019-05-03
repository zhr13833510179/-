'use strict';

const Controller = require('egg').Controller;

class AppassociatedusersheadController extends Controller {
    async index() {
        await this.ctx.render('AppAssociatedUsersHead.html', {
            TitieTexe: '关联用户',
            PromptText: '保险箱将按此顺序拨号，拖动可排序',
            PromptPic: '/public/images/Forknumber@2x.png',
            div: true,
            list: [{
                    img: '/public/images/Relation1@2x.png',
                    subtitler: '13149869439'
                },
                {
                    img: '/public/images/Relation1@2x.png',
                    subtitler: '13149869439'
                },
                {
                    img: '/public/images/Relation1@2x.png',
                    subtitler: '13149869439'
                }
            ]
        })
    }
}

module.exports = AppassociatedusersheadController;