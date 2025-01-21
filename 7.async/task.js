class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time === undefined || callback === undefined || time === null || callback === null) {
            throw new Error('Отсутствуют обязательные аргументы')
        }

        if (this.alarmCollection.filter(item => item === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({ callback, time, canCall: true });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", { 
            hour: "2-digit", 
            minute: "2-digit" 
        });
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }
        
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(item => {
                if (item.time === this.getCurrentFormattedTime() && item.canCall) {
                    item.canCall = false;
                    item.callback();
                }
            });
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((item) => { item.canCall = true });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
