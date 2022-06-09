import "./components/BitmapFont.js";
import "./components/DoomHero.js";
import "./components/DoomEnemy.js";

// <doom-enemy name="Armifer91" style="--x: 100px"></doom-enemy>

const gameContainer = document.querySelector(".game");

const createEnemy = (users) => {
  const totalUsers = users.length;
  const userName = users[Math.floor(Math.random() * totalUsers)];
  const enemy = document.createElement("doom-enemy");
  enemy.setAttribute("name", userName);
  const x = ~~(Math.random() * 1024);
  const type = ~~(Math.random() * 2);
  const isMelee = type === 1;
  isMelee && enemy.setAttribute("type", "melee");
  enemy.setAttribute("style", `--x: ${x}px`);
  return enemy;
};

fetch("http://localhost:9999/api/users/")
  .then(response => response.json())
  .then(users => {
    for (let i = 0; i < 3; i++) {
      const enemy = createEnemy(users);
      gameContainer.appendChild(enemy);
    }
  });
