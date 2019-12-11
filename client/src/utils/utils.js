

export const TitleCase = (str) => {
    str = str.replace(/_/g,' ');
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}


export const Compare = ( a, b )=> {
    if ( a.public_contributions < b.public_contributions ){
        return 1;
    }
    if ( a.public_contributions > b.public_contributions ){
        return -1;
    }
    return 0;
}

export const  Check_username = (value) => {
    //(value) ? value : 'Null';
    if(value === null) {
        return 'Null'
    } else {
        return value
    }
}

export const Limit  = (value) => {
    return value.slice((this.props.match.params.from), (this.props.match.params.to))
}




//export default { titleCase ,compare  }




