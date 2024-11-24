function skillsMember() {
    return {
        name: "John Doe",
        age: 25,
        skills: ["JavaScript", "React", "Node"],
        details: function () {
            return this.name + " is " + this.age + " years old and knows " + this.skills.join(", ");
        }
    };
}
