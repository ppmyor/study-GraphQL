const anna = {
    name: "Anna",
    age: 26,
    gender: "female",
};

const resolvers = {
    Query: {
        person: () => anna,
    },
};

export default resolvers;
