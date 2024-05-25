function skillsMember() {
    var member = {
        name: "John Doe",
        skills: ["JavaScript", "HTML", "CSS"]
    };

    console.log("Name: " + member.name);
    console.log("Skills: " + member.skills.join(", "));
}