"use strict";


import AimTrainer from './vue/AimTrainer.js';


function start() {
    AimTrainer.init();
}

document.addEventListener("DOMContentLoaded", (event) => start() );
