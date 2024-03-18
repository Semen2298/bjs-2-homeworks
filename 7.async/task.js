class AlarmClock {
    constructor(alarmCollection, intervalId=null){
        this.alarmCollection = [];
        this.intervalId = intervalId;
    }
    addClock(time, callback) {
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        const existingAlarm = this.alarmCollection.some(alarm => alarm.time === time);
        if (existingAlarm === true) {
            console.warn('Уже присутствует звонок на это же время');
        }

        
        const alarm = {
            time: time,
            callback: callback,
            canCall: true
        };
        this.alarmCollection.push(alarm);
    }
    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }
    getCurrentFormattedTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    start() {
        if(this.intervalId !== null){
            return;
        }
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
    
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false; 
                    alarm.callback();
                }
            });
        }, 1000);
    }
    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls(){
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}