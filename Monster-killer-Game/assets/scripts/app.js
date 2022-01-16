const attackValue = 10
const MonsterattackValue = 14
const StrongAttackValue = 20
const healValue = 5;
const enteredValue = prompt('Maximum Life for Monster and you.', '100') //prompt will bring up a pop up where we can edit the max life

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let chosenMaxLife = parseInt( enteredValue);
let currentLife = chosenMaxLife;
let currentPlayerlife = chosenMaxLife
battleLog=[];
if (isNaN(chosenMaxLife)|| chosenMaxLife<=0){
    chosenMaxLife= 100;
}
adjustHealthBars(chosenMaxLife)
function writeToLog(ev,val,monster,player){
    logEntry = {
        event : ev,
        value: val,
        monsterHealth:monster,
        playerHealth : player,
    }
   if(ev === LOG_EVENT_PLAYER_ATTACK){
        logEntry.target='MONSTER'
    }else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
        logEntry.target='MONSTER'
    }else if (ev === LOG_EVENT_MONSTER_ATTACK){
        logEntry.target='PLAYER'
    }else if (ev === LOG_EVENT_PLAYER_HEAL){
        logEntry.target='PLAYER'
    }else if (ev === LOG_EVENT_GAME_OVER){
       logEntry.target=''
    }
    battleLog.push(logEntry)
    // for(let log in logEntry){
    //     console.log(`${log}=> ${logEntry[log]}`)
    }


function reset(){
    currentLife = chosenMaxLife;
    currentPlayerlife = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound(){
    const playerDamage = dealPlayerDamage(MonsterattackValue);
currentPlayerlife -= playerDamage;
writeToLog(LOG_EVENT_MONSTER_ATTACK,'MONSTER_ATTACK',currentLife,currentPlayerlife)
 
    if(currentLife <=0 && currentPlayerlife > 0){
        alert("You Won!");
        writeToLog(LOG_EVENT_GAME_OVER,'PLAYER_WON',currentLife,currentPlayerlife);
    } else if (currentPlayerlife <=0 && currentLife >0 ){
        alert("You Lost!");
        writeToLog(LOG_EVENT_GAME_OVER,'MONSTER_WON',currentLife,currentPlayerlife);
    } else if (currentPlayerlife<=0 && currentLife <=0){
        alert("Draw!")
        writeToLog(LOG_EVENT_GAME_OVER,'A DRAW',currentLife,currentPlayerlife);
    }

    if(currentLife <=0  ||  currentPlayerlife<=0 ){
            reset();
        }
}

function attackHandler(){
    const damage = dealMonsterDamage(attackValue);
    currentLife -= damage;
    endRound();
    writeToLog(LOG_EVENT_PLAYER_ATTACK,'PLAYER_ATTACK', currentLife, currentPlayerlife)
 
}
function strongAttackHandler(){
    const Strongdamage = dealMonsterDamage(StrongAttackValue)
    currentLife -= Strongdamage 
    endRound();
    writeToLog(LOG_EVENT_PLAYER_STRONG_ATTACK,'PLAYER_STRONG_ATTACK',currentLife,currentPlayerlife)
}

function healPlayerhandler(){
let HEAL;
if(currentPlayerlife >= chosenMaxLife - healValue){
    alert ("You can't heal more than Maximum Life")
    HEAL = chosenMaxLife - currentPlayerlife
} else{
    HEAL = healValue
}
 increasePlayerHealth(HEAL);
currentPlayerlife += HEAL;
endRound();
writeToLog(LOG_EVENT_PLAYER_HEAL,'PLAYER_HEAL', currentLife, currentPlayerlife)
}

function logHandler(){
    for(let el of battleLog){
      console.log(battleLog)
}
    }
   
attackBtn.addEventListener ('click',attackHandler);
strongAttackBtn.addEventListener ('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerhandler);
logBtn.addEventListener('click',logHandler);