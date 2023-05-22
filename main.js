let show=document.getElementById('show');
let close=document.getElementById('close');
let main=document.getElementById('main');

show.addEventListener('click',function(){
  if(main.style.right!="0px"){
    main.style.right="0px"
  }
  
})
close.addEventListener('click',function(){
  main.style.right="-200px"
})