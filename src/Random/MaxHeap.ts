import { swap } from "helpers";

class MaxHeap {
    values = []

    add(val) {
        this.values.push(val);
        var currentIndex = this.values.length - 1;

        var parentIndex = Math.floor((currentIndex - 1) / 2)
        while (currentIndex > 0 && this.values[parentIndex] < this.values[currentIndex]) {

            [this.values[parentIndex], this.values[currentIndex]] = [this.values[currentIndex], this.values[parentIndex]]
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }
    extract() {
        var lastIndex = this.values.length - 1;
        swap({
            array: this.values,
            firstIndex: 0,
            secondIndex: lastIndex
        });
        var removedElement = this.values.pop();
        var currentPosition = 0;
        var leftIndex = currentPosition * 2 + 1;
        var rightIndex = currentPosition * 2 + 2;

        while (currentPosition != lastIndex ||
            (
                this.values[currentPosition] < this.values[leftIndex]
                ||
                this.values[currentPosition] < this.values[rightIndex]
            )) {
            if (this.values[currentPosition] < this.values[leftIndex]
                &&
                this.values[currentPosition] < this.values[rightIndex]) {
                if (this.values[leftIndex] < this.values[rightIndex]) {
                    swap({
                        array: this.values,
                        firstIndex: rightIndex,
                        secondIndex: currentPosition
                    })
                    currentPosition = rightIndex;
                }
                else {
                    swap({
                        array: this.values,
                        firstIndex: leftIndex,
                        secondIndex: currentPosition
                    })
                    currentPosition = leftIndex;
                }

            } else {
                if (this.values[currentPosition] < this.values[leftIndex]) {
                    swap({
                        array: this.values,
                        firstIndex: currentPosition,
                        secondIndex: leftIndex
                    });
                    currentPosition = leftIndex;
                } else {
                    if (this.values[currentPosition] < this.values[rightIndex])
                        swap(
                            {
                                array: this.values,
                                firstIndex: currentPosition,
                                secondIndex: rightIndex
                            })
                    currentPosition = rightIndex;
                }
            }
            leftIndex = currentPosition * 2 + 1;
            rightIndex = currentPosition * 2 + 2;
        }
    }




}

var maxHeap = new MaxHeap();
var maxHeap = new MaxHeap();
var input = [43, 93, 11, 11, 33, 87, 47, 8]
for (let item of input) {
    maxHeap.add(item)
}
console.log(maxHeap.values)

