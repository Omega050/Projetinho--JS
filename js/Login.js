class Login {
    static logado = false;
    static matLogado = null;
    static nomeLogado = null;
    static acessoLogado = null;
    static endpoint = "https://login-api.maurojr1.repl.co"
    static login = (mat, pas) => {
        this.endpoint += `?matricula=${mat}&senha=${pas}`
        fetch(this.endpoint)
            .then(res => res.json)
            .then(res => {
                if(res){
                this.logado = true
                this.matLogado = mat;
                this.nomeLogado = res.nome;
                this.acessoLogado = res.acesso;
                console.log(res)
                }
            
            else{
                console.log("Usuário ou senha incorretos")
            }
            }
            )
    }
}
export { Login };
