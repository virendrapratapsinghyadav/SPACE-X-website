(function(){
    let socials = document.querySelectorAll('.social div')

    socials.forEach(function(social,index){
        social.style.animation =`moveIn 0.8s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7 + 0.1}s`
    })

    let rocketPieces = document.querySelectorAll('.rocket-body span')

    let rocket = document.querySelector('.rocket')

    // jisse line turant na aa jaye isliye divide by 5
    let triggerStart1 = window.innerHeight / 5;
    let triggerStart2 = window.innerHeight / 3;

    let rocketOffsetTop = rocket.offsetTop;

    let thirdOffsetTop = rocketPieces[2].offsetTop;

    document.addEventListener('scroll', (e)=>{
        if(window.scrollY > (rocketOffsetTop - triggerStart1)){
            rocketPieces[0].classList.add('active');
            rocketPieces[1].classList.add('active');
        }
        else{
            rocketPieces[0].classList.remove('active');
            rocketPieces[1].classList.remove('active');
        }

        if(window.scrollY > (thirdOffsetTop - triggerStart2)){
            rocketPieces[2].classList.add('active');
        }
        else{
            rocketPieces[2].classList.remove('active');
        }
    })

}())