const state = {
    handPlayed: { myPlay: "false" },
    listeners: [],
    whoWin: { win: 0 },
    getState() {
        return this.handPlayed;
    },
    setState(newState: {}) {
        this.handPlayed = newState;
    },
    resetState() {
        this.handPlayed = { myPlay: "false" };
    },
    subscribe(callback: Function) {
        this.listeners.push(callback);
    },
    verifyPlayerWinner() {
        const lastResult = this.getState();
        let myPlay = lastResult.myPlay;
        let computerPlay = lastResult.computerPlay;
        for (const callback of this.listeners) {
            callback();
        }
        //win
        if (myPlay == 0 && computerPlay == 2) {
            let lastSave = localStorage.getItem("Vos") ? localStorage.getItem("Vos") : "0";
            let addScore = parseInt(lastSave!) + 1;
            localStorage.setItem("Vos", addScore.toString());
            this.whoWin.win = 1;
        } else if (myPlay == 1 && computerPlay == 0) {
            let lastSave = localStorage.getItem("Vos") ? localStorage.getItem("Vos") : "0";
            let addScore = parseInt(lastSave!) + 1;
            localStorage.setItem("Vos", addScore.toString());
            this.whoWin.win = 1;
        } else if (myPlay == 2 && computerPlay == 1) {
            let lastSave = localStorage.getItem("Vos") ? localStorage.getItem("Vos") : "0";
            let addScore = parseInt(lastSave!) + 1;
            localStorage.setItem("Vos", addScore.toString());
            this.whoWin.win = 1;
        }

        //draw
        if (myPlay == computerPlay) {
            this.whoWin.win = 2;
        }

        //loss
        if (myPlay == 2 && computerPlay == 0) {
            let lastSave = localStorage.getItem("maquina") ? localStorage.getItem("maquina") : "0";
            let addScore = parseInt(lastSave!) + 1;
            localStorage.setItem("maquina", addScore.toString());
            this.whoWin.win = 3;
        } else if (myPlay == 0 && computerPlay == 1) {
            let lastSave = localStorage.getItem("maquina") ? localStorage.getItem("maquina") : "0";
            let addScore = parseInt(lastSave!) + 1;
            localStorage.setItem("maquina", addScore.toString());
            this.whoWin.win = 3;
        } else if (myPlay == 1 && computerPlay == 2) {
            let lastSave = localStorage.getItem("maquina") ? localStorage.getItem("maquina") : "0";
            let addScore = parseInt(lastSave!) + 1;
            localStorage.setItem("maquina", addScore.toString());
            this.whoWin.win = 3;
        }
    },
};

export { state };
