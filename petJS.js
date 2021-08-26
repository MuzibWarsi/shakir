document.getElementById("frm").addEventListener("submit",function(){
    //alert("Hello");
  event.preventDefault();
  var obj=new FormData(this);
  var pets={};
  obj.forEach((e,k)=>{
      console.log(e,k)
    pets[k]=e;
  }) 
  console.log(pets);
})