function swap({ array, firstIndex, secondIndex }) {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]]
}

class DataNode {
    val;
    priority;
    constructor(
        val, priority
    ) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    private values = [];
    enQueue(val, priority) {
        var node = new DataNode(val, priority);
        this.values.push(node);
        var currentIndex = this.values.length - 1;
        var parentIndex = Math.floor((currentIndex - 1) / 2);
        while (currentIndex > 0 && this.values[parentIndex].priority < this.values[currentIndex].priority) {
            swap({
                array: this.values,
                firstIndex: parentIndex,
                secondIndex: currentIndex
            });
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }

    deQueue() {
        swap({
            array: this.values,
            firstIndex: this.values.length - 1,
            secondIndex: 0
        });
        const returnValue = this.values.pop();
        this.reArrange();
        return returnValue;
    }

    private reArrange() {
        var currentIndex = 0;
        while (true) {
            var swapped = false;
            var firstIndex = currentIndex * 2 + 1;
            var secondIndex = currentIndex * 2 + 2;
            var arrayLength = this.values.length;
            if (firstIndex < arrayLength && secondIndex < arrayLength)
                if (
                    this.values[currentIndex].priority < this.values[firstIndex].priority
                    &&
                    this.values[currentIndex].priority < this.values[secondIndex].priority
                ) {
                    let swappingIndex = firstIndex;
                    if (this.values[firstIndex].priority < this.values[secondIndex].priority) {
                        swappingIndex = secondIndex;
                    }
                    swap({
                        array: this.values,
                        firstIndex: currentIndex,
                        secondIndex: swappingIndex
                    });
                    currentIndex = swappingIndex;
                    swapped = true;

                }

                else if (firstIndex < arrayLength && this.values[currentIndex].priority < this.values[firstIndex].priority) {
                    swap({
                        array: this.values,
                        firstIndex: currentIndex,
                        secondIndex: firstIndex
                    });
                    currentIndex = firstIndex;
                    swapped = true;
                }
                else if (secondIndex < arrayLength && this.values[currentIndex].priority < this.values[secondIndex].priority) {
                    swap({
                        array: this.values,
                        firstIndex: currentIndex,
                        secondIndex
                    })
                    currentIndex = secondIndex;
                    swapped = true;
                }

            if (!swapped) break;

        }
    }
    log() {
        console.log(this.values);
    }
}

var pq = new PriorityQueue();
pq.enQueue(1, 1);
pq.enQueue(12, 2);
pq.enQueue(12, 4);
pq.enQueue(12, 43);
pq.enQueue(12, 45);
pq.enQueue(12, 4);

pq.log();
pq.deQueue();
pq.log()
pq.deQueue();
pq.log();
pq.deQueue();
pq.log();
pq.deQueue();
pq.log();
pq.deQueue();
pq.log();
pq.deQueue();
pq.log();
pq.deQueue();