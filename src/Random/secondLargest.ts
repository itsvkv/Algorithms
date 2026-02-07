function getSecondLargest(input = []) {
    let largest = 0, secondLargest = 0;
    for (let i of input) {
        if (i > largest) {
            secondLargest = largest;
            largest = i;
        }
        else if (i > secondLargest) {
            secondLargest = i
        }
    }
    if (secondLargest == 0) {
        return largest;
    }
    return secondLargest;
}

console.log(getSecondLargest([1, 3, 2, 5, 6, 45, 34, 33, 42, 44]))