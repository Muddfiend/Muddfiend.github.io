const selectors = {
    'botCardCount': document.querySelector('#botCardCount'),
    '$botCardCount':  $('#botCardCount'),
    'botCountPlural': document.querySelector('#botCountPlural'),
    '$botCountPlural': $('#botCountPlural'),
    'playerCardCount': document.querySelector('#playerCardCount'),
    '$playerCardCount': $('#playerCardCount'),
    'playerCountPlural': document.querySelector('#playerCountPlural'),
    '$playerCountPlural': $('#playerCountPlural'),
    'welcome': document.querySelector('#welcome'),
    '$welcome': $('#welcome'),
    'begin': document.querySelector('#begin'),
    'game': document.querySelector('#game'),
    '$game': $('#game'),
    'bot': document.querySelector('#bot'),
    '$bot': $('#bot'),
    'botCard': document.querySelector('#botCard'),
    '$botCard': $('#botCard'),
    'botCardBackground': document.querySelector('#botCardBackground'),
    '$botCardBackground': $('#botCardBackground'),
    'player': document.querySelector('#player'),
    '$player': $('#player'),
    'playerCard': document.querySelector('#playerCard'),
    '$playerCard': $('#playerCard'),
    'playerCardBackground': document.querySelector('#playerCardBackground'),
    '$playerCardBackground': $('#playerCardBackground'),
    'stats': document.querySelector('#stats'),
    '$stats': $('#stats'),
    'nextRound': document.querySelector('#nextRound'),
    '$nextRound': $('#nextRound'),
    'warzone': document.querySelector('#warzone'),
    '$warzone': $('#warzone'),
    'content': document.querySelector('#content'),
    '$content': $('#content'),
    'botCard1': document.querySelector('#botCard1'),
    '$botCard1': $('#botCard1'),
    'botCard2': document.querySelector('#botCard2'),
    '$botCard2': $('#botCard2'),
    'botCard3': document.querySelector('#botCard3'),
    '$botCard3': $('#botCard3'),
    'botCard4': document.querySelector('#botCard4'),
    '$botCard4': $('#botCard4'),
    'playerCard1': document.querySelector('#playerCard1'),
    '$playerCard1': $('#playerCard1'),
    'playerCard2': document.querySelector('#playerCard2'),
    '$playerCard2': $('#playerCard2'),
    'playerCard3': document.querySelector('#playerCard3'),
    '$playerCard3': $('#playerCard3'),
    'playerCard4': document.querySelector('#playerCard4'),
    '$playerCard4': $('#playerCard4'),
    'continue': document.querySelector('#continue'),
    '$continue': $('#continue'),
    '$exitWar': $('#exitWar'),
    'warWinnerBanner': document.querySelector('#warWinnerBanner'),
    '$resetDiv': $('#resetDiv')
};
const cardBackgrounds = {
    'blue': '/images/cards/PNG/blue_back.png',
    'gray': '/images/cards/PNG/gray_back.png',
    'green': '/images/cards/PNG/green_back.png',
    'purple': '/images/cards/PNG/purple_back.png',
    'red': '/images/cards/PNG/red_back.png',
    'yellow': '/images/cards/PNG/yellow_back.png',
};
var chosenBg;
var botBg;

var playerRoster = [];
var playerSpoils = [];

var botRoster = [];
var botSpoils = [];

function setBg(val) {
    let v = '';
    switch(val) {
        case "0": v = 'blueBack'; break;
        case "1": v = 'grayBack'; break;
        case "2": v = 'greenBack'; break;
        case "3": v = 'purpleBack'; break;
        case "4": v = 'redBack'; break;
        case "5": v = 'yellowBack'; break;
    }
    return v;
}

function setupPage() {
    var colr = document.querySelector('#color').value;
    chosenBg = setBg(colr);

    var r = colr;
    while(r === colr) {
        r = String(randomInt(5));
    }
    botBg = setBg(r);
    selectors.$playerCardBackground.addClass(chosenBg);
    document.querySelectorAll('.extraCard').forEach( (e)=>{ e.classList.add(chosenBg); });
    selectors.$botCardBackground.addClass(botBg);
    document.querySelectorAll('.extraBotCard').forEach( (e)=>{ e.classList.add(botBg); });
    selectors.botCardCount.innerText = 26;
    selectors.playerCardCount.innerText = 26;
}

