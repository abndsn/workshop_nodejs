// Exemple de async - await

const verifUser = async function(username, password) {
    try{
        const userInfo  = await database.verifyUser(username , password);
        const rolesInfo = await database.getRoles(userInfo);
       // const logStatus ⁼ await database.logAccess(rolesInfo);
        return logStatus;

    } catch(e) {

    }
}