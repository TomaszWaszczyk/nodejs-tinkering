const base = { role: 'User' };
const update = { role: 'Admin', active: true };
const merged = { ...base, ...update };
console.log(merged); // { role: 'Admin', active: true }