function removeElement(arr,ind) {
    arr.splice(ind, 1);
}

function randomInt(high,low=0) {
    return Math.round( Math.random()*(high-low) + (low) );
}

function resetWarCards() {
    selectors.botCard1.classList = [];
    selectors.$botCard1.addClass('extraBotCard');
    selectors.$botCard1.addClass(botBg);
    selectors.$botCard1.attr('style','');
    selectors.botCard2.classList = [];
    selectors.$botCard2.addClass('extraBotCard');
    selectors.$botCard2.addClass(botBg);
    selectors.$botCard2.attr('style','');
    selectors.botCard3.classList = [];
    selectors.$botCard3.addClass('extraBotCard');
    selectors.$botCard3.addClass(botBg);
    selectors.$botCard3.attr('style','');
    selectors.botCard4.classList = [];
    selectors.$botCard4.addClass('extraBotCard');
    selectors.$botCard4.addClass(botBg);
    selectors.$botCard4.attr('style','');

    selectors.playerCard1.classList = [];
    selectors.$playerCard1.addClass('extraCard');
    selectors.$playerCard1.addClass(chosenBg);
    selectors.$playerCard1.attr('style','');
    selectors.playerCard2.classList = [];
    selectors.$playerCard2.addClass('extraCard');
    selectors.$playerCard2.addClass(chosenBg);
    selectors.$playerCard2.attr('style','');
    selectors.playerCard3.classList = [];
    selectors.$playerCard3.addClass('extraCard');
    selectors.$playerCard3.addClass(chosenBg);
    selectors.$playerCard3.attr('style','');
    selectors.playerCard4.classList = [];
    selectors.$playerCard4.addClass('extraCard');
    selectors.$playerCard4.addClass(chosenBg);
    selectors.$playerCard4.attr('style','');
}

function updateCounts() {
    let pCount = playerRoster.length + playerSpoils.length;
    let bCount = botRoster.length + botSpoils.length;
    selectors.playerCardCount.innerText = pCount;
    selectors.botCardCount.innerText = bCount;
    if(pCount != 1) { 
        selectors.$playerCountPlural.removeClass('hide'); 
    } else { selectors.$playerCountPlural.addClass('hide'); } 
    if(bCount != 1) {
        selectors.$botCountPlural.removeClass('hide');
    } else { selectors.$botCountPlural.addClass('hide'); }
}

function dealCards() {
    var n;
    var i = 0;
    while( i < 52 ) {
        n = randomInt(51);
        if ( playerRoster.indexOf(n) == -1 && botRoster.indexOf(n) == -1 ) {
            let p = randomInt(2,1);
            if( p == 1 ) {
                if( playerRoster.length < 26  ) {
                    playerRoster.push(n);
                    i++;
                } else {
                    botRoster.push(n);
                    i++;
                }
            } else {
                if( botRoster.length < 26 ) {
                    botRoster.push(n);
                    i++;
                } else {
                    playerRoster.push(n);
                    i++;
                }
            }
        }
    }
    if( playerRoster.length == 26 && botRoster.length == 26) {
        return true;
    }
    console.error('The dealer fucked up');
    return false;
}

function contGame() {
    if( selectors.$continue.hasClass('disable') ) { return; }
    selectors.$nextRound.removeClass('disable');
    selectors.$warzone.css('display','none');
    selectors.$exitWar.addClass('hide');
    selectors.$continue.addClass('disable');
    resetWarCards();
    selectors.nextRound.focus();
    playCard();
}

