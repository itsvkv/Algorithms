class HashTable {
    keymap = new Array();
    constructor(size = 53) {
        this.keymap = new Array(size);
    }
    hash(key = "") {
        let total = 0;
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let value = key.charCodeAt(i) - 96;
            total = (total * WEIRD_PRIME + value) % this.keymap.length
        }
        return total
    }

    set(key, value) {
        var index = this.hash(key);
        if (this.keymap[index] == undefined) {
            this.keymap[index] = [[key, value]]
        }
        else {
            this.keymap[index].push([key, value]);
        }
        //console.log(JSON.stringify(this.keymap))
    }
    get(key) {
        var index = this.hash(key);
        if (this.keymap[index])
            for (const item of this.keymap[index]) {
                if (item[0] == key)
                    return item[1];
            }
        return undefined;
    }
    keys() {
        var result = [];
        for (const indexItem of this.keymap) {
            if (indexItem) {
                for (const item of indexItem) {
                    result.push(item[0])
                }
            }
        }
        return result;
    }
    values() {
        var result = [];
        for (const indexItem of this.keymap) {
            if (indexItem) {
                for (const item of indexItem) {
                    result.push(item[1])
                }
            }
        }
        return result;
    }
}

var hashTable = new HashTable();
hashTable.set(1, 1);
hashTable.set(2, 2);
hashTable.set(3, 2);
hashTable.set(4, 2);
hashTable.set("test", "test");
hashTable.set("best", "test");
console.log(hashTable.get(1))
console.log(hashTable.get(2))
console.log(hashTable.get("test"))
console.log(hashTable.get("invalid"))
console.log(hashTable.keys())
console.log(hashTable.values())