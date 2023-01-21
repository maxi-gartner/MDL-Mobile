    const maps = document.querySelectorAll('.map');
    const table = document.getElementById('table');

    console.log(maps)
    
        table.addEventListener('click', e =>{
            //console.log(e.target.id);
            maps.forEach(map => {
                if(map.id === e.target.id){
                    console.log(map)
                    map.style.display = 'block';
                }
            }) 
        });  
    
    const buttonClose = document.querySelectorAll('.button-map-close');
    console.log(buttonClose)

    buttonClose.forEach(button => {
        button.addEventListener('click', e =>{
            maps.forEach(map => {
                if(map.style.display = 'block'){
                    map.style.display = 'none';
                }
            });
        });
    });