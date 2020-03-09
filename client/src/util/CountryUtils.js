const compare = (a, b) => {
    if (a.public_contributions < b.public_contributions) {
        return 1;
    }
    if (a.public_contributions > b.public_contributions) {
        return -1;
    }
    return 0;
};


const check_username = (value) => {
    if (value === null) {
        return 'Null'
    } else {
        return value
    }
};

const titleCase = (str) => {
    str = str.replace(/_/g, ' ');
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
};

export { compare, check_username, titleCase };
