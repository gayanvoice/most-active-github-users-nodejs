const getCountry = (string) => {
    string = string.replace(/_/g, ' ');
    const splitStr = string.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
};

export { getCountry };
