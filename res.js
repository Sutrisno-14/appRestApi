'use strict';  // supaya app nya bisa berjalan dengan baik

exports.ok = function(values, res) {
    var data = {
        'status': 200,
        'values': values,
    };
    res.json(data);
    res.end();
}
