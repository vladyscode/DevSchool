function getRootProperty(obj, b) {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            const result = getRootProperty(obj[key], b);
            if (result !== null) {
                return key;
            }
        } else if (Array.isArray(obj[key]) && obj[key].includes(b)) {
            return key;
        }
    }
    return null;
}

const b = 34;
const object = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
};

console.log(getRootProperty(object, b))