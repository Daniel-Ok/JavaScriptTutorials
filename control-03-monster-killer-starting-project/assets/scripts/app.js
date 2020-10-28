let  chosenMaxLife = 100;
const ATTACK_VALUE = 10;
let currentMonsterHealth = chosenMaxLife;
const MONSTER_ATTACK_VALUE = 14;
let currentPlayerHealth = chosenMaxLife;
const STRONG_ATTACK_VALUE = 14;
const HEAL_PLAYER = 20;

adjustHealthBars(chosenMaxLife);

function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerDamage;
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You Won!');
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('You Lost!');
    }else if(currentPlayerHealth<=0 && currentMonsterHealth<=0){
        alert('Draw');
    }
}

function attackMonster(mode){
    let maxDamage;
    if(mode === 'ATTACK'){
        maxDamage = ATTACK_VALUE;
    }else if(mode ==='STRONG_ATTACK'){
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}
function attackHandler(){
  attackMonster('ATTACK');
}

function strongAttackHandler(){
    attackMonster('STRONG_ATTACK')
}

function healPlayer(){
    let healValue;
    if(currentPlayerHealth>= chosenMaxLife - HEAL_PLAYER){
        alert('You cannot heal to more than your max health')
        healValue = chosenMaxLife - currentPlayerHealth;
    }else{
        healValue = HEAL_PLAYER;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth+=healValue;
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayer);