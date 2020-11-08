const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click' ,flipcard));
let hasflippedcard = false ;
let firstcard , secondcard ;
let lockboard =false ;

function flipcard(){
  if(lockboard) return ;
  if(this === firstcard)
  return ;
  this.classList.add('flip');
  if(!hasflippedcard){
    hasflippedcard =true ;
    firstcard =this  ;
  }else{
    hasflippedcard =false ;
    secondcard =this ;
   checkformatch()
  }
}

function checkformatch(){
  if(firstcard.dataset.image === secondcard.dataset.image){
    firstcard.removeEventListener('click' ,flipcard);
    secondcard.removeEventListener('click' ,flipcard);
  }else{
    setTimeout(() => {
      firstcard.classList.remove('flip');
    secondcard.classList.remove('flip');
    }, 1000);
    
  }
}
function checkformatch(){
  let ismatch  =firstcard.dataset.image === secondcard.dataset.image ;
  ismatch ? match() : notmatch()

}
function match(){
  firstcard.removeEventListener('click' ,flipcard);
    secondcard.removeEventListener('click' ,flipcard);
}
function notmatch(){
  lockboard =true ;
  setTimeout(() => {
    firstcard.classList.remove('flip');
  secondcard.classList.remove('flip');
  lockboard =false;
  }, 1000);
}
(function randomise(){
cards.forEach(i => {
  let randpos =Math.floor(Math.random()*12);
  i.style.order =randpos ;
})
})()