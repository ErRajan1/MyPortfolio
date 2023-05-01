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

















