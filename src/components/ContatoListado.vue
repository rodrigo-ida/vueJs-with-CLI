<template>
  <div class="itens">
    <div class="foto">

    </div>
    <div class="info">
      <li class="list-item">Nome: {{ nome }}</li>
      <li class="list-item">
          Idade: {{ idade }} 
          <button v-on:click="aumentaIdade" >+</button>
      </li>
      <li class="list-item">
          <button @click="deleta" >delete</button>
      </li>
    </div>
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

@keyframes show{
  from { opacity: 0}
  to { opacity: 1}
}

.itens {
  margin-bottom: 10px;
  width:50%;
  text-align: center;
  animation: show 1s ;
  display: flex;
  width: 40%;
  border: 1px solid lightgray;
  margin-right: 10px;
}

.foto{
    background-image: url('https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1');
    width: 50px;
    height: 50px;
    width: 140px;
    height: auto;
    background-size: cover;

}

.info{
      width: 50%;

}
.list-item {
  list-style: none;
  border: none;
  width: 80%;
  text-align: center;
  padding: 10px 0;
}
</style>