function checkCards() {
    for(let i=0; i<playerRoster.length; i++) {
        if( !playerRoster[i] ) {
            removeElement(playerRoster,i);
            for(let j=0; j<deck.length; j++) {
                if( playerRoster.indexOf(j) == -1 && playerSpoils.indexOf(j) == -1 && botRoster.indexOf(j) == -1 && botSpoils.indexOf(j) == -1 ) {
                    playerRoster.push(j);
                    break;
                }
            }
        }
    }
    for(let i=0; i<playerSpoils.length; i++) {
        if( !playerSpoils[i] ) {
            removeElement(playerSpoils,i);
            for(let j=0; j<deck.length; j++) {
                if( playerRoster.indexOf(j) == -1 && playerSpoils.indexOf(j) == -1 && botRoster.indexOf(j) == -1 && botSpoils.indexOf(j) == -1 ) {
                    playerSpoils.push(j);
                    break;
                }
            }
        }
    }
    for(let i=0; i<botRoster.length; i++) {
        if( !botRoster[i] ) {
            removeElement(botRoster,i);
            for(let j=0; j<deck.length; j++) {
                if( playerRoster.indexOf(j) == -1 && playerSpoils.indexOf(j) == -1 && botRoster.indexOf(j) == -1 && botSpoils.indexOf(j) == -1 ) {
                    botRoster.push(j);
                    break;
                }
            }
        }
    }
    for(let i=0; i<botSpoils.length; i++) {
        if( !botSpoils[i] ) {
            removeElement(botSpoils,i);
            for(let j=0; j<deck.length; j++) {
                if( playerRoster.indexOf(j) == -1 && playerSpoils.indexOf(j) == -1 && botRoster.indexOf(j) == -1 && botSpoils.indexOf(j) == -1 ) {
                    botSpoils.push(j);
                    break;
                }
            }
        }
    }
    updateCounts();
    if(playerRoster.length == 0) {
        for(let i=playerSpoils.length-1; i>=0; i--) {
            playerRoster.push(playerSpoils[i]);
            playerSpoils.pop();
        }
    }
    if(botRoster.length == 0) {
        for(let i=botSpoils.length-1; i>=0; i--) {
            botRoster.push(botSpoils[i]);
            botSpoils.pop();
        }
    }
    if(playerRoster.length + playerSpoils.length == 52) {
        selectors.$nextRound.addClass('disable');
        selectors.$continue.addClass('disable');
        selectors.$resetDiv.removeClass('hide');
        setTimeout( () => {alert('Player Wins');}, 5000);
        //location.reload();
    } else if(botRoster.length + botSpoils.length == 52) {
        selectors.$nextRound.addClass('disable');
        selectors.$continue.addClass('disable');
        selectors.$resetDiv.removeClass('hide');
        setTimeout( () => {alert('Bot Wins');}, 5000);
        //location.reload();
    }
}

function revealWarCards(botLineup,playerLineup) {
    for(let i=botLineup.length-1; i>=0; i--) {
        let bCard = deck[botLineup[i]];
        $('#botCard'+(i+1)).css('background-image','url('+ bCard.img + ')');
    }
    for(let i=playerLineup.length-1; i>=0; i--) {
        let pCard = deck[playerLineup[i]];
        $('#playerCard'+(i+1)).css('background-image','url('+ pCard.img + ')');
    }
    selectors.$exitWar.removeClass('hide');
    checkCards();
    setTimeout(()=>{
        selectors.$continue.removeClass('disable');
        selectors.continue.focus();
    },3500);
}

