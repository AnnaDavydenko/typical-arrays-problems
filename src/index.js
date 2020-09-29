exports.min = function min(array) {
    if (Array.isArray(array) && array.length > 0) {
        return array.sort((a, b) => a - b)[0];
    } else {
        return 0;
    }
}

exports.max = function max(array) {
    if (Array.isArray(array) && array.length > 0) {
        return array.sort((a, b) => b - a)[0];
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length > 0) {
        let sum = array.reduce((sum, item) => {
            return sum + item;
        }, 0);
        return sum / array.length;
    } else {
        return 0;
    }
}