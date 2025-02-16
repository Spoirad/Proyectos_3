const bcrypt = require("bcrypt")

const encrypt = async (clearPassword) => {// El número "Salt" otorga aleatoriedad a la función hash al combinarla con la password en claro.
    const hash = await bcrypt.hash(clearPassword,10)
    return hash
}
const compare = async (clearPassword, hashedPassword) => {
    // Compara entre la password en texto plano y su hash calculado anteriormente para decidir si coincide.
    const result = await bcrypt.compare(clearPassword, hashedPassword)
    return result}
module.exports = { encrypt, compare }