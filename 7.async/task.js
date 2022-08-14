class AlarmClock{
	constructor( ){
		this.alarmCollection = [];
		this.timerId = null;
	}
	addClock(time, callback, id){
		if (typeof id === "undefined"){
			throw new Error("error text");
		}
		if(this.alarmCollection.some(alarm => alarm.id === id)) {
            console.error("Будильник c таким id уже существует");
            return;
        }
		this.alarmCollection.push({ id, time, callback });
		
	}
	removeClock(id){
		let newIdCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
        let success = newIdCollection.length !== this.alarmCollection.length;
        this.alarmCollection = newIdCollection;
        return success;
		
	}
	getCurrentFormattedTime(){
		 let zeroAdd = (number) => {
         if (number < 10) {
            return '0' + number;
         }
         return number;
      }
      let actualTime = new Date();
      let minutes = zeroAdd(actualTime.getMinutes());
      let hours = zeroAdd(actualTime.getHours());
      return hours + ':' + minutes;
	}
	start(){
		let checkClock = (alarm) => {
         let clock = this.getCurrentFormattedTime();
         if (alarm.time === clock) {
            return alarm.callback();
         }
      }
      if (this.timerId === null) {
         this.timerId = setInterval(() => {
            this.alarmCollection.forEach(alarm => checkClock(alarm));
         }, 1000);
      }
      return;
	}
	  stop() {
      if (this.timerId !== null) {
         clearInterval(this.timerId);
         return this.timerId = null;
      }
   }
   printAlarms() {
      console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length);
      return this.alarmCollection.forEach(clock => console.log(`Будильник №${alarm.id} заведен на : ${alarm.time}`));
   }
   clearAlarms() {
      this.stop();
      return this.alarmCollection = [];
   }
}
// пример.
function testCase(){
 let phoneAlarm = new AlarmClock();
	
  phoneAlarm.addClock("09:00", () => console.log("Пopa вставать"), 1);
  phoneAlarm.addClock("09:01", () => { console.log("Дaвaй, вставай уже!"); phoneAlarm.removeClock(2) }, 2);
  phoneAlarm.addClock( "09:01", () => console.log("Иди умываться!"));
  phoneAlarm.addClock("09:02", () => { console.log("Вставай, а то проспишь!"); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms(); }, 3);
  phoneAlarm.addClock("09:05", () => console.log("Вставай, а то проспишь!"), 1);
  phoneAlarm.printAlarms();
  phoneAlarm.start();
}