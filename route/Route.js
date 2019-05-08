var controller =require( '../controler/controler.js')


module.exports.route=function (app){

    app.route('/list')
        .post(controller.Postliste)
        .get(controller.GetListe)
        .put(controller.Putliste)
        .delete(controller.Deleteliste)

    app.route('/list/:_id')
        .get(controller.GetSelected)

    app.route('/prof')
        .post(controller.PostProf)
        .get(controller.GetProf)
}
