(function(){
let play=document.querySelector(".video-container i");
play.addEventListener("click",(e)=>{
    if(e.target.className== "fa fa-play fa-2x")
    {
    e.target.className="fa fa-pause fa-2x";
    document.querySelector("#tm-video").play();
    
}else{
        e.target.className="fa fa-play fa-2x";
        document.querySelector("#tm-video").pause();

    }
});

// pages
let pages=document.querySelectorAll(".pages .container .list li");
        let pageContent=document.querySelector(".page-content");
        let ulList=document.querySelector(".pages .container > ul");
    let pagesfcontent=document.querySelectorAll(".pages .page-content > div");
        pages.forEach(page=>{
    page.addEventListener("click",(e)=>{
        pagesfcontent.forEach(p=>{
            p.style.display="none";
        })
        document.querySelector(".pages  .container  ul").style.display="none";
        pageContent.style.display="flex";
       document.getElementById(e.target.closest("li").dataset.page).style.display="block";

    });
});


let closePage=document.querySelectorAll(".close > div");
closePage.forEach(close=>{


    close.addEventListener("click",(e)=>{
        pageContent.style.display="none";

        ulList.style.display="grid";
    })
})
    let slidersImgs=document.querySelectorAll(".slider-container .image");

    let imgs=Array.from(slidersImgs);

    function getRandomImags()
    {
        let random=[];
        let randomImgs=[];

        for(let i=0;i<8;i++)
        {
            random.push(Math.floor(Math.random()* imgs.length));
            randomImgs.push(imgs[random[i]]);
        }
        randomImgs.forEach(img=>{
            img.style.display="block";
        });
        return randomImgs;
    }
    let tabs=document.querySelectorAll(".page-content .gallery .row .left .tabs ul li");
    tabs.forEach(tab=>{
        
        tab.addEventListener("click",(e)=>{
            slidersImgs.forEach((im)=>{
                im.style.display="none";
            });
            tabs.forEach(t=>{
                t.classList.remove("active");
            });
            e.target.classList.add("active");
            getRandomImags();
          
        });
    });
    let rightTabs=document.querySelectorAll(".page-content .gallery .row .right ul li");
    rightTabs.forEach(t=>{
        t.addEventListener("click",(e)=>{
            slidersImgs.forEach((im)=>{
                im.style.display="none";
            });
            rightTabs.forEach(tab=>{
                tab.classList.remove("active");
            });
            e.target.closest("li").classList.add("active");
            if(e.target.closest("li").dataset.filter == "All")
            {
                getRandomImags();
            }
            slidersImgs.forEach(img=>{
               
                if(img.getAttribute("id")== e.target.closest("li").dataset.filter)
                {   
                    img.style.display="block";
                }
            })
            
        });
    });

    //nextPageBtn
    let nextPageBtn=document.querySelector(" .introduction .right .main-btn");
    nextPageBtn.addEventListener("click",(e)=>{
        document.querySelector(".introduction").style.display="none";
        document.querySelector(".gallery").style.display="block";
    });

    //contact us button
    let contactBtn=document.querySelectorAll("#contact-us");
    contactBtn.forEach(contact=>{
        contact.addEventListener("click",(e)=>{
     
            document.getElementById(e.target.dataset.current).style.display="none";
            document.querySelector(".page-content .contact").style.display="block";
        });
    });
}());