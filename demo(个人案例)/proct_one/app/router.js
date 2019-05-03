'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/sign', controller.sign.index);

  router.get('/appRegister', controller.appRegister.index);

  router.get('/appRegister1', controller.appRegistero.index);

  router.get('/addSafefive',controller.addSafefive.index);

  router.get('/addSafe',controller.addSafe.index);

  router.get('/appDateils',controller.appDateils.index);

  router.get('/appStringbox',controller.appStringbox.index);

  router.get('/appdateils1',controller.appdateils1.index);

  router.get('/appHead1',controller.appHead1.index);

  router.get('/appbao',controller.appbao.index);

  router.get('/appassociatedusershead',controller.appassociatedusershead.index);

  router.get('/fourteen',controller.fourteen.index);

};
