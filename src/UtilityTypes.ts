interface User {
	name: string;
	phone: string;
	email: string;
	password: string;
	age?: number;
}

// Readonly: não permite a alteração dos valores
type UserReadOnly = Readonly<User>;

const userA: UserReadOnly = {
	name: "Glauber",
	phone: "111",
	email: "email@email.com",
	password: "123456",
	age: 36,
};
// userA.age = 25; -> Isso não é permitido.

// Required: torna todas as propriedades obrigatóri
type UserRequired = Required<User>;

const userB: UserRequired = {
	name: "Glauber",
	phone: "111",
	email: "email@email.com",
	password: "123456",
	age: 26,
	// o TS irá reclamar da falta de qualquer propriedade, mesmo que ela tenha uma '?'
};

// Partial: permite criar um objeto, só com algumas das propriedades definidas.
type UserPartial = Partial<User>;

const userPatial: UserPartial = {
	name: "Glauber",
	email: "email@email.com",
};

// Pick: Criar uma um novo type, pegando n propriedades de um outro type
type UserCredentials = Pick<User, "email" | "password">;

const userCredentials: UserCredentials = {
	email: "email@email.com",
	password: "123456",
};

// Omit: é o contrário do Pick. Ao invés de pegar, ele retira as propriedades
type UserCredentialsOmit = Omit<User, "name" | "phone" | "age">;

const userCredentialsOmit: UserCredentialsOmit = {
	email: "email@email.com",
	password: "123456",
};

// Record: utilizado em objetos que tem cada propriedade com o mesmo tipo.

interface Post {
	title: string;
	subtitle: string;
}

type Props = "sports" | "politics";
type PostsRecord = Record<Props, Post[]>;
// As propriedades 'sports' e 'politics' serão arrays da interface 'Post'

const PostsBySections: PostsRecord = {
	sports: [
		{
			title: "Sport perde para o Palmeiras na Ilha do Retiro",
			subtitle: "Derrota por 1x0 amplia a crise no Leão da Ilha.",
		},
	],
	politics: [
		{
			title: "Depósitos na poupança superam saques em R$ 7 bilhões em junho",
			subtitle:
				"Retirada maior ocorreu durante intervalo do auxílio emergencial, até março.",
		},
	],
};
