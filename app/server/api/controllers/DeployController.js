/**
 * DeployController
 *
 * @description :: Server-side logic for managing deploys
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	deploy(req, res){
    const hook = req.body;
    console.log(hook);
    res.json({
      message: 'no implesment yet!'
    });
  }
};
