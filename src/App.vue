<template>
    <h1>Agenda</h1>
    <div class="wrapper">
        <ul>
            <form-add @adiciona-contato="addContact"></form-add>
            <contatinho-listado @aumenta-idade="aumentaPropsIdade" 
            v-for="contato in contatos" :key="contato.id" 
            :id="contato.id" :nome="contato.nome" :idade="contato.idade" @deleta="deleta"></contatinho-listado>
        </ul>
    </div>  
</template>

<script>


export default {
    data(){
        return{
            contatos: [{
                    id: 1,
                    nome: 'rodrigo',
                    idade: 31 
                },
                {
                    id: 2,
                    nome: 'robertoo',
                    idade: 35 

                },
                {
                    id: 3,
                    nome: 'alerto',
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
        /* margin-left: 40%; */
        width: 100%;
        display: flex;
        justify-content: center;
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
