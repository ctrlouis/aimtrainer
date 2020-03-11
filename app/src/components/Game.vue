<template>
    <div id="game">
        <header>
            <p>Success: {{ round.shot }} - Missed : {{ round.miss }}</p>
            <p>Timeleft: {{ timeLeft }}</p>
        </header>

        <div id="aimTrainer" @click="missShot">
            <div id="target" class="target" @click="gabed"/>
        </div>

        <h2 v-if="!round.start" class="animated flash blink">Shoot on Gabe to start</h2>
        <button type="button" v-else="round.start" class="nes-btn is-error" @click="reset">Restart</button>
    </div>
</template>

<script>
import MyMath from './../tools/MyMath.js';


export default {
    data() {
        return {
            round: {
                start: false,
                finish: false,
                shot: 0,
                miss: 0,
                total: 0,
                resizeCountOrigin: 1,
                resizeCount: 1,
                duration: 30,
                countDown: 30,
                timer: null
            },
            target: {
                name: "target",
                size: 60,
                pos: {
                    x: 50,
                    y: 50
                }
            }
        }
    },

    methods: {
        gabed(event) {
            event.stopPropagation();
            if (!this.round.start) {
                this.round.start = true;
                this.runTimer();
            }
            if (!this.round.finish) this.successShot();
        },
        runTimer() {
            this.round.timer = setInterval(() => {
                this.round.countDown -= 0.01;
                if (this.round.countDown <= 0) clearInterval(this.round.timer);
            }, 10);
        },
        stopTimer() {
            clearInterval(this.round.timer);
        },
        successShot() {
            this.round.shot++;
            this.round.total++;
            this.changeTargetPosition();
            this.resize();
        },
        missShot(event) {
            if (this.partyInProgress) {
                console.log(this.round.start);
                this.round.miss++;
                this.round.total++;
            }
        },
        changeTargetPosition() {
            const newPos = this.getRandomPos();
            this.target.pos.x = newPos.x;
            this.target.pos.y = newPos.y;

            const target = document.getElementById(this.target.name);
            target.style.top = this.target.pos.x + "%";
            target.style.left = this.target.pos.y + "%";
        },
        getRandomPos() {
            return {
                x: MyMath.getRandomInt(100),
                y: MyMath.getRandomInt(100)
            };
        },
        resize() {
            this.round.resizeCount--;

            if (this.round.resizeCount <= 0) {
                const target = document.getElementById(this.target.name);
                this.target.size -= 2;

                target.style.width = this.target.size + "px";
                target.style.height = this.target.size + "px";
                target.style.backgroundSize = this.target.size + "px";

                this.round.resizeCountOrigin++;
                this.round.resizeCount = this.round.resizeCountOrigin;
            }
        },
        reset() {
            this.round.start = false;
            this.round.finish = false;
            this.round.shot = 0;
            this.round.miss = 0;
            this.round.total = 0;
            this.round.resizeCountOrigin = 1;
            this.round.resizeCount = 1;
            this.stopTimer();
            this.round.countDown = 30;
            
            this.target.size = 60;
            this.target.pos.x = 50;
            this.target.pos.y = 50;

            target.style.width = this.target.size + "px";
            target.style.height = this.target.size + "px";
            target.style.backgroundSize = this.target.size + "px";
        }
    },

    computed: {
        partyInProgress() {
            return this.round.start && !this.round.finish;
        },
        timeLeft() {
            return this.round.countDown.toFixed(2);
        }
    }
}
</script>

<style lang="scss">
    #aimTrainer {
        height: 80vh;
    }
    
    $targetSize: 60px;
    #target {
        position: relative;
        /* initial position */
        top: 50%;
        left: 50%;
        /* round */
        width: $targetSize;
        height: $targetSize;
        background-image: url("../img/gabe.jpg");
        background-size: $targetSize;
        border-radius: 50%;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
</style>
