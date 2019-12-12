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
        return date = new Date();

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
