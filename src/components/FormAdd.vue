<template>
<div class="form-wrapper">
  <form @submit.prevent="addContact">
    <div>
      <label> Nome </label>
      <input type="text" name="nome" @input="escutaNome" :value="nome"/>
    </div>
    <div>
      <label> Idade </label>
      <input type="number" name="idade" @input="escutaIdade" :value="idade"/>
    </div>
    <input class="botao" type="submit" />
    <button  type="button" @click="clica">Importar</button>
  </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      idade: ''
    };
  },
  methods: {
    clica(){
      this.$emit('clica')
    },
    escutaNome(e){
      this.nome = e.target.value
    },
    escutaIdade(e){
      this.idade = e.target.value
    },
    addContact() {
      this.$emit("adiciona-contato", this.nome, this.idade);
    },
  },
};

</script>

<style>

.form-wrapper{
  display: flex;
  justify-content: center;
}
form{

    display: inline;
    margin-left: 10%;
}

label{

    width: 100%;
    display: block;
}

.botao{
      margin-right: 40px;
    margin-top: 10px;
}

</style>