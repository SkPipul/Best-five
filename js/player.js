

function limitttedPlayer(){
    
}
    


function addPlayerName(element){
    // console.log(element.parentNode.parentNode.children[0].innerText);
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');
        li.innerHTML = `
        <ol>
           <li>${playerName}</li>
        </ol>
        `;
        playerList.appendChild(li);
        element.disabled = true;
        
        const playerLimit = playerList.childNodes.length;
        if(playerLimit === 6){
            alert('chuppp')
        }
    }
    