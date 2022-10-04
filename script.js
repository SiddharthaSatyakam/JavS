document.getElementsByTagName("nav")[0].firstElementChild.style.color="green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color="green";

Array.from(document.getElementsByTagName("li")).forEach((x)=>{
  x.style.background="cyan";
})
