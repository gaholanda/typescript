interface Developer {
	name: string;
	language: string;
}

interface Designer {
	name: string;
	software: string;
}

const dev: Developer = { name: "Glauber", language: "JS" };
const ux: Designer = { name: "Belo", software: "XD" };

// função de TypeGuard
function isDeveloper(person: Developer | Designer): person is Developer {
	return "language" in person;
}

function printSkill(person: Developer | Designer): void {
	if (isDeveloper(person)) {
		// Developer
		console.log(person.language);
	} else {
		// Designer
		console.log(person.software);
	}
}
