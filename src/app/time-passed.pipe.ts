import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): any {
 
      let thatDay = new Date(value);
      let now: Date = new Date(); //asin today
  
      const seconds = Math.round(Math.abs(now.getTime() - thatDay.getTime()) / 1000); //today minus the day posted


           //periods in seconds
      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };

      if(seconds < 30){
        return 'a few seconds ago'
      } else {
        let counter;
      for(const i in intervals){ //each item in the intervals object
        //divide each by the difference in seconds and assign it to counter
        counter = Math.floor(seconds / intervals[i]);
        
        if(counter > 0){
          if(counter === 1){
            return `${counter} ${i} ago`;
          } else {
            return `${counter} ${i}s ago`;
          }
        }
      }
      }
    

    return seconds;
  }

}
