
class PWCVScene extends Phaser.Scene
{

    preload ()
    {
        this.load.image("ground","Assets/topground.png");
        this.load.image("sky","Assets/background.png");
        this.load.image("apple","Assets/apple.png");
        this.load.image("sign1","Assets/sign1.png");
        this.load.image("sign2","Assets/sign2.png");
        this.load.image("monitor","Assets/monitor.png");
        this.load.image("tree1","Assets/tree1.png");
        this.load.image("rock","Assets/rock.png");
        this.load.image("button","Assets/button-bg.png");
        this.load.image("intro","Assets/intro.png");
        this.load.image("crate","Assets/crate.png");
        this.load.image("cloud1","Assets/cloud1.png");
        this.load.image("cloud2","Assets/cloud2.png");
        this.load.image("cloud3","Assets/cloud3.png");
        this.load.image("about","Assets/title-about.png");
        this.load.spritesheet("dude","Assets/dude.png",{frameWidth:32,frameHeight:48});

        this.load.image("ray","Assets/ray.png");
    }

    create ()
    {
        const W = 4000;
        const H = game.config.height;

        this.add.sprite(256,H-256, 'intro');
        this.add.sprite(768,H-64, 'about');
        this.add.sprite(1200,H-64, 'rock');
        this.add.sprite(1000,H-200, 'tree1');

        const cloud1 = this.add.image(-500, H - Phaser.Math.Between(400,450), 'cloud1');
        const cloud2 = this.add.image(-500, H - Phaser.Math.Between(400,450), 'cloud2');
        const cloud3 = this.add.image(-500, H - Phaser.Math.Between(400,450), 'cloud3');

        this.tweens.add({
            targets: cloud1,
            x: 4000,
            duration: Phaser.Math.Between(20000,50000),
            yoyo: false,
            ease: 'Linear',
            repeat: -1
        });

        this.tweens.add({
            targets: cloud2,
            x: 4000,
            duration: Phaser.Math.Between(20000,50000),
            yoyo: false,
            ease: 'Linear',
            repeat: -1
        });

        this.tweens.add({
            targets: cloud3,
            x: 4000,
            duration: Phaser.Math.Between(20000,50000),
            yoyo: false,
            ease: 'Linear',
            repeat: -1
        });

        //add tilesprites
        let ground = this.add.tileSprite(0,H-64,W,128,'ground');
        ground.setOrigin(0,0);
        let platforms = this.physics.add.staticGroup();
        platforms.add(ground);

        //try to create a background
        let background = this.add.sprite(0,0,'sky');
        background.setOrigin(0,0);
        background.displayWidth = W;
        background.displayHeight = H;
        background.depth = -2;

        //create rays on the top of the background
        let rays = [];

        for(let i=-10;i<=10;i++){
            let ray = this.add.sprite(W/2,H-100,'ray');
            ray.displayHeight = 1.2*H;
            ray.setOrigin(0.5,1);
            ray.alpha = 0.2;
            ray.angle = i*20;
            ray.depth = -1;
            rays.push(ray);
        }
        console.log(rays);

        //tween
        this.tweens.add({
            targets: rays,
            props:{
                angle:{
                    value : "+=20"
                },
            },
            duration : 8000,
            repeat : -1
        });

        this.player = this.physics.add.sprite(50,50,'dude',4);
        console.log(this.player);
        //set the bounce values
        this.player.setBounce(0);
        this.player.setCollideWorldBounds(true);
        //player animations and player movements

        this.anims.create({
            key : 'left',
            frames: this.anims.generateFrameNumbers('dude',{start:0,end:3}),
            frameRate : 10,
            repeat : -1
        });
        this.anims.create({
            key : 'center',
            frames: [{key:'dude',frame:4}],
            frameRate : 10,
        });
        this.anims.create({
            key : 'right',
            frames: this.anims.generateFrameNumbers('dude',{start:5,end:8}),
            frameRate : 10,
            repeat : -1
        });

        // keyboard
        this.cursors = this.input.keyboard.createCursorKeys();

        //Add a group of apples = physical objects
        let fruits = this.physics.add.group({
            key: "apple",
            repeat : 15,
            setScale : {x:0.2,y:0.2},
            setXY : {x:10,y:0,stepX:100},
        });

        let sign = this.physics.add.sprite(1024,0,'sign1')
        sign.setBounce(Phaser.Math.FloatBetween(0.4,0.7));
        this.physics.add.collider(platforms,sign);

        //add bouncing effect to all the apples
        fruits.children.iterate(function(f){
            f.setBounce(Phaser.Math.FloatBetween(0.4,0.7));
        });

        this.physics.add.existing(ground,true);

        //add a collision detection between player and ground
        this.physics.add.collider(platforms,this.player);
        this.physics.add.collider(platforms,fruits);
        this.physics.add.overlap(this.player,fruits,this.eatFruit,null,this);

        //create cameras
        this.cameras.main.setBounds(0,0,W,H);
        this.physics.world.setBounds(0,0,W,H);

        this.cameras.main.startFollow(this.player,true,true);
        this.cameras.main.setZoom(1.5);
    }

    update ()
    {
        var p = this.input.activePointer;
        var direction = p.positionToCamera(this.cameras.main).x - this.player.x

        if(this.cursors.left.isDown || (direction < 0 && p.isDown)){
            this.player.setVelocityX(-player_config.player_speed);
            this.player.anims.play('left',true);
        }
        else if(this.cursors.right.isDown || (direction > 0 && p.isDown)){
            this.player.setVelocityX(player_config.player_speed);
            this.player.anims.play('right',true);
        }
        else{
            this.player.setVelocityX(0);
            this.player.anims.play('center');
        }

        //add jumping ability , stop the player when in air
        if((this.cursors.up.isDown || (p.getAngle() < 0 && p.isDown)) && this.player.body.touching.down){
            this.player.setVelocityY(player_config.player_jumpspeed);
        }
    }

    eatFruit(player, fruit){
        fruit.disableBody(true,true);
    }
}


const config = {
    type:Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,

    scale:{
        mode: Phaser.Scale.SHOW_ALL,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    backgroundColor : '#000000',

    physics:{
        default:'arcade',
        arcade :{
            gravity:{
                y:1000,
            },
            debug:false,
        }
    },
    scene: PWCVScene
};


const game = new Phaser.Game(config);

let player_config = {
    player_speed : 450,
    player_jumpspeed : -700,
}
