let Player={
  playername:"sowjanya"
}
cards=[]
let sum = 0;
let b = false;
let isAlive = false;
let message = "";
let el=document.getElementById('ele')
let suu=document.getElementById('su')
let c=document.getElementById('card')
let playerr=document.getElementById('player')
playerr.textContent="Player" +" : "+ Player.playername
function render(){
    c.textContent='Cards :'
    for(let i=0;i<cards.length;i+=1){
      c.textContent+=cards[i]+" "
    }

    suu.textContent="Sum:"+sum
    if (sum <= 20) {
        message = "draw a new card 😊";
      } else if (sum === 21) {
        message = "wohoooo you have got a black jack🥳";
        b = true;
      } else {
        message = "you are out of from game😭";
        isAlive = false;
      }
      el.textContent=message
}
function getRandomCard()
{
  let rc=Math.floor(Math.random()*13)+1
  if (rc>10){
    return 10
  }
  else if(rc ===1){
     return 11
  }
  else{
    return rc
  }
}
function neww(){
  if(isAlive===true && b==false){
     let card=getRandomCard()
     sum+=card
     cards.push(card)
     console.log(cards)
     render()
     }
}
function start(){
  isAlive = true
  let num = getRandomCard();
  let numm = getRandomCard();
  cards=[num,numm]
  sum = num + numm;
  render()
}