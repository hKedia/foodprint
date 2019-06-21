import base64 from 'base-64';

/**
 * @param req the express request
 * @return {{accountId: (String|never), firstName: (String|never), lastName: (String|never), roles: (Array|never), subType: (String|never), type: (String|never), userId: (String|never), email: (String|never)}}
 */
module.exports.getAuthHeaders = function (req) {
    return {
        'userId': req.header('X-User-ID'),
        'accountId': req.header('X-Account-ID'),
        'email': req.header('X-E-Mail') ? base64.encode(req.header('X-E-Mail')) : undefined,
        'firstName': req.header('X-First-Name') ? base64.encode(req.header('X-First-Name')) : undefined,
        'lastName': req.header('X-Last-Name') ? base64.encode(req.header('X-Last-Name')) : undefined,
        'type': req.header('X-Type'),
        'subType': req.header('X-Sub-Type'),
        'roles': req.header('X-Roles') ? req.header('X-Roles').split(',') : undefined
    };
};
