'use strict';
let hours=['6am','7am','8am','9am','10am','11m','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let SeattleCookie={
    location:'Seattle',
       Min:23,
       Max:65,
       AvgCookie:6.3,
       hourlySales:[],
       dailySales:0,
       
       randomCust:function () {
         let range=this.Max-this.Min;
         let randomCounter=Math.random()*range+this.Min;
         return Math.ceil(randomCounter);
        },
  
        hourlyDailySale:function(){
          for(let i=0;i<hours.length;i++){
            let numberOfCookies=Math.ceil(this.randomCust()*this.AvgCookie);
            this.hourlySales.push(numberOfCookies);
            this.dailySales+=numberOfCookies;
  
          }
         
  
         
        },
  
        render:function(){
          let containaer=document.getElementById('Seattle');
          let h2=document.createElement('h2');
          h2.innerText=this.location;
          containaer.appendChild(h2);
          let list=document.createElement('ul');
          containaer.appendChild(list);
          for(let i=0;i<hours.length;i++){
            let listData=document.createElement('li');
            listData.innerText=hours[i]+' : '+this.hourlySales[i]+' cookies';
            list.appendChild(listData);
          }
          let listData=document.createElement('li');
          listData.innerText  ='Total: '+ this.dailySales+' cookies';
          list.appendChild(listData);
        },
  
  
      
  };
  SeattleCookie.hourlyDailySale();
  SeattleCookie.render();

let TokyoCookie={
  location:'Tokyo',
     Min:3,
     Max:24,
     AvgCookie:1.2,
     hourlySales:[],
     dailySales:0,
     
     randomCust:function () {
       let range=this.Max-this.Min;
       let randomCounter=Math.random()*range+this.Min;
       return Math.ceil(randomCounter);
      },

      hourlyDailySale:function(){
        for(let i=0;i<hours.length;i++){
          let numberOfCookies=Math.ceil(this.randomCust()*this.AvgCookie);
          this.hourlySales.push(numberOfCookies);
          this.dailySales+=numberOfCookies;

        }
       

       
      },

      render:function(){
        let containaer=document.getElementById('Tokyo');
        let h2=document.createElement('h2');
        h2.innerText=this.location;
        containaer.appendChild(h2);
        let list=document.createElement('ul');
        containaer.appendChild(list);
        for(let i=0;i<hours.length;i++){
          let listData=document.createElement('li');
          listData.innerText=hours[i]+' : '+this.hourlySales[i]+' cookies';
          list.appendChild(listData);
        }
        let listData=document.createElement('li');
        listData.innerText  ='Total: '+ this.dailySales+' cookies';
        list.appendChild(listData);
      },


    
};

TokyoCookie.hourlyDailySale();
TokyoCookie.render();






let DubaiCookie={
  location:'Dubai',
     Min:11,
     Max:38,
     AvgCookie:3.7,
     hourlySales:[],
     dailySales:0,
     
     randomCust:function () {
       let range=this.Max-this.Min;
       let randomCounter=Math.random()*range+this.Min;
       return Math.ceil(randomCounter);
      },

      hourlyDailySale:function(){
        for(let i=0;i<hours.length;i++){
          let numberOfCookies=Math.ceil(this.randomCust()*this.AvgCookie);
          this.hourlySales.push(numberOfCookies);
          this.dailySales+=numberOfCookies;

        }
       

       
      },

      render:function(){
        let containaer=document.getElementById('Dubai');
        let h2=document.createElement('h2');
        h2.innerText=this.location;
        containaer.appendChild(h2);
        let list=document.createElement('ul');
        containaer.appendChild(list);
        for(let i=0;i<hours.length;i++){
          let listData=document.createElement('li');
          listData.innerText=hours[i]+' : '+this.hourlySales[i]+' cookies';
          list.appendChild(listData);
        }
        let listData=document.createElement('li');
        listData.innerText  ='Total: '+ this.dailySales+' cookies';
        list.appendChild(listData);
      },


    
};

DubaiCookie.hourlyDailySale();
DubaiCookie.render();


let ParisCookie={
  location:'Paris',
     Min:20,
     Max:38,
     AvgCookie:2.3,
     hourlySales:[],
     dailySales:0,
     
     randomCust:function () {
       let range=this.Max-this.Min;
       let randomCounter=Math.random()*range+this.Min;
       return Math.ceil(randomCounter);
      },

      hourlyDailySale:function(){
        for(let i=0;i<hours.length;i++){
          let numberOfCookies=Math.ceil(this.randomCust()*this.AvgCookie);
          this.hourlySales.push(numberOfCookies);
          this.dailySales+=numberOfCookies;

        }
       

       
      },

      render:function(){
        let containaer=document.getElementById('Paris');
        let h2=document.createElement('h2');
        h2.innerText=this.location;
        containaer.appendChild(h2);
        let list=document.createElement('ul');
        containaer.appendChild(list);
        for(let i=0;i<hours.length;i++){
          let listData=document.createElement('li');
          listData.innerText=hours[i]+' : '+this.hourlySales[i]+' cookies';
          list.appendChild(listData);
        }
        let listData=document.createElement('li');
        listData.innerText  ='Total: '+ this.dailySales+' cookies';
        list.appendChild(listData);
      },


    
};

ParisCookie.hourlyDailySale();
ParisCookie.render();


let LimaCookie={
    location:'Lima',
       Min:20,
       Max:38,
       AvgCookie:2.3,
       hourlySales:[],
       dailySales:0,
       
       randomCust:function () {
         let range=this.Max-this.Min;
         let randomCounter=Math.random()*range+this.Min;
         return Math.ceil(randomCounter);
        },
  
        hourlyDailySale:function(){
          for(let i=0;i<hours.length;i++){
            let numberOfCookies=Math.ceil(this.randomCust()*this.AvgCookie);
            this.hourlySales.push(numberOfCookies);
            this.dailySales+=numberOfCookies;
  
          }
         
  
         
        },
  
        render:function(){
          let containaer=document.getElementById('Lima');
          let h2=document.createElement('h2');
          h2.innerText=this.location;
          containaer.appendChild(h2);
          let list=document.createElement('ul');
          containaer.appendChild(list);
          for(let i=0;i<hours.length;i++){
            let listData=document.createElement('li');
            listData.innerText=hours[i]+' : '+this.hourlySales[i]+' cookies';
            list.appendChild(listData);
          }
          let listData=document.createElement('li');
          listData.innerText  ='Total: '+ this.dailySales+' cookies';
          list.appendChild(listData);
        },
  
  
      
  };
  
  LimaCookie.hourlyDailySale();
  LimaCookie.render();




  