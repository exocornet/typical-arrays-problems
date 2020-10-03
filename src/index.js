
exports.min = function min (array) {


    if (array === undefined || array.length === 0) {
        return 0;

    } else {
        let min = array[0];
        for (let i = 0; i <= array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    }


}

exports.max = function max (array) {

    if (array === undefined || array.length === 0) {
        return 0;

    } else {
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        return max;
    }

}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;

    } else {
        let avg = array[0];
        let x = 0;
        for (let i = 0; i < array.length; i++) {
            x = x + array[i];
        }
        avg = x / array.length;
        return avg;
    }
}
