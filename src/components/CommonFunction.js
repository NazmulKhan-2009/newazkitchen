export const orderHandleImg=(order)=>{
 let OrderStatusImg;
 if(order==='processing'){
   OrderStatusImg="https://media.tenor.com/images/80072d4e3513d5e9858ba0e7df572d12/tenor.gif"
 }else if(order==='shipping'){
   OrderStatusImg="https://media1.giphy.com/media/kEixMotX2m7eycR8BG/giphy.gif"
 }else if(order==='delivered'){
   OrderStatusImg="https://thumbs.dreamstime.com/b/l-homme-d-porte-la-bo%C3%AEte-en-carton-vide-30658267.jpg"
 }
return OrderStatusImg

}