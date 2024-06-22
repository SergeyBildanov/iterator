export default class Team {
  constructor() {
      this.members = new Set();
  }
  add({name, role}){
    let character = new Character(name, role);
    for(const member of this.members){
      if(member.isEqual(character)){
        throw new Error('Такой персонаж уже существует');
      }
    }
    this.members.add(character);
  }
  addAll(...args){
    let characters = [];
    for( const arg of Array.from(args)){
      characters.push(new Character(arg.name, arg.role));
    }
    characters.forEach(char =>{
      let already = false;
      for(const member of this.members){
        if(char.isEqual(member)){
          already = true;
        }
      }
      if(!already){
        this.members.add(char);
      }
    });
  }
  toArray(){
    let result = [];
    for (const character of this.members){
      result.push(character);
    }
    return result;
  }
   [Symbol.iterator]() {
      let index = 0;
      let result = [];
      for (const character of this.members){
        result.push(character);
      }
      return {
        next: () => {
          if (index < result.length) {
            return { value: result[index++], done: false };
          } else {
            return { done: true };
          }
        }
      }
  }
}
class Character{
  constructor(name, role){
    this.name = name;
    this.role = role;
  }
  isEqual(character){
    return this.name === character.name && this.role === character.role;
  }
}