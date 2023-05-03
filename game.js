
class PWCVScene extends Phaser.Scene
{
    text;
    graphics;

    preload ()
    {
        this.load.image("ground","Assets/topground.png");
        this.load.image("bottomground","Assets/bottomground.png");
        this.load.image("sky","Assets/background.png");
        this.load.image("apple","Assets/apple.png");
        this.load.image("sign1","Assets/sign1.png");
        this.load.image("sign2","Assets/sign2.png");
        this.load.image("tree1","Assets/tree1.png");
        this.load.image("tree2","Assets/tree2.png");
        this.load.image("rock","Assets/rock.png");
        this.load.image("intro","Assets/intro.png");
        this.load.image("crate","Assets/crate.png");
        this.load.image("cloud1","Assets/cloud1.png");
        this.load.image("cloud2","Assets/cloud2.png");
        this.load.image("cloud3","Assets/cloud3.png");
        this.load.image("mushroom1","Assets/mushroom1.png");
        this.load.image("mushroom2","Assets/mushroom2.png");
        this.load.image("flower1","Assets/flower1.png");
        this.load.image("flower2","Assets/flower2.png");
        this.load.image("flower3","Assets/flower3.png");
        this.load.image("about","Assets/title-about.png");
        this.load.image("skills","Assets/title-skills.png");
        this.load.image("experience","Assets/title-experience.png");
        this.load.image("genasys","Assets/banner_genasys.png");
        this.load.image("capitec","Assets/banner_capitec.png");
        this.load.spritesheet("dude","Assets/dude.png",{frameWidth:32,frameHeight:48});
        this.load.spritesheet("coin","Assets/coin.png",{frameWidth:32,frameHeight:32});
        this.load.atlas('gems', 'Assets/gems.png', 'Assets/gems.json');

        this.load.image("ray","Assets/ray.png");
    }

