// Calculator

let string = "0";

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach(function(button){
    button.addEventListener('click',function(v){
        let bd = v.target.innerText;
        if(bd == '='){
            if(string==''){
                string='0'
            }


            string = eval(string);
            string =String(string);
            document.querySelector('#screen').value = string;
        }
        else if(bd == 'C'){
            string = '0';
            document.querySelector('#screen').value = string;
        }
        else if(bd == 'x'){
            string = string.slice(0,-1);
            if(string == ''){
                string='0';
            }
            document.querySelector('#screen').value = string;
        }
        else{

            
            string = string + bd;
            document.querySelector('#screen').value = string;
        }
        
    })
})


// MusicPlayer



let allSongs = document.querySelectorAll('#m1');
let songList=Array.from(allSongs);
let i =0;


let q=document.querySelectorAll('#c1');
Array.from(q).forEach(function(q1){
    q1.addEventListener('click',function(){
        var al1 =q1.alt;
        al1 = Number(al1);
        let songClass = q1.className;

        if(al1<=songList.length){
            i=al1;

            songList.forEach(function(a){
                a.pause();
            })
            
            if(songClass == 'play'+i){
                let pause1 = document.querySelectorAll('.pause1');
                Array.from(pause1).forEach((pau)=>{
                    pau.style.display='none';
                    pau.previousElementSibling.style.display='block';
                })
                document.getElementById('mbtn').style.display = 'block';
                document.getElementById('ccc'+al1).children[0].style.display='none';
                document.getElementById('ccc'+al1).children[1].style.display='block';
                document.getElementById('b_play').style.display='none';
                document.getElementById('b_pause').style.display='block';

                songList[i].play();
                progressBar()

            }
            else{
                document.getElementById('ccc'+al1).children[0].style.display='block';
                document.getElementById('ccc'+al1).children[1].style.display='none';
                document.getElementById('b_pause').style.display='none';
                document.getElementById('b_play').style.display='block';
                // songList[i].pause();
            }


            let  mpbs = document.querySelectorAll('.cb');
            Array.from(mpbs).forEach(function(mpb){
                mpb.addEventListener('click',function(){
                    var zz = mpb.alt;
                    if(zz == '1'){

                        let pause1 = document.querySelectorAll('.pause1');
                        Array.from(pause1).forEach((pau)=>{
                            pau.style.display='none';
                            pau.previousElementSibling.style.display='block';
                        })

                        if(i>1){
                            songList[i].pause();
                            i=i-1;
                        }
                        document.getElementById('ccc'+i).children[0].style.display='none';
                        document.getElementById('ccc'+i).children[1].style.display='block';
                        document.getElementById('b_play').style.display='none';
                        document.getElementById('b_pause').style.display='block';
                        songList[i].play();

                        progressBar()
                    }
                    else if(zz == '4' && i<songList.length-1){

                        let pause1 = document.querySelectorAll('.pause1');
                        Array.from(pause1).forEach((pau)=>{
                            pau.style.display='none';
                            pau.previousElementSibling.style.display='block';
                        })

                        songList[i].pause()
                        i = i+1;
                        document.getElementById('ccc'+i).children[0].style.display='none';
                        document.getElementById('ccc'+i).children[1].style.display='block';
                        document.getElementById('b_play').style.display='none';
                        document.getElementById('b_pause').style.display='block';
                        
                        songList[i].play()

                        progressBar()
                    }
                    else if(zz == '2'){

                        document.getElementById('ccc'+i).children[0].style.display='none';
                        document.getElementById('ccc'+i).children[1].style.display='block';
                        document.getElementById('b_play').style.display='none';
                        document.getElementById('b_pause').style.display='block';
                        songList[i].play();

                        progressBar()
                    }
                    else if(zz == '3'){
                        
                        
                        let pause1 = document.querySelectorAll('.pause1');
                        Array.from(pause1).forEach((pau)=>{
                            pau.style.display='none';
                            pau.previousElementSibling.style.display='block';
                        })

                        document.getElementById('b_pause').style.display='none';
                        document.getElementById('b_play').style.display='block';
                        songList[i].pause();
                    }
                })
            })
        }
        
    })

})


// END MusicPlayer


// Clock

let start = document.getElementById('startTimer');
let stop = document.getElementById('stopTimer')

let tSound = document.getElementById('timerSound');


start.addEventListener('click',function(){
    let times = document.getElementById('st');
    
    let h = Number(document.getElementById('h').value);
    let m = Number(document.getElementById('m').value);
    let s = Number(document.getElementById('s').value);

    

    let c = setInterval(timerFun,1000);
    function timerFun(){
        if(s>0){
            s=s-1;
            if(s==0){
                if(m != 0){
                    m = m-1;
                    s=60;
                }
            }
            if(m == 0){
                if(h !=0){
                    h = h-1;
                    m =59;
                }
            }
            let timer = document.getElementById('timer');
            timer.children[0].innerHTML = h;
            timer.children[2].innerHTML = m;
            timer.children[4].innerHTML = s;

            if(h == 0 && m == 0 && s == 0){
                tSound.play();
                document.getElementById('clockIcon').classList.add('clock');
            }

            start.style.display = 'none';
            stop .style.display = 'block';
        }
    }
    stop.addEventListener('click',()=>{
        clearInterval(c);
        stop .style.display = 'none';

        tSound.pause();
        document.getElementById('clockIcon').classList.remove('clock');
        start.style.display = 'block';
    })
    
    document.getElementById('clearTimer').addEventListener('click',()=>{
        clearInterval(c);
        let timer = document.getElementById('timer');
        timer.children[0].innerHTML = 0;
        timer.children[1].innerHTML = 0;
        timer.children[2].innerHTML = 0;

    })
})



// END Clock

