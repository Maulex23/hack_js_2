/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];

foo.skills.splice(0,0,skills[0]); foo.skills.splice(1,0,skills[1]); foo.skills.splice(5,0,skills[2]); foo.skills.push(skills[3]);

let result = {
    id: foo.id,
    name: foo.name.charAt(0).toUpperCase() + foo.name.slice(1),
    roles: [
        ...foo.roles.map(role => role.toUpperCase()),
        roleSuperUser.toUpperCase(),
        roleUser.toUpperCase(),
    ],
    skills: foo.skills.map(skill => {
        if (skill === "html" || skill === "css") {
            return skill.toUpperCase();
        } else {
            return skill.charAt(0).toUpperCase() + skill.slice(1);
        }
    }),
    levels: levels.map(level => ({ LEVEL: level.LEVEL.toUpperCase().replace('L-', 'L') }))
  };;


//export result
module.exports = result; 