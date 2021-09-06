<template>
  <div class="itens">
    <li class="list-item">{{ nome }}</li>
    <li class="list-item">
        {{ idade }} 
        <button @click="aumentaIdade" >+</button>
    </li>
    <li class="list-item">
        {{ idade }} 
        <button @click="deleta" >delete</button>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    id:{
        type: Number,
        required: true
    },
    nome: {
      type: String,
      required: true,
    },
    idade: {
      type: Number,
    },
  },
  methods:{
      aumentaIdade(){
          this.$emit('aumenta-idade', this.id)
      },
      deleta(){
        this.$emit('deleta', this.id)
      }
  }
};
</script>

<style scoped>
.itens {
  margin-bottom: 10px;
  width:100%;
    text-align: center;
}
.list-item {
  list-style: none;
  border: black 1px solid;
  width: 50%;
  text-align: center;
  padding: 10px 0;
}
</style>