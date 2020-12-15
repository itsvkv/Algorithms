function areThereDuplicates(...args: Array<any>) {
    let counter: any = {};
    for (let arg of args) {
        if (counter[arg]) {
            return true;
        }
        counter[arg] = true;
    }
    return false;
}

console.log(areThereDuplicates("1", "b", "c", "d", 1));
