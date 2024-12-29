function getsaldo(id) {
    
   db.ref("users").once("value", snapshot => {
        const jsonText = snapshot.val() || "{}"; // Pega o JSON em texto ou usa um objeto vazio
        const users = JSON.parse(jsonText); // Converte para objeto

        
        if (users[id]) {
          return (users[id].saldo);
        } 
        
      });
    
    
}
