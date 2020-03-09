"use strict";


import MyMath from '../tools/MyMath.js';


class AimTrainer {

    static init() {
        AimTrainer.game();
    }

    static game() {
        new Vue({
            el: '#aimTrainer',

            data: {
                round: {
                    start: false,
                    finish: false,
                    shot: 0,
                    miss: 0,
                    total: 0,
                    resizeCountOrigin: 1,
                    resizeCount: 1,
                    countDown: 30
                },
                target: {
                    name: "target",
                    size: 60,
                    pos: {
                        x: 50,
                        y: 50
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
                    setTimeout(() => {
                        this.round.countDown--;
                        if (this.round.countDown <= 0) this.round.finish = true;
                        if (!this.round.finish) this.runTimer();
                    }, 1000);
                },
                successShot() {
                    this.round.shot++;
                    this.round.total++;
                    this.changeTargetPosition();
                    this.resize();
                },
                missShot(event) {
                    if (!this.round.finish) {
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
                    this.round.countDown = 30;
                    this.target.size = 60;
                    this.target.pos.x = 50;
                    this.target.pos.y = 50;

                    target.style.width = this.target.size + "px";
                    target.style.height = this.target.size + "px";
                    target.style.backgroundSize = this.target.size + "px";
                }
            }
        });
    }

}

export default AimTrainer;
