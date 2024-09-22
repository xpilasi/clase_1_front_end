const DB = 'https://thronesapi.com/api/v2/Characters';
let randomNumber = Math.floor(Math.random()*(52-0+1))+0;
console.log(randomNumber);
// console.log();



fetch(DB)
.then(res=>res.json())
.then(data=>{
    // console.log(data);
    
    showCharacters(data)
    showCharactersMenu(data)
})

let showCharacters = (chars) => {
    
    
    const charactersList = document.getElementById('information-right')
    
     charactersList.innerHTML = chars.map(char=>{

        let name = char.fullName;
        let idName = name.replace(/\s+/g, '');

        return `<article id="article-main">
                <div id="${idName}">
                    <div id="full-img-container">
                        <img 
                            id="img-article"
                            src=${char.imageUrl} 
                            width="100"
                            height="30"
                            alt="">

                    </div>   
                        

                

                    <div id='row-card-bottom'>
                        <div id="titles-card">
                                        <div>${char.fullName}</div>
                                        
                        </div>
                                    
                        <div id="url-card" >${char.title}</div>
                    </div>
                    
              
                </div>

                

            </article>`
     }).join('');

}
     let showCharactersMenu = (chars) => {
    
    let newSorted = [];

    for(var char of chars){
        newSorted.push(char.fullName)
    }
    newSorted.sort();
    // console.log(newSorted);
    
    const charactersList = document.getElementById('information-left')
    
     charactersList.innerHTML = newSorted.map(char=>{
        let idName = char.replace(/\s+/g, '');
        // console.log(idName);
        
        return `<article id="articles-trip">
        <a href="#${idName}"><h2 id="sub-left">${char}</h2></a>
                
                
                </article>`
     }).join('');


}

const DB_2 = 'https://singulars-2020-default-rtdb.firebaseio.com/salle.json'

fetch(DB_2)
.then(res=>res.json())
.then(data=>console.log(data)
)