    create ()
    {
        const W = 8500;
        const H = 800;

        const cloud1 = this.add.sprite(-500, H - Phaser.Math.Between(400,450), 'cloud1');
        const cloud2 = this.add.sprite(-500, H - Phaser.Math.Between(400,450), 'cloud2');
        const cloud3 = this.add.sprite(-500, H - Phaser.Math.Between(400,450), 'cloud3');

        //instantiate graphics and path for drawing
        this.graphics = this.add.graphics();
        this.path = this.add.path();

        this.add.sprite(100,H-85, 'rock');
        this.add.sprite(220,H-256, 'intro');
        this.add.sprite(300,H-96, 'sign2');
        this.add.sprite(480,H-200, 'tree2');
        this.add.sprite(512,H-210, 'tree1');

        //About section
        this.add.sprite(1568,H-64, 'about');
        this.text = this.add.text(2265, H-520, ['Data Science Strategist'], { font: '24px Arial Black', fill: '#ffffff'});
        this.text = this.add.text(1970, H-110, ['Beginner'], { font: '16px Arial Black', fill: '#ffffff' });
        this.text = this.add.text(1970, H-187, ['Elementary'], { font: '16px Arial Black', fill: '#ffffff' });
        const line1 = new Phaser.Curves.Line([ 1970, H-131, 2800, H-131 ]);
        this.path.add(line1);

        this.text = this.add.text(1970, H-264, ['Intermediate'], { font: '16px Arial Black', fill: '#ffffff' });
        const line2 = new Phaser.Curves.Line([ 1970, H-208, 2800, H-208 ]);
        this.path.add(line2);

        this.text = this.add.text(1970, H-344, ['Advanced'], { font: '16px Arial Black', fill: '#ffffff' });
        const line3 = new Phaser.Curves.Line([ 1970, H-285, 2800, H-285 ]);
        this.path.add(line3);

        this.text = this.add.text(1970, H-421, ['Expert'], { font: '16px Arial Black', fill: '#ffffff' });
        const line4 = new Phaser.Curves.Line([ 1970, H-362, 2800, H-362 ]);
        this.path.add(line4);

        this.text = this.add.text(2090, H-481, ['Strategy'], { font: '16px Arial Black', fill: '#ffffff' });
        this.add.sprite(2130,H-96,"crate");
        this.add.sprite(2130,H-173,"crate");
        this.add.sprite(2130,H-250,"crate");
        this.add.sprite(2130,H-327,"crate");
        this.add.sprite(2130,H-404,"crate");
        this.text = this.add.text(2260, H-481, ['Planning'], { font: '16px Arial Black', fill: '#ffffff' });
        this.add.sprite(2300,H-96,"crate");
        this.add.sprite(2300,H-173,"crate");
        this.add.sprite(2300,H-250,"crate");
        this.add.sprite(2300,H-327,"crate");
        this.text = this.add.text(2415, H-481, ['Business Analysis'], { font: '16px Arial Black', fill: '#ffffff' });
        this.add.sprite(2490,H-96,"crate");
        this.add.sprite(2490,H-173,"crate");
        this.add.sprite(2490,H-250,"crate");
        this.add.sprite(2490,H-327,"crate");
        this.text = this.add.text(2640, H-481, ['People'], { font: '16px Arial Black', fill: '#ffffff' });
        this.add.sprite(2670,H-96,"crate");
        this.add.sprite(2670,H-173,"crate");
        this.add.sprite(2670,H-250,"crate");
        this.add.sprite(2670,H-327,"crate");
        this.add.sprite(2670,H-404,"crate");

        this.add.sprite(2424,H-64, 'rock');
        this.add.sprite(3200,H-75, 'rock');
        this.add.sprite(3300,H-200, 'tree2');
        this.add.sprite(3400,H-200, 'tree2');
        this.add.sprite(3500,H-210, 'tree1');

        //Skills section
        this.add.sprite(3300,H-64, 'skills');

        this.anims.create({key : 'rotate',frames: this.anims.generateFrameNumbers('coin',{start:0,end:5}),frameRate : 10,repeat : -1});
        this.anims.create({ key: 'diamond', frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'prism', frames: this.anims.generateFrameNames('gems', { prefix: 'prism_', end: 6, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'ruby', frames: this.anims.generateFrameNames('gems', { prefix: 'ruby_', end: 6, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'square', frames: this.anims.generateFrameNames('gems', { prefix: 'square_', end: 14, zeroPad: 4 }), repeat: -1 });

        this.text = this.add.text(4160, H-450, ['Data Science Toolkit'], { font: '24px Arial Black', fill: '#ffffff'});

        this.text = this.add.text(3995, H-414, ['Beginner'], { font: '16px Arial Black', fill: '#ffffff' });
        const line5 = new Phaser.Curves.Line([ 3970, H, 3970, H-394 ]);
        this.path.add(line5);
        this.text = this.add.text(4130, H-414, ['Elementary'], { font: '16px Arial Black', fill: '#ffffff' });
        const line6 = new Phaser.Curves.Line([ 4110, H, 4110, H-394 ]);
        this.path.add(line6);

        this.text = this.add.text(4260, H-414, ['Intermediate'], { font: '16px Arial Black', fill: '#ffffff' });
        const line7 = new Phaser.Curves.Line([ 4250, H, 4250, H-394 ]);
        this.path.add(line7);

        this.text = this.add.text(4415, H-414, ['Advanced'], { font: '16px Arial Black', fill: '#ffffff' });
        const line8 = new Phaser.Curves.Line([ 4390, H, 4390, H-394 ]);
        this.path.add(line8);

        this.text = this.add.text(4570, H-414, ['Expert'], { font: '16px Arial Black', fill: '#ffffff' });
        const line9 = new Phaser.Curves.Line([ 4530, H, 4530, H-394 ]);
        this.path.add(line9);
        const line10 = new Phaser.Curves.Line([ 4670, H, 4670, H-394 ]);
        this.path.add(line10);

        this.text = this.add.text(3750, H-354, ['Machine Learning/','Modeling'], { font: '16px Arial Black', fill: '#ffffff' });
        this.add.sprite(4040,H-344).play('rotate');
        this.add.sprite(4180,H-344).play('rotate');
        this.add.sprite(4320,H-344).play('rotate');
        this.add.sprite(4460,H-344).play('rotate');
        this.add.sprite(4600,H-344).play('rotate');
        this.text = this.add.text(3750, H-274, ['Data manipulation'], { font: '16px Arial Black', fill: '#ffffff' });
        this.add.sprite(4040,H-264).play('rotate');
        this.add.sprite(4180,H-264).play('rotate');
        this.add.sprite(4320,H-264).play('rotate');
        this.add.sprite(4460,H-264).play('rotate');
        this.add.sprite(4600,H-264).play('rotate');
        this.text = this.add.text(3750, H-197, ['Data Visualisation'], { font: '16px Arial Black', fill: '#ffffff' });
        this.add.sprite(4040,H-187).play('rotate');
        this.add.sprite(4180,H-187).play('rotate');
        this.add.sprite(4320,H-187).play('rotate');
        this.text = this.add.text(3750, H-120, ['Solutions Architecture'], { font: '16px Arial Black', fill: '#ffffff' });
        this.add.sprite(4040,H-110).play('rotate');
        this.add.sprite(4180,H-110).play('rotate');
        this.add.sprite(4320,H-110).play('rotate');
        this.add.sprite(4460,H-110).play('rotate');
        this.add.sprite(4600,H-110).play('rotate');


        this.add.sprite(4770,H-100, 'flower1');
        this.add.sprite(4730,H-80, 'mushroom1');
        this.add.sprite(4810,H-80, 'mushroom2');

        this.text = this.add.text(5170, H-450, ['Programming Languages'], { font: '24px Arial Black', fill: '#ffffff'});

        this.text = this.add.text(5025, H-414, ['Beginner'], { font: '16px Arial Black', fill: '#ffffff' });
        const line11 = new Phaser.Curves.Line([ 5000, H, 5000, H-394 ]);
        this.path.add(line11);
        this.text = this.add.text(5160, H-414, ['Elementary'], { font: '16px Arial Black', fill: '#ffffff' });
        const line12 = new Phaser.Curves.Line([ 5140, H, 5140, H-394 ]);
        this.path.add(line12);

        this.text = this.add.text(5290, H-414, ['Intermediate'], { font: '16px Arial Black', fill: '#ffffff' });
        const line13 = new Phaser.Curves.Line([ 5280, H, 5280, H-394 ]);
        this.path.add(line13);

        this.text = this.add.text(5445, H-414, ['Advanced'], { font: '16px Arial Black', fill: '#ffffff' });
        const line14 = new Phaser.Curves.Line([ 5420, H, 5420, H-394 ]);
        this.path.add(line14);

        this.text = this.add.text(5600, H-414, ['Expert'], { font: '16px Arial Black', fill: '#ffffff' });
        const line15 = new Phaser.Curves.Line([ 5560, H, 5560, H-394 ]);
        this.path.add(line15);
        const line16 = new Phaser.Curves.Line([ 5700, H, 5700, H-394 ]);
        this.path.add(line16);

        this.text = this.add.text(4880, H-354, ['Python'], { font: '16px Arial Black', fill: '#ffffff' });
        this.add.sprite(5070,H-344).play('diamond');
        this.add.sprite(5210,H-344).play('diamond');
        this.add.sprite(5350,H-344).play('diamond');
        this.add.sprite(5490,H-344).play('diamond');
        this.text = this.add.text(4880, H-274, ['SQL'], { font: '16px Arial Black', fill: '#ffffff' });
        this.add.sprite(5070,H-264).play('diamond');
        this.add.sprite(5210,H-264).play('diamond');
        this.add.sprite(5350,H-264).play('diamond');
        this.add.sprite(5490,H-264).play('diamond');
        this.add.sprite(5630,H-264).play('diamond');
        this.text = this.add.text(4880, H-197, ['Terraform'], { font: '16px Arial Black', fill: '#ffffff' });
        this.add.sprite(5070,H-187).play('diamond');
        this.add.sprite(5210,H-187).play('diamond');
        this.add.sprite(5350,H-187).play('diamond');
        this.text = this.add.text(4880, H-120, ['R'], { font: '16px Arial Black', fill: '#ffffff' });
        this.add.sprite(5070,H-110).play('diamond');
        this.add.sprite(5210,H-110).play('diamond');
        this.add.sprite(5350,H-110).play('diamond');
        this.add.sprite(5490,H-110).play('diamond');

        this.add.sprite(5900,H-200, 'tree2');

        //Experience Section
        this.add.sprite(6500,H-64, 'experience');

        this.events.once('addXP', this.handler, this);

        this.tweens.add({
            targets: cloud1,
            x: W,
            duration: Phaser.Math.Between(20000,50000),
            yoyo: false,
            ease: 'Linear',
            repeat: -1
        });

        this.tweens.add({
            targets: cloud2,
            x: W,
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
        let bottomground = this.add.tileSprite(0,H+350,4*W,600,'bottomground');
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

        this.player = this.physics.add.sprite(50,H-96,'dude',4);
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
            repeat : 75,
            setScale : {x:0.2,y:0.2},
            setXY : {x:10,y:0,stepX:100},
        });

        let sign = this.physics.add.sprite(1024,0,'sign1')
        sign.setBounce(0.1);
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

    handler()
    {


        // this.tweens.add({
        //     targets: cloud2,
        //     x: W,
        //     duration: Phaser.Math.Between(20000,50000),
        //     yoyo: false,
        //     ease: 'Linear',
        //     repeat: -1
        // });

        const genasys = this.add.sprite(7350, 10, 'genasys');
        const capitec = this.add.sprite(7850, 10, 'capitec');

        this.tweens.add({
            targets: genasys,
            y: 450,
            duration: 1000,
            repeat: 0,
            ease: 'Linear'
        })
        this.tweens.add({
            targets: capitec,
            y: 480,
            duration: 2000,
            repeat: 0,
            ease: 'Linear'
        })
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

        if(this.player.x > 6600){
            this.events.emit('addXP');
        }

        this.graphics.lineStyle(2, 0xffffff, 1);

        this.path.draw(this.graphics);
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
        mode: Phaser.Scale.FIT,
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
    player_speed : 585,
    player_jumpspeed : -700,
}
