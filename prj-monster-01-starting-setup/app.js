function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logs: [],
    };
  },
  computed: {
    playerHealthStyle() {
      return { width: this.playerHealth + "%" };
    },
    monsterHealthStyle() {
      return { width: this.monsterHealth + "%" };
    },
    shouldSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // DRAW!
        this.winner = "draw";
      } else if (value <= 0) {
        // Monster win!
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // DRAW!
        this.winner = "draw";
      } else if (value <= 0) {
        // Player win!
        this.winner = "player";
      }
    },
  },
  methods: {
    startGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logs = [];
    },
    attackMonster() {
      if (this.playerHealth > 0) {
        this.currentRound++;
        const attackValue = getRandomValue(5, 12);
        this.addLog("player", "attack", attackValue);
        if (this.monsterHealth <= attackValue) {
          this.monsterHealth = 0;
        } else {
          this.monsterHealth -= attackValue;
          this.attackPlayer();
        }
      }
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      if (this.playerHealth <= attackValue) {
        this.playerHealth = 0;
      } else {
        this.playerHealth -= attackValue;
      }
      this.addLog("monster", "attack", attackValue);
    },
    specialAttack() {
      if (this.playerHealth > 0) {
        this.currentRound++;
        const attackValue = getRandomValue(10, 25);
        this.addLog("player", "attack", attackValue);
        if (this.monsterHealth <= attackValue) {
          this.monsterHealth = 0;
        } else {
          this.monsterHealth -= attackValue;
          this.attackPlayer();
        }
      }
    },
    heal() {
      const healValue = getRandomValue(8, 20);
      if (healValue > 100 - this.playerHealth) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLog("player", "heal", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.addLog("player", "surrender", 0);
      this.winner = "monster";
    },
    addLog(who, what, value) {
      // push = add at the end of array
      // unshift = add at start of array
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
