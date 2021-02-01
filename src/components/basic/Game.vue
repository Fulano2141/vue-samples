<template>
  <div id="app">
    <section class="row">
      <div class="small-6 columns">
        <h1 class="text-center">YOU</h1>
        <div class="healthbar">
          <div
            class="healthbar text-center"
            :style="{
              backgroundColor: 'green',
              margin: 0,
              color: 'white',
              width: playerHealth + '%',
            }"
          >
            {{ playerHealth }}
          </div>
        </div>
      </div>
      <div class="small-6 columns">
        <h1 class="text-center">MONSTER</h1>
        <div class="healthbar">
          <div
            class="healthbar text-center"
            :style="{
              backgroundColor: 'green',
              margin: 0,
              color: 'white',
              width: monsterHealth + '%',
            }"
          >
            {{ monsterHealth }}
          </div>
        </div>
      </div>
    </section>
    <section class="row controls" v-if="!isRunnig">
      <div class="small-12 columns">
        <button id="start-game" @click="startGame()">START NEW GAME</button>
      </div>
    </section>
    <section class="row controls" v-if="isRunnig">
      <div class="small-12 columns">
        <button id="attack" @click="attack()">ATTACK</button>
        <button id="special-attack" @click="specialAttack()">
          SPECIAL ATTACK
        </button>
        <button id="heal" @click="heal()">HEAL</button>
        <button id="give-up" @click="giveUp()">GIVE UP</button>
      </div>
    </section>
    <section class="row log" v-if="turns.length > 0">
      <div class="small-12 columns">
        <ul>
          <li
            v-for="(turn, index) in turns"
            :key="index"
            :class="{
              'player-turn': turn.isPlayer,
              'monster-turn': !turn.isPlayer,
            }"
          >
            {{ turn.text }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    playerHealth: 100,
    monsterHealth: 100,
    isRunnig: false,
    turns: [],
  }),
  methods: {
    startGame: function () {
      this.isRunnig = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    resetGame: function () {
      this.isRunnig = false;
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.turns = [];
    },
    attack: function () {
      var damage = this.damageCalculate(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits monster for " + damage,
      });
      this.checkWin();
      this.monsterDamage();
    },
    specialAttack: function () {
      var damage = this.damageCalculate(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits monster hard for " + damage,
      });
      this.checkWin();
      this.monsterDamage();
    },
    monsterDamage: function () {
      var damage = this.damageCalculate(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: "Monster hits Player for " + damage,
      });
      this.checkLose();
    },
    heal: function () {
      var health = 10;
      if (this.playerHealth > 90) {
        health = 0;
      }
      this.playerHealth += health;
      this.turns.unshift({
        isPlayer: true,
        text: "Player heals for " + health,
      });
      this.monsterDamage();
    },
    giveUp: function () {
      this.resetGame();
    },
    damageCalculate: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        alert("won");
        this.monsterHealth = 0;
        this.isRunnig = false;
        // return;
      }
    },
    checkLose: function () {
      if (this.playerHealth <= 0) {
        alert("lose");
        this.playerHealth = 0;
        this.isRunnig = false;
        // return;
      }
    },
  },
};
</script>

<style>
@import url("../../assets/foundation.min.css");
.text-center {
  text-align: center;
}

.healthbar {
  width: 80%;
  height: 40px;
  background-color: #eee;
  margin: auto;
  transition: width 500ms;
}

.controls,
.log {
  margin-top: 30px;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0px 3px 6px #ccc;
}

.turn {
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 22px;
}

.log ul {
  list-style: none;
  font-weight: bold;
  text-transform: uppercase;
}

.log ul li {
  margin: 5px;
}

.log ul .player-turn {
  color: blue;
  background-color: #e4e8ff;
}

.log ul .monster-turn {
  color: red;
  background-color: #ffc0c1;
}

button {
  font-size: 20px;
  background-color: #eee;
  padding: 12px;
  box-shadow: 0 1px 1px black;
  margin: 10px;
}

#start-game {
  background-color: #aaffb0;
}

#start-game:hover {
  background-color: #76ff7e;
}

#attack {
  background-color: #ff7367;
}

#attack:hover {
  background-color: #ff3f43;
}

#special-attack {
  background-color: #ffaf4f;
}

#special-attack:hover {
  background-color: #ff9a2b;
}

#heal {
  background-color: #aaffb0;
}

#heal:hover {
  background-color: #76ff7e;
}

#give-up {
  background-color: #ffffff;
}

#give-up:hover {
  background-color: #c7c7c7;
}
</style>