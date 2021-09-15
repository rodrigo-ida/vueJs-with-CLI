<template>
    <h1>{{ titulo }}</h1>
    <div class="wrapper">
        <form-add @adiciona-contato="addContact" v-on:clica="fetchFromDummy"></form-add>
        <ul v-if="contatos.length > 0">
            <contato-listado 
                v-on:aumenta-idade="aumentaPropsIdade" 
                v-for="contato in contatos"
                v-bind:key="contato.id" 
                v-bind:id="contato.id" v-bind:nome="contato.nome" v-bind:idade="contato.idade" 
                @deleta="deleta">
            </contato-listado>
        </ul>
        <div v-else> 
            <p>Ainda não há contatos em sua lista </p>
        </div>
    </div>  
</template>

<script>
    export default {
        data: function(){
            return{
                titulo: "Agenda",
                idFetch : 1,
                contatos: [
                    {
                        id: 1,
                        nome: 'Fernanda',
                        idade: 31 
                    },
                    {
                        id: 2,
                        nome: 'Roberto',
                        idade: 35 

                    },
                    {
                        id: 3,
                        nome: 'gonçalves',
                        idade: 58 

                    }
                ]
            }
        },
        methods:{
            aumentaPropsIdade(id){

                const contato = this.contatos.find(idContato => idContato.id === id)
                contato.idade++
            },
            addContact(nome, idade){
                this.contatos.push({
                    id: Math.random() * 10,
                    nome: nome,
                    idade: parseInt(idade)
                })
            },
            deleta(id){
                this.contatos = this.contatos.filter(e => e.id !== id)
            },
            fetchFromDummy(){
                    const intervalo = setInterval(()=>{
                        fetch('https://jsonplaceholder.typicode.com/users/'+this.idFetch)
                            .then(response => response.json())
                            .then(e => {
                                    
                                this.contatos.push({
                                    id: e.id + parseInt(Math.random() * 10),
                                    nome: e.name,
                                    idade: e.id + parseInt(Math.random() * 10)
                                })
                                if(this.idFetch < 10) this.idFetch++
                                else{
                                    clearInterval(intervalo)
                                }
                            })
                    }, 2000)
                
            }
        }
    }
</script>

<style scoped>

    h1{
        text-align: center;
    }
    ul{
        text-align: center;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .wrapper{
        width: 100%;
    }
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
