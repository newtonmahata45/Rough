for (var num = 1; num <= 50; num++) {
    var factor = 0;
    for (var j = 1; j <= num; j++) {
        if (num % j == 0) {
            factor++
        }
    }
    if (factor == 2) {
        console.log(num)
    }


}