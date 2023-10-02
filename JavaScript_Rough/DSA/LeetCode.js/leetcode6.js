var convert = function (s, numRows) {
    let map = new Map();
    let i = 1;
    let j = 0;
    let k = 1;

    while (j < s.length) {
        if (i % (numRows) == 1) {
            if (map.get(i)) {
                map.set(i, (map.get(i)) + s[j])
            }
            else {
                map.set(i, s[j])
            }
            j++;
        } else {
            let x = i * numRows - i % numRows + 1;
            if (k == x) {
                if (map.get(i)) {
                    map.set(i, map.get(i) + s[j]);
                    j++;
                }
                else { map.set(i, s[j]); j++ }
            }
            else {
                if (map.get(i)) {
                    map.set(i, map.get(i) + "#");
                }
                else { map.set(i, "#") }
            }
        }
        if (k % numRows == 0) i++;

        k++;
    }
    let ans = "";
    let p = 1;
    let q = 0
    while (true) {
        if (ans.length == s.length) break;
        let m = map.get(p);
        if (m[q] && m[q] != "#") { ans += m[q] }
        p++;
        if (p == map.size + 1) {
            q++;
            p = 1;
        }
    }
    console.log(map)
    return ans
};

console.log("Output  :",convert("PAYPALISHIRING",4))
console.log("Expected:","PINALSIGYAHRPI")