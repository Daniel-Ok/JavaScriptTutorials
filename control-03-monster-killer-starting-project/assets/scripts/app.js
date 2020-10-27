let  chosenMaxLife = 100;
const ATTACK_VALUE = 10;
let currentMonsterHealth = chosenMaxLife;
const MONSTER_ATTACK_VALUE = 14;
let currentPlayerHealth =100;
const STRONG_ATTACK_VALUE = 14;

adjustHealthBars(chosenMaxLife);

function attackHandler(){
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
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

function strongAttackHandler(){
    const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    currentMonsterHealth -= damage;
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
attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click',strongAttackHandler)