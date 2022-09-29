let MovieList=document.querySelectorAll(".movies");
let account=document.querySelector(".account");

let movie_list = [
    {
        name:"KGF 1",
        path: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-KfsY-qwBS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Baahubali - The Beginning",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/sOEg_YZQsTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Baahubali 2 - The Conclusion",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/G62HrubdD6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Marvel Studios' Avengers: Endgame",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/TcMBFSGVi1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Chak De India",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/6a0-dSMWm5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Chhichhore",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/tsxemFX0a7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Total Dhamaal",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/fo9EhcwQXcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Luka Chuppi",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/SVj26LvQMPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Stree",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/gzeaGcLLl_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Pyaar Ka Punchnama 2",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/tC-HGUhxyyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Inception ",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/8hP9D6kZseM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Badla ",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/xHWQiok-ei0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"AndhaDhun",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/2iVYI99VGaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"TENET",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/AZGcmvrTX9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Baazaar",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Pb7iJnIWzNk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Hobbs & Shaw",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/HZ7PAyCDwEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"The Hitman’s Bodyguard",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/IpKmt4MpctM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Iron Man",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/8ugaeA-nMTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        name:"Marvel's The Avengers",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/hIR8Ar-Z4hw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
   
    {
        name:"URI",
        path:'<iframe width="560" height="315" src="https://www.youtube.com/embed/VVY3do673Zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
  ];
  let idNo = 0;
for(let i of MovieList) {
    i.addEventListener("click", function(e) {
        // console.log(this.id);
        // console.log(movie_list[this.id].name);
        // console.log(movie_list[this.id].name);
        idNo = this.id;
        let modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `<div class="material-icons close">arrow_back</div>
                                <div class="title">${movie_list[this.id].name}</div>
                                <div class="play-video">
                                ${movie_list[this.id].path}
                                </div>
                            `;
          document.querySelector(".main-container").appendChild(modal);
          let closeBtn=document.querySelector(".close");
          closeBtn.addEventListener("click",function(e){
            document.querySelector(".main-container").removeChild(modal);
          })

    })
  }
 let main=document.querySelector(".main-container");
  account.addEventListener("click",function(e){
    let modal1 = document.createElement("div");
    modal1.classList.add("modal1");
     modal1.innerHTML = ` <div class="option Logout">Logout</div>
    `;
    document.querySelector(".main-container").appendChild(modal1);

    let Logout=document.querySelector(".Logout");
    Logout.addEventListener("click",function(e){
        document.querySelector(".main-container").removeChild(modal1);
        window.location.href = "signin.html";
    })
    
    
  })


  