function war(pInd,bInd) {
    console.log('war?');
    var m;
    var pWager = {'roster':[],'spoils':[]};
    var bWager = {'roster':[],'spoils':[]};
    var pWagerDeck = [];
    var bWagerDeck = [];

    if( playerRoster.length + playerSpoils.length >= 5 && botRoster.length + botSpoils.length >= 5 ) {
        //full war
        m = 4;
        if( playerRoster.length >= 5 ) {
            var k = 0;
            while( k < 4 ) {
                var r = randomInt(playerRoster.length-1);
                if( r != pInd && pWager.roster.indexOf(r) == -1 ) {
                    pWager.roster.push(r);
                    k++;
                }
            }
        } else { 
            for(let i=0; i<playerRoster.length; i++) {
                if( i != pInd ) {
                    pWager.roster.push(i);
                }
            }
            var k = pWager.roster.length;
            for(let i=playerSpoils.length-1; i>=0; i--) {
                playerRoster.push(playerSpoils[i]);
                playerSpoils.pop();
            }
            while( k < 4 ) {
                var r = randomInt(playerRoster.length-1);
                if( r != pInd && pWager.roster.indexOf(r) == -1 ) {
                    pWager.roster.push(r);
                    k++;
                }
            }
         }
         for(let i=0; i<pWager.roster.length; i++) {
             pWagerDeck.push(playerRoster[pWager.roster[i]]);
         }
        if( botRoster.length >= 5 ) {
            var k = 0;
            while( k < 4 ) {
                var r = randomInt(botRoster.length-1);
                if( r != bInd && bWager.roster.indexOf(r) == -1 ) {
                    bWager.roster.push(r);
                    k++;
                }
            }
        } else {
            for(let i=0; i<botRoster.length; i++) {
                if( i != bInd ) {
                    bWager.roster.push(i);
                }
            }
            var k = bWager.roster.length;
            for(let i=botSpoils.length-1; i>=0; i--) {
                botRoster.push(botSpoils[i]);
                botSpoils.pop();
            }
            while( k < 4 ) {
                var r = randomInt(botRoster.length-1);
                if( r != bInd && bWager.roster.indexOf(r) == -1 ) {
                    bWager.roster.push(r);
                    k++;
                }
            }
        }
        for(let i=0; i<bWager.roster.length; i++) {
            bWagerDeck.push(botRoster[bWager.roster[i]]);
        }
    } else {
        var m = Math.min( playerRoster.length + playerSpoils.length, botRoster.length + botSpoils.length );
        m--;
        console.log('small war?');
        if( playerRoster.length >= m+1 ) {
            var k = 0;
            while( k < m ) {
                var r = randomInt(playerRoster.length-1);
                if( r != pInd && pWager.roster.indexOf(r) == -1 ) {
                    pWager.roster.push(r);
                    k++;
                }
            }
        } else { 
            for(let i=0; i<playerRoster.length; i++) {
                if( i != pInd ) {
                    pWager.roster.push(i);
                }
            }
            var k = pWager.roster.length;
            for(let i=playerSpoils.length-1; i>=0; i--) {
                playerRoster.push(playerSpoils[i]);
                playerSpoils.pop();
            }
            while( k < m ) {
                var r = randomInt(playerRoster.length-1);
                if( r != pInd && pWager.roster.indexOf(r) == -1 ) {
                    pWager.roster.push(r);
                    k++;
                }
            }
         }
         for(let i=0; i<pWager.roster.length; i++) {
             pWagerDeck.push(playerRoster[pWager.roster[i]]);
         }
         if( botRoster.length >= m+1 ) {
            var k = 0;
            while( k < m ) {
                var r = randomInt(botRoster.length-1);
                if( r != bInd && bWager.roster.indexOf(r) == -1 ) {
                    bWager.roster.push(r);
                    k++;
                }
            }
        } else {
            for(let i=0; i<botRoster.length; i++) {
                if( i != bInd ) {
                    bWager.roster.push(i);
                }
            }
            var k = bWager.roster.length;
            for(let i=botSpoils.length-1; i>=0; i--) {
                botRoster.push(botSpoils[i]);
                botSpoils.pop();
            }
            while( k < m ) {
                var r = randomInt(botRoster.length-1);
                if( r != bInd && bWager.roster.indexOf(r) == -1 ) {
                    bWager.roster.push(r);
                    k++;
                }
            }
        }
        for(let i=0; i<bWager.roster.length; i++) {
            bWagerDeck.push(botRoster[bWager.roster[i]]);
        }
    }
    //
    console.log('player:');console.log(pWager);console.log(pWagerDeck);
    console.log('bot:');console.log(bWager);console.log(bWagerDeck);
    selectors.$nextRound.addClass('disable');
    selectors.$warzone.css('display','block');
    var z = m;
    var winner = false;
    selectors.warWinnerBanner.innerText = '';
    var battle = setInterval( ()=> {
        let bCard = deck[bWagerDeck[z-1]];
        let pCard = deck[pWagerDeck[z-1]];
        $('#botCard'+z).css('background-image','url('+ bCard.img + ')');
        $('#playerCard'+z).css('background-image','url('+ pCard.img + ')');
        if( !winner ) {
            if( pCard.val == bCard.val && z >= 1 ) {
                //next card match
                z--;
            } else if( z >= 1 ) {
                var rosterArr = [];
                var spoilsArr = [];
                winner = true;
                if(pCard.val > bCard.val) {
                    selectors.warWinnerBanner.innerText = 'You have won!';
                    for(let i=0; i<pWager.roster.length; i++) {
                        rosterArr.push(pWager.roster[i]);
                    }
                    rosterArr.push(pInd);
                    rosterArr.sort();
                    for(let i=0; i<bWager.roster.length; i++) {
                        spoilsArr.push(bWager.roster[i]);
                    }
                    spoilsArr.push(bInd);
                    spoilsArr.sort();
                    //Move
                    for(let i=rosterArr.length-1; i>=0; i--) {
                        playerSpoils.push(playerRoster[rosterArr[i]]);
                        removeElement(playerRoster,rosterArr[i]);
                    }
                    for(let i=spoilsArr.length-1; i>=0; i--) {
                        playerSpoils.push(botRoster[spoilsArr[i]]);
                        removeElement(botRoster,spoilsArr[i]);
                    }
                } else {
                    selectors.warWinnerBanner.innerText = 'You have lost!';
                    for(let i=0; i<bWager.roster.length; i++) {
                        rosterArr.push(bWager.roster[i]);
                    }
                    rosterArr.push(bInd);
                    rosterArr.sort();
                    for(let i=0; i<pWager.roster.length; i++) {
                        spoilsArr.push(pWager.roster[i]);
                    }
                    spoilsArr.push(pInd);
                    spoilsArr.sort();
                    //Move
                    for(let i=rosterArr.length-1; i>=0; i--) {
                        botSpoils.push(botRoster[rosterArr[i]]);
                        removeElement(botRoster,rosterArr[i]);
                    }
                    for(let i=spoilsArr.length-1; i>=0; i--) {
                        botSpoils.push(playerRoster[spoilsArr[i]]);
                        removeElement(playerRoster,spoilsArr[i]);
                    }
                }
                setTimeout(()=>{
                    revealWarCards(bWagerDeck,pWagerDeck);
                },2750);
                checkCards();
                updateCounts();
                clearInterval(battle);
            } else {
                console.log('wtf did you do - everyone just go home, no one wins');
                selectors.warWinnerBanner.innerText = 'It\'s a draw. What are the odds?'
                var rosterArr = [];
                var spoilsArr = [];
                for(let i=0; i<pWager.roster.length; i++) {
                    rosterArr.push(pWager.roster[i]);
                }
                rosterArr.sort();
                for(let i=0; i<bWager.roster.length; i++) {
                    spoilsArr.push(bWager.roster[i]);
                }
                spoilsArr.sort();
                //Move
                for(let i=rosterArr.length-1; i>=0; i--) {
                    playerSpoils.push(playerRoster[rosterArr[i]]);
                    removeElement(playerRoster,rosterArr[i]);
                }
                for(let i=spoilsArr.length-1; i>=0; i--) {
                    botSpoils.push(botRoster[spoilsArr[i]]);
                    removeElement(botRoster,spoilsArr[i]);
                }
                checkCards();
                winner = true; //just to end interval
            }
        } else {
            checkCards();
            updateCounts();
            clearInterval(battle);
        }
    }, 1500);
}

