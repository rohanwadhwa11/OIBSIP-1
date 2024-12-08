let btn = document.querySelectorAll(".btn");
let display = document.querySelector(".display");
let body = document.querySelector("body");
let nextOne = 0;
let operation = false;
let view = "";
let opcode = "";
let point = "";
let next = "";
displayed();
let keywork = (key)=>{
  operation = true;
  view = point+nextOne +key;
    displayed(view);
    nextOne = 0;
    opcode = key;
    point= "";
}

  function displayed(inp = 0){
  display.innerHTML = `<h1>${inp}</h1>`;
  }
  btn.forEach((btns)=> {btns.addEventListener("click",function(){
  inputValue(this.innerText);
  }
)})
  /* normal button work */
  let inputValue = (val) => {
    if(operation == true){
        nextOne = nextOne*10 + parseInt(val);
        console.log(point,nextOne,view);
    displayed(view+nextOne);
    if(point != ""){
      displayed(point+nextOne);
    }
    }
    else{
     nextOne = nextOne*10 + parseInt(val);
     
    displayed(point + nextOne);
    }
  }


        [".add",".sub",".mul",".divide"].forEach((op) => {
          let e = document.querySelector(op);
          e.addEventListener("click",work);
        })

        function work(){
              operation = true;
              view = point+nextOne +this.innerText
              displayed(view);
              nextOne = 0;
              opcode = this.innerText;
              console.log(view);
              point = "";
        }

       let crFn =()=>{
          if(operation == true){
            if(nextOne == ""){
              nextOne = view.slice(0,-1);
              operation = false;
              console.log(nextOne);
              displayed(nextOne);
          }
          else{
            console.log(view,nextOne);
          let str = ""+nextOne;
          nextOne = str.slice(0,-1);
          displayed(view+nextOne);
          }
        
          }
          else{
          let str = ""+nextOne;
          nextOne = str.slice(0,-1);
          console.log(nextOne);
          displayed(nextOne);
          }
        }

        let cr = document.querySelector(".undo");
        cr.addEventListener("click",crFn);

        let acFn = ()=>{
          displayed(0);
          view = 0;
          nextOne = 0;
          point = "";
        };

        let ac = document.querySelector(".clear");
        ac.addEventListener("click",acFn);


        
      let equalFn = ()=>{
        let total = 0;
        nextOne = next+nextOne;
        switch(opcode){
          case '+':
            view = view.slice(0,-1);
            total = parseFloat(view)+parseFloat(nextOne);
            total = Math.round(total*100)/100;
            console.log(total);
            break;
          case '-':
            view = view.slice(0,-1);
            total = parseFloat(view)- parseFloat(nextOne);
              total = Math.round(total * 100)/100;
              console.log(total);
            break;
          case '*':
            view = view.slice(0,-1);
            total = parseFloat(nextOne)*parseFloat(view);
            total = Math.round(total*100)/100;
            console.log(total);
            break;
          case '/':
            view = view.slice(0,-1);
            total = parseFloat(view)/parseFloat(nextOne);
            total = Math.round(total*100)/100;
            console.log(total);
            break;
        }
        displayed(total);
        console.log(total);
        nextOne = 0;
        view = "";
        operation = false;
        point= "";
      }


      let equalTo = document.querySelector(".total");
      equalTo.addEventListener("click",equalFn);

      let pointWork = ()=>{
        point = "";
        point = view+nextOne + ".";
        displayed(point);
        if(operation == true){
          next = nextOne+".";
        }
        nextOne = 0;
      };


      let pointFn = document.querySelector(".point");
      pointFn.addEventListener("click",pointWork)

      window.addEventListener("keydown",(e)=>{
        console.log(e.key);
        for(let i=0 ; i<10 ; i++){
          if(i == e.key){
            inputValue(i);
          }
          }
        switch(e.key){
          case '+':
            keywork(e.key);
            break;
          case '-':
            keywork(e.key);
            break;
          case '*':
            keywork(e.key);
            break;
          case '/':
            keywork(e.key);
            break;
          case "Enter":
            equalFn();
            break;
          case "Backspace":
            crFn();
            break;
          case ".":
            pointWork();
            break;
          case "Delete":
            acFn();
            break;
        }
      })
      

  

//on completion please read this implementation and understand it properly for concept building
