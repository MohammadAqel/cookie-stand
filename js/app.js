'use strict';


let hours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','Total:'];
let Total=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function Store(location , minCust , maxCust , avgCookieS){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieS = avgCookieS;
  this.hourlySales = [];
  this.dailySales = 0;
}

Store.prototype.custPerHour = function(){
  let range = this.maxCust-this.minCust;
  let randomCounter=Math.random()*range+this.minCust;
  return Math.ceil(randomCounter);
};

Store.prototype.render = function(){
  const tableEl = document.getElementById('table');
  const tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);
  const thEl = document.createElement('th');
  tableRow.appendChild(thEl);
  thEl.textContent = this.location;
  

  for (let i=0; i<hours.length-1; i++){
    let numberOfCookies = Math.ceil(this.custPerHour()*this.avgCookieS);
    this.hourlySales.push(numberOfCookies);
    this.dailySales += numberOfCookies;
    const tableDataEl = document.createElement('td');
    tableRow.appendChild(tableDataEl);
    tableDataEl.textContent = this.dailySales;
  }
  


  const totalDataEl = document.createElement('td');
  tableRow.appendChild(totalDataEl);
  totalDataEl.textContent = this.dailySales;
  this.hourlySales.push(this.dailySales);
  for (let z=0; z<this.hourlySales.length ; z++){
    Total[z]=Total[z]+this.hourlySales[z];
    
  }

  

  Store.prototype.totals = function(){
    const totalRowEl = document.createElement('tr');
    tableEl.appendChild(totalRowEl);
    const totalHeadingEl = document.createElement('th');
    totalRowEl.appendChild(totalHeadingEl);
    totalHeadingEl.textContent = 'Total';
    for (let x=0; x<Total.length ; x++){
      const totalDataEl = document.createElement('th');
      totalRowEl.appendChild(totalDataEl);
      totalDataEl.textContent = Total[x];
    }
  };


};

const seattle = new Store('Seattle', 23, 65,6.3);
seattle.custPerHour();
seattle.render();

const tokyo = new Store('Tokyo',3,24,1.2);
tokyo.custPerHour();
tokyo.render();

const dubai = new Store('Dubai',11,38,3.7);
dubai.custPerHour();
dubai.render();

const paris = new Store('Paris',20,38,2.3);
paris.custPerHour();
paris.render();

const lima = new Store('Lima',2,16,4.6);
lima.custPerHour();
lima.render();

dubai.totals();


// 'use strict';
// let hours=['6am','7am','8am','9am','10am','11m','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// let SeattleCookie={
//     location:'Seattle',
//        Min:23,
//        Max:65,
//        AvgCookie:6.3,
//        hourlySales:[],
//        dailySales:0,
       
//        randomCust:function () {
//          let range=this.Max-this.Min;
//          let randomCounter=Math.random()*range+this.Min;
//          return Math.ceil(randomCounter);
//         },
  
//         hourlyDailySale:function(){
//           for(let i=0;i<hours.length;i++){
//             let numberOfCookies=Math.ceil(this.randomCust()*this.AvgCookie);
//             this.hourlySales.push(numberOfCookies);
//             this.dailySales+=numberOfCookies;
  
//           }
         
  
         
//         },
  
//         render:function(){
//           let containaer=document.getElementById('Seattle');
//           let h2=document.createElement('h2');
//           h2.innerText=this.location;
//           containaer.appendChild(h2);
//           let list=document.createElement('ul');
//           containaer.appendChild(list);
//           for(let i=0;i<hours.length;i++){
//             let listData=document.createElement('li');
//             listData.innerText=hours[i]+' : '+this.hourlySales[i]+' cookies';
//             list.appendChild(listData);
//           }
//           let listData=document.createElement('li');
//           listData.innerText  ='Total: '+ this.dailySales+' cookies';
//           list.appendChild(listData);
//         },
  
  
      
//   };
//   SeattleCookie.hourlyDailySale();
//   SeattleCookie.render();

// let TokyoCookie={
//   location:'Tokyo',
//      Min:3,
//      Max:24,
//      AvgCookie:1.2,
//      hourlySales:[],
//      dailySales:0,
     
//      randomCust:function () {
//        let range=this.Max-this.Min;
//        let randomCounter=Math.random()*range+this.Min;
//        return Math.ceil(randomCounter);
//       },

//       hourlyDailySale:function(){
//         for(let i=0;i<hours.length;i++){
//           let numberOfCookies=Math.ceil(this.randomCust()*this.AvgCookie);
//           this.hourlySales.push(numberOfCookies);
//           this.dailySales+=numberOfCookies;

//         }
       

       
//       },

