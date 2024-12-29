let mone = "0.09";

function getsaldo(id) {
    return db.ref("users").once("value").then(snapshot => {
        const users = snapshot.val() || {}; // Obtem o JSON como objeto
        if (users[id]) {
            return users[id].saldo; // Retorna o saldo se existir
        }
        return null; // Retorna null se o ID não existir
    });
}

function dinheiro(id) {
    getsaldo(id).then(saldo => {
        console.log("Saldo:", saldo);
        mone = saldo;
        return mone;
        // Aqui você pode usar o saldo
    }).catch(err => {
        console.error("Erro ao obter saldo:", err);
    });
}
