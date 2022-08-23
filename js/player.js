
// section 1

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
        // playerList.appendChild(li);
        element.disabled = true;
        const playerLimit = playerList.childNodes.length;
        // // console.log(playerLimit);
        if(playerLimit <= 5){
            playerList.appendChild(li);
        }
        else{
            alert('Your limit is over');
            element.disabled = false;
        }
        return playerLimit;
    }

