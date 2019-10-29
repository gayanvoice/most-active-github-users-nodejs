const fs = require('fs');
module.exports = {
    check_file: function (path){
        try {
            if (fs.existsSync(path)) {
                //console.log('exists');
            } else {
                //console.log('does not exist');
            }
        } catch (err) {
            //console.error(err)
        }
    },

    getDateTime: function() {

        var date = new Date();

        var hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;

        var min  = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;

        var sec  = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;

        var year = date.getFullYear();

        var month = date.getMonth() + 1;
        month = (month < 10 ? "0" : "") + month;

        var day  = date.getDate();
        day = (day < 10 ? "0" : "") + day;

        return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

    },

    parse: function (str) {
        var args = [].slice.call(arguments, 1),
            i = 0;
        return str.replace(/%s/g, () => args[i++]);
    },

    locations: function (array){
        var value = '';
        array.forEach(function(entry) {
            value = value + ' location:' + entry;
        });
        return value;
    }


};
