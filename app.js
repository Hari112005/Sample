let timer = 0
let DisplayTimer = document.querySelector(".timer");
const apidata = document.getElementById("apidata");
const Start =()=>{
    setInterval(()=>{
    DisplayTimer.innerHTML=(`<h3>${timer}<h3/>`)
    timer+=1; 
    console.log("clicked");
      
},1000);
}

fetch('https://quotes-api-self.vercel.app/quote')
  .then(response => response.json())
  .then(data => {
    apidata.innerText=(data.quote);
    console.log(data.quote);
    
  })
  .catch(error => {

    console.error(error);
  });
 
function checking(){
  let data = document.getElementsByClassName("inptdata");
  if(apidata.includes(data)){
    apidata.style.color="yellow";
  } 
    
}