//       render:function(){
//         let containaer=document.getElementById('Tokyo');
//         let h2=document.createElement('h2');
//         h2.innerText=this.location;
//         containaer.appendChild(h2);
//         let list=document.createElement('ul');
//         containaer.appendChild(list);
//         for(let i=0;i<hours.length;i++){
//           let listData=document.createElement('li');
//           listData.innerText=hours[i]+' : '+this.hourlySales[i]+' cookies';
//           list.appendChild(listData);
//         }
//         let listData=document.createElement('li');
//         listData.innerText  ='Total: '+ this.dailySales+' cookies';
//         list.appendChild(listData);
//       },


    
// };

// TokyoCookie.hourlyDailySale();
// TokyoCookie.render();






// let DubaiCookie={
//   location:'Dubai',
//      Min:11,
//      Max:38,
//      AvgCookie:3.7,
//      hourlySales:[],
//      dailySales:0,
     
//      randomCust:function () {
//        let range=this.Max-this.Min;
//        let randomCounter=Math.random()*range+this.Min;
//        return Math.ceil(randomCounter);
//       },

//       hourlyDailySale:function(){
//         for(let i=0;i<hours.length;i++){
//           let numberOfCookies=Math.ceil(this.randomCust()*this.AvgCookie);
//           this.hourlySales.push(numberOfCookies);
//           this.dailySales+=numberOfCookies;

//         }
       

       
//       },

//       render:function(){
//         let containaer=document.getElementById('Dubai');
//         let h2=document.createElement('h2');
//         h2.innerText=this.location;
//         containaer.appendChild(h2);
//         let list=document.createElement('ul');
//         containaer.appendChild(list);
//         for(let i=0;i<hours.length;i++){
//           let listData=document.createElement('li');
//           listData.innerText=hours[i]+' : '+this.hourlySales[i]+' cookies';
//           list.appendChild(listData);
//         }
//         let listData=document.createElement('li');
//         listData.innerText  ='Total: '+ this.dailySales+' cookies';
//         list.appendChild(listData);
//       },


    
// };

// DubaiCookie.hourlyDailySale();
// DubaiCookie.render();


// let ParisCookie={
//   location:'Paris',
//      Min:20,
//      Max:38,
//      AvgCookie:2.3,
//      hourlySales:[],
//      dailySales:0,
     
//      randomCust:function () {
//        let range=this.Max-this.Min;
//        let randomCounter=Math.random()*range+this.Min;
//        return Math.ceil(randomCounter);
//       },

//       hourlyDailySale:function(){
//         for(let i=0;i<hours.length;i++){
//           let numberOfCookies=Math.ceil(this.randomCust()*this.AvgCookie);
//           this.hourlySales.push(numberOfCookies);
//           this.dailySales+=numberOfCookies;

//         }
       

       
//       },

//       render:function(){
//         let containaer=document.getElementById('Paris');
//         let h2=document.createElement('h2');
//         h2.innerText=this.location;
//         containaer.appendChild(h2);
//         let list=document.createElement('ul');
//         containaer.appendChild(list);
//         for(let i=0;i<hours.length;i++){
//           let listData=document.createElement('li');
//           listData.innerText=hours[i]+' : '+this.hourlySales[i]+' cookies';
//           list.appendChild(listData);
//         }
//         let listData=document.createElement('li');
//         listData.innerText  ='Total: '+ this.dailySales+' cookies';
//         list.appendChild(listData);
//       },


    
// };

// ParisCookie.hourlyDailySale();
// ParisCookie.render();


// let LimaCookie={
//     location:'Lima',
//        Min:20,
//        Max:38,
//        AvgCookie:2.3,
//        hourlySales:[],
//        dailySales:0,
       
//        randomCust:function () {
//          let range=this.Max-this.Min;
//          let randomCounter=Math.random()*range+this.Min;
//          return Math.ceil(randomCounter);
//         },
  
//         hourlyDailySale:function(){
//           for(let i=0;i<hours.length;i++){
//             let numberOfCookies=Math.ceil(this.randomCust()*this.AvgCookie);
//             this.hourlySales.push(numberOfCookies);
//             this.dailySales+=numberOfCookies;
  
//           }
         
  
         
//         },
  
//         render:function(){
//           let containaer=document.getElementById('Lima');
//           let h2=document.createElement('h2');
//           h2.innerText=this.location;
//           containaer.appendChild(h2);
//           let list=document.createElement('ul');
//           containaer.appendChild(list);
//           for(let i=0;i<hours.length;i++){
//             let listData=document.createElement('li');
//             listData.innerText=hours[i]+' : '+this.hourlySales[i]+' cookies';
//             list.appendChild(listData);
//           }
//           let listData=document.createElement('li');
//           listData.innerText  ='Total: '+ this.dailySales+' cookies';
//           list.appendChild(listData);
//         },
  
  
      
//   };
  
//   LimaCookie.hourlyDailySale();
//   LimaCookie.render();




  