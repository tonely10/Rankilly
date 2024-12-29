function getsaldo(id) {
    return db.ref("users").once("value").then(snapshot => {
        const users = snapshot.val() || {}; // Obtem o JSON como objeto
        if (users[id]) {
            return users[id].saldo; // Retorna o saldo se existir
        }
        return null; // Retorna null se o ID não existir
    });
}