function playCard() {
    selectors.nextRound.focus();
    if( selectors.$nextRound.hasClass('disable') ) { return; }
    let pCardInd = randomInt(playerRoster.length-1);
    let bCardInd = randomInt(botRoster.length-1);

    let pCard = deck[playerRoster[pCardInd]];
    let bCard = deck[botRoster[bCardInd]];
    console.log('player: ');console.log(pCard);console.log(playerRoster);console.log(playerSpoils); 
    console.log('bot: ');console.log(bCard); console.log(botRoster);console.log(botSpoils);

    selectors.$playerCard.css('background-image', 'url('+pCard.img+')');
    selectors.$botCard.css('background-image', 'url('+bCard.img+')');

    if(pCard.val > bCard.val) {
        //player won
        playerSpoils.push(playerRoster[pCardInd]);
        playerSpoils.push(botRoster[bCardInd]);
        removeElement(playerRoster, pCardInd);
        removeElement(botRoster, bCardInd);
        console.log('player won');
        //setTimeout( () => {alert('Player Won')}, 1000);
    } else if(pCard.val < bCard.val) {
        //bot won
        botSpoils.push(playerRoster[pCardInd]);
        botSpoils.push(botRoster[bCardInd]);
        removeElement(playerRoster, pCardInd);
        removeElement(botRoster, bCardInd);
        console.log('bot won');
        //setTimeout( () => {alert('Bot Won')}, 1000);
    } else if( playerRoster.length + playerSpoils.length > 1 && botRoster.length + botSpoils.length > 1 ) {
        war(pCardInd,bCardInd);
    } else {
        playerSpoils.push(playerRoster[pCardInd]);
        removeElement(playerRoster,pCardInd);
        botSpoils.push(botRoster[bCardInd]);
        removeElement(botRoster,bCardInd);
    }
    checkCards();
}

