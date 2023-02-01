let a=document.getElementById("men")
let b=document.getElementById("women")
let c=document.getElementById("kids")
let d=document.getElementById("beauty")
let e=document.getElementById("login")
let f=document.getElementById("container8")
e.addEventListener("click",()=>{
    f.style.display="block"
})
let images=["./maruthi/shirt3.jpg" ,"./maruthi/shirt4.jpg" ,"./maruthi/shirt5.jpg" ,"./maruthi/shirt6.jpg" ]
 let i=0
 ima=document.getElementById("img")
 setInterval(
    ()=>{
        ima.src=images[i]
        i++
        if(i==images.length){
            i=0
        }
        

    },2000
    )

    let=g=document.getElementById("search")
    
    function maruthi(){
        let g=document.getElementById("search").value.toUpperCase()
        let car=document.getElementsByClassName("card")
        for(let i=0;i<car.length;i++){
            let k=car[i].querySelector("#super")
            if(k.innerText.toUpperCase().indexOf(g)>-1){
                car[i].style.display=""
            }
            else{
                car[i].style.display="none"
            }
        }

    }
    let cat=document.getElementById("cart")
    let con=document.getElementById("container9")
    let selcet=document.getElementsByClassName("add")
    let de=document.getElementById("details")
    let mrp=document.getElementById("mrp")
    let o=0
   
  


    
    for(let cs of selcet){
        cs.addEventListener("click",(e)=>{
            let para=e.target.parentNode
    
            let clone=para.cloneNode(true)
          
          

            

        let last=  clone.lastElementChild.innerText="Book- Now"
        let cha=document.createElement("button")
         cha.textContent="Remove"
        
         clone.lastElementChild.classList.add("buter")
         cha.classList.add("buter")
         
        clone.appendChild(cha)
        
       clone.classList.add("buter1")
       let plus=document.createElement("button")
       //let input=do cument.createElement("input")
       let minus=document.createElement("button")
       let input=document.createElement("input")
       input.value="quantity 1"
       minus.textContent="-"
      clone.appendChild(minus)
      // clone.appendChild(plus)
       clone.appendChild(input)
       clone.appendChild(plus)
       plus.textContent="+"
       
        
          con.appendChild(clone)
         
         // ``
         
        let  valueCount=0
       // let price= mrp.innerText;
       // function pric(){
           // let total=valueCount*price
           // price=total
       // }
        plus.addEventListener("click",function(){

            input=document.createElement("input").innerText=valueCount
        valueCount=input+1;
       input=valueCount
      
    
        
        
   input.value=valueCount
    
   
        })
        minus.addEventListener("click",function(){

            input=document.createElement("input").innerText=valueCount
            valueCount=input-1;
            
        input=valueCount
      
       
            })
    

        
        
        //``    
           // let cha=document.createElement("button")
           // cha.textContent="book now"
           // con.appendChild(cha)
            cha.addEventListener("click",change)
            function change(w){
                let s=w.target.parentNode
                clone.remove(s)

            }
          
           


         
     
            
            if(clone){
                cat.onclick=function(){
                    con.classList.toggle("active")
                }
            }
        })
            
    }
    


  
    
   

