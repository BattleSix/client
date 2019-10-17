<template>
  <v-card max-width="400" class="mx-auto" style="height:61.5vh;">
    <v-container>
      <v-row dense id="board">
        <v-card col="12" class="flip"><img :src="img[randomIndex]" alt="" width="170px"></v-card>
        <v-card col="12" class="flip"><img :src="img[randomIndex]" alt="" width="170px"></v-card>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "teamBoard",
  components: {},
  data: () => ({
    img : ['https://rec-data.kalibrr.com/www.kalibrr.ph/logos/LUJD7AZSJQB8A6XTF3ZXZYZ287EFXYAR9SH2LMPU-5d0b4f48.png', 'https://t4.ftcdn.net/jpg/02/43/25/39/500_F_243253937_ymiPZHlTjnjaHmWswKDKoYlTd8besGvg.jpg']
  }),
  methods : {
      randomIndex(){
          return Math.floor(Math.random())
      }
  },
  created(){
      
  }
};
</script>

<style scoped>
#board{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
}
.card {
  margin: 1vh !important;
}
.flip {
  width: 300px !important;
  height: 200px;
  border-radius: 3px;
  padding: 2vh 2vh 2vh 8vh;
  margin: 1vh;
  background-image: radial-gradient(
    circle,
    #952175,
    #96297b,
    #973181,
    #983887,
    #993e8d
  );
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.flip:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>