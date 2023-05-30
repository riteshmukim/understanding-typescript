enum Role {
  ADMIN = 'Admin',
  READ_ONLY = 100,
  WRITE_ONLY,
}

const person = {
  name: "Ritesh",
  age: 29,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role[1] = 10;

let favouriteActivities: string[];

favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
