const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl=>{
    counterEl.innerText = "0";
        incrementCounter();
        function incrementCounter(){
            let currentNum = +counterEl.innerText;
            const dataCeil = counterEl.getAttribute("data-ceil");
            console.log(dataCeil);
            const increment = dataCeil / 15;
            currentNum = Math.ceil(currentNum + increment);
            
            if (currentNum < dataCeil) {
                counterEl.innerText = currentNum;
                setTimeout(incrementCounter, 70);
            } else {
                counterEl.innerText = dataCeil;
            }                
        }
});