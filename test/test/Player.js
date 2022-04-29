export default class  Player extends Phaser.Physics.Matter.Sprite {
    constructor(data){
        let {scene,x,y,texture,frame} = data;
        super(scene.matter.world,x,y,texture,frame);
        this.scene.add.existing(this);
    }

    static preload(scene){
        scene.load.atlas("slime","character/slime.png","character/slime_atlas.json");
        scene.load.animation('slime_anim','character/slime_anim.json');
    }

    update(){
        this.anims.play('move',true);
        const speed = 2.5;
        let playerVelocity = new Phaser.Math.Vector2();
        if(this.inputKeys.left.isDown){
         playerVelocity.x = -1;
        }
        else if(this.inputKeys.right.isDown){
        playerVelocity.x = 1;
     }
        if(this.inputKeys.up.isDown){
           playerVelocity.y = -1;
        }
        else if(this.inputKeys.down.isDown){
            playerVelocity.y = 1;
     }
        playerVelocity.normalize();
        playerVelocity.scale(speed);
        this.setVelocity(playerVelocity.x,playerVelocity.y);
    
    }       
//https://darkpixel-kronovi.itch.io/rogue-knight

//https://rvros.itch.io/pixel-art-animated-slime

//https://elthen.itch.io/2d-pixel-art-fox-sprites

/*
🖥️ WRITING MY FIRST MACHINE LEARNING GAME! (1/4)

OpenAI Plays Hide and Seek…and Breaks The Game! 🤖 Two Minute Papers Two Minute Papers Bestätigt • 7,1 Mio. Aufrufe vor 2 Jahren

https://phasergames.com/json-animations-in-phaser-3/

https://www.youtube.com/watch?v=ffemDAdJySU

*/

}

