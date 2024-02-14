// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

// Клас Key

// Клас Key
class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

// Клас Person
class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

// Абстрактний клас House
abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];

    constructor(door: boolean = false, key: Key) {
        this.door = door;
        this.key = key;
        this.tenants = [];
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log("Дозвіл на вхід");
        } else {
            console.log("Двері закриті, не можна ввійти.");
        }
    }

    // Абстрактний метод
    abstract OpenDoor(key: Key): void;
}

// Клас MyHouse, який успадковує House
class MyHouse extends House {
    constructor(key: Key) {
        super(false, key);
    }

    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Двері відчинено");
        } else {
            console.log("Невірний ключ, двері не можуть бути відчинені.");
        }
    }

    OpenDoor(key: Key): void {
        this.openDoor(key);
    }
}

// Створення об'єктів
const key: Key = new Key();
const house: MyHouse = new MyHouse(key);
const person: Person = new Person(key);

// Перевірка відкриття дверей та входу в будинок
house.OpenDoor(person.getKey());
house.comeIn(person);



export {};