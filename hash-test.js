import bcrypt from 'bcryptjs';

const password = 'admin123456';
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password, salt);

console.log('--- NUEVO HASH PARA SQL ---');
console.log(hash);
console.log('---------------------------');
