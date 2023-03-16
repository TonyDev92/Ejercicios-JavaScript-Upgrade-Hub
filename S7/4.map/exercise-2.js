const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

let usersAnacleto = users.map((e) => e.name.startsWith('A') ? e.name = "Anacleto" : e.name);

console.log((usersAnacleto));