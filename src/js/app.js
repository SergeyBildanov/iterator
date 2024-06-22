// TODO: write your code here
import Team from './set';

console.log('worked');

let team = new Team();
team.add({name:"Ваня", role:"Воин"});
team.addAll({name:"Ваня", role:"Воин"}, {name:"Ваня", role:"Воин"} , {name:"Игорь", role:"Князь"} )
console.log(team.toArray());

