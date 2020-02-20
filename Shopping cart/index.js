
var plus = Array.from(document.getElementsByClassName("plus1"));
var minus = Array.from(document.getElementsByClassName("minus1"));
var  q = document.getElementsByClassName("quantity");
var sum = document.getElementsByClassName("addtocart");
var prices = document.getElementsByTagName("h2");
var remove = document.getElementsByClassName("btn-danger");

    for (let i=0 ; i<minus.length;i++) {

        minus[i].addEventListener("click" , function() {

          q[i].value<=0 ? q[i]=0 :  q.value = minus[i].nextElementSibling.value--;

                     });
    }

    for (let i=0 ; i<plus.length;i++) {

        plus[i].addEventListener("click" , function() {
            q.value = plus[i].previousElementSibling.value++;

                     });
    }

    
    function addtoCart() {
        var total = [];
        const totalSum = (a, b) => a + b;
        
        for(let i=0 ;i<q.length;i++){
          total.push(q[i].value * prices[i].innerText);
          document.getElementById("total").innerHTML = total.reduce(totalSum);
        }
    }
   
function resetcart() {
    document.getElementById("total").innerHTML=0;
    for(let i=0 ;i<document.getElementsByClassName("quantity").length; i++ ){
        document.getElementsByClassName("quantity")[i].value=0;
    }
}


for (let i=0 ; i<remove.length;i++) {

    remove[i].addEventListener("click" , function(event){
    let removeCart= event.target ;
    removeCart.parentElement.parentElement.parentElement.remove();

    addtoCart();
});
}

