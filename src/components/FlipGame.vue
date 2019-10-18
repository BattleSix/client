<template>
  <v-card max-width="400" class="mx-auto" style="height:162.5vh;">
    <v-container>
      <v-row dense id="board">
        <!-- <v-card col="12" class="flip" @click="flipTop">
          <img :src="imgTop" alt width="170px" />
        </v-card>
        <v-card col="12" class="flip" @click="flipBot">
          <img :src="imgBot" alt width="170px" />
        </v-card>-->

        <div class="flip-card" col="12" @click="flipTop" :class="bindClass">
          <div class="flip-card-inner">
            <div class="flip-card-front"></div>
            <div class="flip-card-back image-card">
              <img :src="imgTop" alt="Avatar" style="width:200px;height:200px;" />
            </div>
          </div>
        </div>

        <div class="flip-card" col="12" @click="flipBot" :class="bindClass">
          <div class="flip-card-inner">
            <div class="flip-card-front"></div>
            <div class="flip-card-back image-card">
              <img :src="imgBot" alt="Avatar" style="width:200px;height:200px;" />
            </div>
          </div>
        </div>

      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "teamBoard",
  components: {},
  data: () => ({
    img: [
      "https://rec-data.kalibrr.com/www.kalibrr.ph/logos/LUJD7AZSJQB8A6XTF3ZXZYZ287EFXYAR9SH2LMPU-5d0b4f48.png",
      "https://t4.ftcdn.net/jpg/02/43/25/39/500_F_243253937_ymiPZHlTjnjaHmWswKDKoYlTd8besGvg.jpg"
    ],
    imgTop: "",
    imgBot: "",
    bindClass: ""
  }),
  methods: {
    randomIndex() {
      return Math.floor(Math.random());
    },
    flipTop() {
      let point = Math.round(Math.random()) * 10;
      if (point) {
        this.imgTop = this.img[0];
        this.imgBot = this.img[1];
        this.bindClass = 'flipped'
        setTimeout(() => {
          this.bindClass = ''
        }, 5000);
      }
      console.log(point);
    },
    flipBot() {
      let point = Math.round(Math.random()) * 10;
      if (point) {
        this.imgBot = this.img[0];
        this.imgTop = this.img[1];
        this.bindClass = 'flipped'
        setTimeout(() => {
          this.bindClass = ''
        }, 5000);
      }
      console.log(point);
    }
  },
  created() {}
};
</script>

<style scoped>
#board {
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

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 250px;
  perspective: 1000px;
  margin: 1vh auto;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flipped:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #952175;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
.image-card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>