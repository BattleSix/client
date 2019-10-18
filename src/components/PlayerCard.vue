<template>
  <div class="card" :class="colorClass[randomcolor]">
    <div class="information">
      <h2>{{player.score}}</h2>
      <p>{{player.name}}</p>
    </div>
    <div class="img">
      <img :src="src" width="125px;" height="125px" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "player-card",
  props: ["player", "randomcolor"],
  data(){
    return{
      src: `https://api.adorable.io/avatars/285/${this.player.name}.png`,
      colorClass : ['color1', 'color2', 'color3']
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Acme|Hind+Siliguri&display=swap");
.card {
  width: 400px !important;
  border-radius: 3px;
  padding: 2vh 2vh 2vh 8vh;
  margin: 1vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.color1{
  background-color: #F18F01;
}
.color2{
  background-color: #048BA8;
}
.color3{
  background-color: #2E4057
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.img {
  left: 120px;
}
h2 {
  font-size: 95px;
  font-family: "Acme", sans-serif;
}
p {
  font-family: "Hind Siliguri", sans-serif;
  font-size: 18px;
}
h2, p{
    margin: -3vh;
    padding: -1vh;
    opacity: .8;
}
</style>