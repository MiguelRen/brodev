import bcrypt from 'bcryptjs';

const password = 'plus2026';
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password, salt);

console.log('--- NUEVO HASH PARA plus2026 ---');
console.log(hash);
console.log('-------------------------------');
