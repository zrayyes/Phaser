const scene = {
    preload: function () {
        this.load.spritesheet(
            "tiles",
            "assets/colored.png",
            {
                frameWidth: 16,
                frameHeight: 16,
                spacing: 1
            }
        )
    },

    create: function () {
        let level = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]

        const wall = 554
        const floor = 0
        level = level.map(r => r.map(t => t == 1 ? wall : floor))

        const tileSize = 16
        const config = {
            data: level,
            tileWidth: tileSize,
            tileHeight: tileSize,
        }

        const map = this.make.tilemap(config)
        const tileset = map.addTilesetImage("tiles", "tiles", tileSize, tileSize, 0, 1)
        map.createStaticLayer(0, tileset, 0, 0)
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#000",
    parent: "game",
    pixelArt: true,
    scene: scene,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 }
        }
    }
}

const game = new Phaser.Game(config)