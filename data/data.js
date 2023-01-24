/* const buttonSport = document.getElementById('buttom-sports');
const infoSport = document.getElementById('info-sport');
const infoSportShort = document.getElementById('info-sport-short');

    buttonSport.addEventListener('click', () =>{
        if(infoSport.style.display == 'none'){
            infoSport.style.display = 'block';
            infoSportShort.style.display = 'none';
            buttonSport.style.color = 'white';
            buttonSport.style.background = 'green';
        }else{
            infoSport.style.display = 'none';
            infoSportShort.style.display = 'block';
            buttonSport.style.color = 'goldenrod';
            buttonSport.style.background = '#00000083';
            buttonSport.style.border = 'solid 2px goldenrod';
        }
    })

const buttonRegulation = document.getElementById('button-regulation');
const infoRegulation = document.getElementById('info-regulation');
const infoRegulationShort = document.getElementById('info-regulation-short')

    buttonRegulation.addEventListener('click', () =>{
        if(infoRegulation.style.display == 'none'){
            infoRegulation.style.display = 'block';
            infoRegulationShort.style.display = 'none';
            buttonRegulation.style.color = 'white';
            buttonRegulation.style.background = 'green';
        }else{
            infoRegulation.style.display = 'none';
            infoRegulationShort.style.display = 'block';
            buttonRegulation.style.color = 'goldenrod';
            buttonRegulation.style.background = '#00000083';
            buttonRegulation.style.border = 'solid 2px goldenrod';
        }
    })

    const buttonallPlay = document.getElementById('button-allPlay');
const infoallPlay = document.getElementById('info-allPlay');
const infoallPlayShort = document.getElementById('info-allPlay-short')

buttonallPlay.addEventListener('click', () =>{
        if(infoallPlay.style.display == 'none'){
            infoallPlay.style.display = 'block';
            infoallPlayShort.style.display = 'none';
            buttonallPlay.style.color = 'white';
            buttonallPlay.style.background = 'green';
        }else{
            infoallPlay.style.display = 'none';
            infoallPlayShort.style.display = 'block';
            buttonallPlay.style.color = 'goldenrod';
            buttonallPlay.style.background = '#00000083';
            buttonallPlay.style.border = 'solid 2px goldenrod';
        }
    })

    console.log("hasta aca funciona")
 */

    const btn = document.querySelectorAll('.btn');
    console.log(btn)
    const infoBtnShort = document.querySelectorAll('.infoBtnShort');
    console.log(infoBtnShort)
    const infoBtn = document.querySelectorAll('.infoBtn');
    console.log(infoBtn)

    btn.forEach(button =>{
        button.addEventListener('click', e =>{
            btn.forEach(button =>{
                if(button.id == e.target.id){
                    button.style.color = 'white';
                    button.style.background = 'green';
                    button.style.border = 'solid 2px goldenrod';
                }else{
                    button.style.color = 'goldenrod';
                    button.style.background = '#00000083';
                    button.style.border = 'solid 2px goldenrod';
                }
            })
            infoBtn.forEach((info) =>{
                if(info.style.display == 'none'){
                    if(info.id == e.target.id){
                        info.style.display = 'block';
                    }
                    }else{
                        info.style.display = 'none';
                }
            })
            infoBtnShort.forEach((infoShort) =>{
                if(infoShort.style.display == 'block'){
                    if(infoShort.id == e.target.id){
                        infoShort.style.display = 'none';
                    }
                    }else{
                        infoShort.style.display = 'block';
                }
            })
        })
    })