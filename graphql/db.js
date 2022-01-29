export const people = [
    {
        id: "0",
        name: "Anna",
        age: 26,
        gender: "female",
    },
    {
        id: "1",
        name: "Jisu",
        age: 26,
        gender: "female",
    },
    {
        id: "2",
        name: "Nami",
        age: 26,
        gender: "female",
    },
    {
        id: "3",
        name: "Young",
        age: 26,
        gender: "male",
    },
];

export const getById = (id) => {
    const filteredPeople = people.filter((person) => person.id === String(id));
    return filteredPeople[0];
};
