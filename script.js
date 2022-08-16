gsap.to("#react1",{
    y:1,
    x:-1400,
    rotate:"180deg",
    backgroundColor:"purple",
    duration:7,
    ease: Expo.easeInOut,
    borderRadius:"50%",
    repeat:-1
    
})
gsap.to("#react2",{
    y:-100,
    x:1400,
    rotate:"180deg",
    backgroundColor:"purple",
    duration:7,
    borderRadius:"50%",
    ease: Expo.easeInOut,
    borderRadius:"50%",
    repeat:-1

})


const questions = [

{'que':"what year javacript launched",
'a':'1996',
'b':'1991',
'C':'1998',
'd':'1995',
'correct':'b'
},
{'que':"what is the full name of css",
'a':'Hyper text markup language',
'b':'Cascading styles sheet',
'C':'Cascadings style sheet',
'd':'Cascading style sheet',
'correct':'C'
},
{
   'que':"which of the following is a markup langauage ",
'a':'CSS',
'b':'PHP',
'C':'HTML',
'd':'JAVASCRIPT',
'correct':'C'
},
]
var timer= 10;
let index = 0;
let total = questions.length;
let answer= questions[index].correct
let right=0;
let wrong =0;
const optioninput = document.querySelectorAll(".option")
const qbox = document.getElementById("qbox")
let btn = document.querySelector(".btn");

const loadquestions =() => {
  if(index === total){
    return endq()
  }
  reset()
  
    const data = questions[index];
    qbox.innerText= `${index+1}) ${data.que}`
    optioninput[0].nextElementSibling.innerText =data.a;
    optioninput[1].nextElementSibling.innerText =data.b;
    optioninput[2].nextElementSibling.innerText =data.C;
    optioninput[3].nextElementSibling.innerText =data.d;

}

const submitans=()=>{
  const data = questions[index];
  const ans = getanswer();
  console.log(ans,data.correct)
  if(ans == data.correct){
    right++;
  }else{
    wrong++;
  }
  index++;
  loadquestions();
  return;
}
const getanswer = () =>{

  optioninput.forEach(
    (input) => {
      if(input.Checked) {
         answer = input.value;
        }
      }
  )
  return answer    
}

const  reset = () => {
  optioninput.forEach(
    (input) =>{
      input.Checked = false
    }
    )
  }
  const endq = () =>{
    document.getElementById("main").innerHTML = `
    <div style = "text-align:center   
    position: absolute;
    left: 25%;
    top: 30%;
    color:grey;
    font-family: "aeonik pro";
    font-weight:900;
    font-size:270%; 
  
   ">
    <h3 style =" position: absolute;
    left: -5%;
    top: 140%;
    font-size:270%; 
    color: rgb(23, 160, 246);
    ">thanks for playing</h3>
    <h2>${right} / ${total} are correct</h2>
    </div>`
  }
  function abc(){
    var life = setInterval(function(){
      if(timer > 0){
        --timer;
        document.querySelector("#time").textContent=timer
      }
      else{
        clearInterval(life)
        document.getElementById("main").innerHTML =`
        <h3  style=" left: 25%;
        top: 30%;
        color: rgb(23, 160, 246);
        font-family: "aeonik pro";
        font-weight:900;
        font-size:120px;">thanks for playing</h3>`
        loadquestions();
      }
    },1000)
  };

  btn.addEventListener("click",function(){
     submitans()
  })
  console.log(answer)
  abc()
  loadquestions()
  


