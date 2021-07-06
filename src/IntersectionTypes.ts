// Funciona tanto com type e interface

type Person = {
	name: string;
	age: number;
};

type Address = {
	street: string;
	zipCode: string;
};

const person: Person = {
	name: "Glauber",
	age: 36,
};

const address: Address = {
	street: "Rua F",
	zipCode: "04500000",
};

function merge<A, B>(objA: A, objB: B): A & B {
	return { ...objA, ...objB };
}

const personWithAddress = merge(person, address);
