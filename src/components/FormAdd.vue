<template>
  <form @submit.prevent="addContact">
    <div>
      <label> Nome </label>
      <input type="text" name="nome" @input="escutaNome" :value="nome"/>
    </div>
    <div>
      <label> Idade </label>
      <input type="number" name="idade" @input="escutaIdade" :value="idade"/>
    </div>
    <input type="submit" />
  </form>
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
