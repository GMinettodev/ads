class Stack {
    //Cria um objeto o contador de posições
    constructor() {
        this._count = 0;
        this._items = {};
    }

    // Insere um elemento no objeto
    push(element) {
        this._items[this._count] = element;
        this._count++;
    }

    // Retorna o tamanho do objeto
    size() {
        return this._count;
    }

    // Retorna verdadeiro
    isEmpty() {
        return this._count === 0;
    }

    clear() {
        this._count = 0;
        this._items = {};
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this._count--;
        const result = this._items[this._count];
        delete this._items[this._count];
        return result;
    }

    // Retorna o último elemento inserido no objeto
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this._items[this._count - 1];
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let objString = `${this._items[0]}`;
        for (let i = 1; i < this._count; i++) {
            objString = `${objString},${this._items[i]}`;
            return objString;
        }
    }

}

export default Stack;
