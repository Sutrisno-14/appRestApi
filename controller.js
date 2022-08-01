'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res) {
    response.ok("Aplikasi success running", res)
};

//menampilkan data dari database
exports.tampilDataSiswa = function(req, res) {
    connection.query("SELECT * FROM mahasiswa", function(error, rows,fileds){
        if(error) {
            console.log(error);
        }else {
            response.ok(rows, res);
        }
    });
};

//tampil berdasarkan id
exports.tampilDataSiswaId = function(req, r) {
    let id = req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id],
    function(error, rows, fileds) {
        if(error) {
            console.log(error);
        }else{
            response.ok(rows, r);
        }
    });
};