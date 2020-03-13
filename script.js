window.addEventListener("load",init)
// Global varible
            let time =5;
            let score=0;
            let display ;

            // dom element
        let randomArray =["hello","river","welcome","javascript"]
        let randomWord = document.getElementById("randomWord")
        let mytime = document.getElementById("time")
        let myscore = document.getElementById("score")
        let searchWord = document.getElementById("searchWord")
        let massage = document.getElementById("massage")


      
      

        
    //    function implemintation

   
//1 - function to excute random word
     function randomkey(randomArray){
           let randomIndex =Math.floor(Math.random()*randomArray.length)
           randomWord.innerHTML=randomArray[randomIndex]
     }
 // 2 - function to excute time

     function countDown(){
         if(time>0){
            time--
         }else if(time===0){
            // massage.innerHTML="game over!"
            display=false
            console.log(display)
         }
         mytime.innerHTML="time left : "+time
     }

// 3 - check startMatch function
     function stratMatch(){
         if(matchWord()){
            display=true;
            time =6;
            randomkey(randomArray)
            searchWord.value=""
            score++
            // console.log("match!!!")
         }
         if(score===-1){
           myscore.innerHTML="score : "+0
          }else{
            myscore.innerHTML="score : "+score
         }
     }
 // 4 - check matchWord function

         function matchWord(){ 
         
            if(searchWord.value===randomWord.innerHTML){
                massage.innerHTML="correct"
                 return true
            }else{
                massage.innerHTML=""
                return  false
            }
        }
// 5 - check Stuts function
function checkStauts(){
    if(!display&&time===0){
        massage.innerHTML="game over!"
        score=-1
    }
}

//this function to excute all function in window
          function init(){
            //excute of random function 
            randomkey(randomArray)
            //excute of counTime function 
            setInterval(countDown,1000)
            //excute of match input with randomword function 
            searchWord.addEventListener("input",stratMatch)
            //excute of checkStuts function 
            setInterval(checkStauts,50)
            searchWord.focus()

       
}