function createDeck() {
    let cards = [];
    let names = ['Two of Clubs','Two of Diamonds','Two of Hearts','Two of Spades','Three of Clubs','Three of Diamonds','Three of Hearts','Three of Spades','Four of Clubs','Four of Diamonds','Four of Hearts','Four of Spades','Five of Clubs','Five of Diamonds','Five of Hearts','Five of Spades','Six of Clubs','Six of Diamonds','Six of Hearts','Six of Spades','Seven of Clubs','Seven of Diamonds','Seven of Hearts','Seven of Spades','Eight of Clubs','Eight of Diamonds','Eight of Hearts','Eight of Spades','Nine of Clubs','Nine of Diamonds','Nine of Hearts','Nine of Spades','Ten of Clubs','Ten of Diamonds','Ten of Hearts','Ten of Spades','Jack of Clubs','Jack of Diamonds','Jack of Hearts','Jack of Spades','Queen of Clubs','Queen of Diamonds','Queen of Hearts','Queen of Spades','King of Clubs','King of Diamonds','King of Hearts','King of Spades','Ace of Clubs','Ace of Diamonds','Ace of Hearts','Ace of Spades'];
    let vals = [2,2,2,2, 3,3,3,3, 4,4,4,4, 5,5,5,5, 6,6,6,6, 7,7,7,7, 8,8,8,8, 9,9,9,9, 10,10,10,10, 11,11,11,11, 12,12,12,12, 13,13,13,13, 14,14,14,14];
    let imgs = ['2C','2D','2H','2S','3C','3D','3H','3S','4C','4D','4H','4S','5C','5D','5H','5S','6C','6D','6H','6S','7C','7D','7H','7S','8C','8D','8H','8S','9C','9D','9H','9S','10C','10D','10H','10S','JC','JD','JH','JS','QC','QD','QH','QS','KC','KD','KH','KS','AC','AD','AH','AS'];
    for(let j=0; j<52; j++) {
        cards[j] = {
            'name': names[j],
            'val': vals[j],
            'img': '/images/cards/PNG/' + imgs[j] + '.png'
        };
    }
    return cards; 
}

const deck = createDeck();

function run() {
    setupPage();
    setupPage = () => {console.log('noped');};
    var s = dealCards();
    selectors.$welcome.addClass('hide');
    selectors.$game.removeClass('hide');
    selectors.nextRound.focus();
}