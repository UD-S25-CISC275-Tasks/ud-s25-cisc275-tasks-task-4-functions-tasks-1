interface Person {
    name: string;
    age: number;
}

export function updatePersonAge(
    people: Person[],
    name: string,
    newAge: number,
): Person[] {
    return people.map((person) =>
        person.name === name ? { ...person, age: newAge } : person,
    );
}

export function filterPeopleByAge(people: Person[], minAge: number): Person[] {
    return people.filter((person) => person.age > minAge);
}
