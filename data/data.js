const buttonSport = document.getElementById('buttom-sports');
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
            buttonSport.style.color = 'black';
            buttonSport.style.background = 'white';
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
            buttonRegulation.style.color = 'black';
            buttonRegulation.style.background = 'white';
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
            buttonallPlay.style.color = 'black';
            buttonallPlay.style.background = 'white';
        }
    })

    console.log("hasta aca funciona")
