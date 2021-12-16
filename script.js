let display=document.createElement('div');
display.classList.add('display');
document.body.appendChild(display);

let start=10;
setTimeout(()=>{
    display.innerHTML=start;
    start--;
    setTimeout(()=>{
        display.innerHTML=start;
        start--;
        setTimeout(()=>{
            display.innerHTML=start;
            start--;
            setTimeout(()=>{
                display.innerHTML=start;
                start--;
                setTimeout(()=>{
                    display.innerHTML=start;
                    start--;
                    setTimeout(()=>{
                        display.innerHTML=start;
                        start--;
                        setTimeout(()=>{
                            display.innerHTML=start;
                            start--;
                            setTimeout(()=>{
                                display.innerHTML=start;
                                start--;
                                setTimeout(()=>{
                                    display.innerHTML=start;
                                    start--;
                                    setTimeout(()=>{
                                        display.innerHTML=start;
                                        start--;
                                        setTimeout(()=>{
                                            display.innerHTML="<h1>Happy Independance Day</h1>"

                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000)
    },1000)
},100);
    