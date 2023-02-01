let a=document.getElementById("men")
let b=document.getElementById("women")
let c=document.getElementById("kids")
let d=document.getElementById("beauty")
let e=document.getElementById("login")
let f=document.getElementById("container8")
e.addEventListener("click",()=>{
    f.style.display="block"
})
let images=["https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60","https://media.istockphoto.com/id/1399050284/photo/smart-caucasian-mature-middle-aged-freelancer-man-in-beige-shirt-wearing-glasses-looking-at.jpg?b=1&s=170667a&w=0&k=20&c=bg0AXwjjMBmawkLIvXmjc-cfg2Shp5lKNBA-De6LlAo=","https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60","https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"]
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
    


  
    
   

