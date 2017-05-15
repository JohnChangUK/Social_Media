var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/:resource', function(req, res, next) {
    
    var resource = req.params.resource;
    
    var controller = controllers[resource];
    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource'
        });
        return;
    }

    controller.find(req.query)
    .then(function(entities) {
        res.json({
            confirmation: 'Success',
            results: entities
        });
    })
    .catch(function(err) {
        res.json({
            confirmation: 'Fail',
            message: err
        });
    });
});

router.get('/:resource/:id', function(req, res, next) {
    var resource = req.params.resource;
    var controller = controllers[resource];
        if (controller == null) {
            res.json({
                confirmation: 'Fail',
                message: 'Invalid Resource'
            });
            return;
        }
        
        var id = req.params.id;
        controller.findById(id)
        .then(function(result) {
            res.json({
                confirmation: 'Success',
                result: result
            });
        })
        .catch(function(err) {
            res.json({
                confirmation: 'Fail',
                message: resource + ' ' + id + " not found"
            });
        });
});

router.post('/:resource', function(req, res, next) {
// Making sure the Resource is valid
    var resource = req.params.resource;
    var controller = controllers[resource];
        if (controller == null) {
            res.json({
                confirmation: 'Fail',
                message: 'Invalid Resource'
            });
            return;
        }
// In a post request, the Params comes in the Body of Request
    controller.create(req.body)
    .then(function(result) {
        res.json({
            confirmation: 'Success',
            result: result
            });
    })
    .catch(function(err) {
        res.json({
            confirmation: 'Fail',
            message: err
        });
    });
});

module.exports = router;
