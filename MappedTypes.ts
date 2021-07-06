interface Person {
  name: string;
  age: number;
}

// MappedTypes nativos do TS

const personPartial: Partial<Person> = {
  name: "Glauber",
};

const personReadOnly: Readonly<Person> = {
  name: "Glauber",
  age: 36,
};

// Criando o seu MappedType

type Stringify<T> = {
  [P in keyof T]: string;
};

const strngPerson: Stringify<Person> = {
  name: "Glauber",
  age: "36",
};
