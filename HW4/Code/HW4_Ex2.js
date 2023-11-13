class Vector {
    constructor(components) {
        this.components = components;
    }

    add(vector) {
        this.validateLength(vector);
        const newComponents = this.components.map((value, index) => value + vector.components[index]);
        return new Vector(newComponents);
    }

    subtract(vector) {
        this.validateLength(vector);
        const newComponents = this.components.map((value, index) => value - vector.components[index]);
        return new Vector(newComponents);
    }

    dot(vector) {
        this.validateLength(vector);
        return this.components.reduce((sum, value, index) => sum + value * vector.components[index], 0);
    }

    norm() {
        const normSquared = this.components.reduce((sum, value) => sum + value * value, 0);
        return Math.sqrt(normSquared);
    }

    toString() {
        return `(${this.components.join(',')})`;
    }

    equals(vector) {
        if (this.components.length !== vector.components.length) {
            return false;
        }
        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i] !== vector.components[i]) {
                return false;
            }
        }
        return true;
    }

    validateLength(vector) {
        if (this.components.length !== vector.components.length) {
            throw new Error("Vectors must have the same length for this operation.");
        }
    }
}

// Example usage
const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.add(b).toString());
console.log(a.subtract(b));
//console.log(c.subtract(b)); error
console.log(a.dot(b));
console.log(a.norm());
console.log(a.equals(b));