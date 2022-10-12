// for the hamburger effect navbar 


  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const cross = document.querySelector(".cross")


  hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  cross.classList.toggle("active");
  })

  cross.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  cross.classList.remove("active");
  })

  navMenu.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  cross.classList.remove("active");

  })




  // for typewriter effect 


  const text = document.querySelector(".type-write")

  const textLoad =() => {
    setTimeout(()=>{
      text.textContent = "a Developer";
    },0);
    setTimeout(()=>{
      text.textContent = "a Designer";
    },4000);
    setTimeout(()=>{
      text.textContent = "a Creator";
    },8000);
    }

    textLoad();
    setInterval(textLoad,12000)
  