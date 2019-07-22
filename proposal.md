## Overview 

Danmaku Symphony is a verticl-scrolling shooter with a fairly simple objective: just don't get hit. Players will dodge enemy projectiles while also attempting to shoot enemies down in order to increase their score count. Players can move anywhere within the game bounds as enemies spawn from the top of the screen. The game is inspired by a sub-genre of shoot 'em ups known in Japan as "danmaku" or affectionately called "bullet hell" in the English community, given this name due to the high density of the projectiles that the enemy characters emit which makes these games especially brutal. The aim of Danmaku Symphony is to attempt to replicate this gameplay while still providing a fair player experience. The game is particularly inspired by the [Touhou](https://en.wikipedia.org/wiki/Touhou_Project) series. 

## Functionality

* Players can object veritically, horizontally, and diagonally around the screen
* Players will be able to shoot their own projectiles to destroy enemy objects
* The game will end if the character collides either with an enemy projectile or the enemy themselves

## Wireframe

![](https://i.imgur.com/TWFh1us.png)

The game will feature a single page, the player object will remain stationary and enemies will not spawn until the user inputs a key. The game will go on until a game over occurs. 

## Technologies
* Vanilla Javascript 
* HTML5 Canvas
* Webpack

## MVP List
* Player movement
* Enemy spawns
* Enemy projectiles
* Player projectiles 
* Collision detection functions correctly 

## Implementation Timeline
Day 1: 
* Plan out file structure and implementation strategies
* Finish canvas layout and setting up initial player position within the game bounds

Day 2:
* Implement player movement
* Begin implementing enemy types 

Day 3: 
* Finish implementing enemy objects
* Begin working on player and enemy projectiles (learn about basic particle implementation)

Day 4: 
* Finish implementing projectiles
* Implement collision detection

Day 5: 
* Add score display 
* Add control legend
* Play through game multiple times to ensure features work as intended
