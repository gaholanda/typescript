// Iterfaces se sobrepõem, quando possuem o mesmo nome
interface Human {
	name: string;
}

interface Human {
	lastname: string;
}

const HumanB: Human = {
	name: "Thiago",
	lastname: "Silva",
};

// ##### TYPES #####
// types são únicas, não podem ter nomes iguais.

// MappedTypes só funcionam com Types
type Type<T> = {
	[P in keyof T]: string;
};

// type pode ser usado como alias para um tipo primitivo
type Email = string;
function sendEmail(email: Email) {
	return email;
}
