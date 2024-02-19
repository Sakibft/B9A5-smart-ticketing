 const fbtn = document.getElementById('buyTickets');
 
 fbtn.addEventListener('click',function(){
 
console.log('clicked');
 });

 
 
 const mid = 'Economoy';
 let tsum = 0;
 let teven = 40;
let totalPrice = 0;
 const buttons = document.querySelectorAll(".set-btn");
 for(let index = 0; index<buttons.length;index++){ 
  const button = buttons[index];
  button.addEventListener("click",function(){
    
     
    // const bootto = document.querySelectorAll(".set-btn");
    // console.log(bootto);
    // const boto = button.querySelectorAll('.btn');
    // console.log(boto);
   

    // button.classList.add('bg-red-600');
    const bgcolor = button.querySelector('button');
   
    bgcolor.classList.add('text-white');
     bgcolor.classList.add('bg-green-400');
     

    const title = button.querySelector('span').innerText;
    
    const price =parseInt(document.getElementById("busPrice").innerText);
     totalPrice+= price ;
      console.log(totalPrice);
    
// 1 set
    const busSit = document.getElementById('bus-sit')
    const th = document.createElement("h1");
    th.innerText = title;
    busSit.appendChild(th);
    // 2 class
    document.getElementById('bus-sit')
    const t = document.createElement("h1");
    t.innerText = mid;
    busSit.appendChild(t);
    // 3 price
    document.getElementById('bus-sit')
    const td = document.createElement("h1");
    td.innerText = price;
    busSit.appendChild(td);
   
    // title count
    tsum = tsum +1;
   document.getElementById('titleCount').innerText = tsum;
      
     
    // seats even
    teven = teven -1;
    document.getElementById('seats-even').innerText=teven;
    
   
   
 
    //  document.getElementById('seat').innerText = title;
  
    //  document.getElementById('price').innerText = price;
  
    document.getElementById('uptotal').innerText = totalPrice;
    document.getElementById('grand-total').innerText=totalPrice;

  })
  // console.log(button);
 }


//  popup
 const nextBtn = document.getElementById('next-btn');
 const ppp = document.getElementById('popup');
 const titcketeBey = document.getElementById('ticket-buy');
 const closepopup = document.getElementById('closePopup');
//  function openPopup(){
//   ppp.classList.remove('hidden')
//  }
//  function closePopup(){
//   ppp.classList.add('hidden')
//  }
 nextBtn.addEventListener('click',function(){
  titcketeBey.classList.add('hidden')
ppp.classList.remove('hidden')
   console.log('hah');
 });
 closepopup.addEventListener('click',function(){
  titcketeBey.classList.remove('hidden')
  ppp.classList.add('hidden')
 })



// coupon
 const aplybtn = document.getElementById('applyBtn');
 aplybtn.addEventListener('click',function(){
  console.log('hahah');
  // get the valu form input
   const couponElement = document.getElementById('inpoutField').value;
     if(couponElement === 'NEW15'){
      const multiply= totalPrice*15;
      const divided=multiply/100;
      const even=totalPrice-divided;
      document.getElementById('grand-total').innerText=even;
      console.log(even);
      const co =document.getElementById('coupon-hide');
      co.classList.add('hidden')
     }
     else if(couponElement === 'Couple20'){
      const multi = totalPrice*20;
      const divid = multi/100;
      const eve = totalPrice-divid;
      document.getElementById('grand-total').innerText=eve;
      console.log(eve);
      const co =document.getElementById('coupon-hide');
      co.classList.add('hidden')
     }
     else{
      alert('Invalid coupon')
     }
 })