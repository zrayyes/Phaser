function mapTileId(id) {
    const skeleton = 221
    const column = 580
    const wall = 554
    const floor = 0

    switch (id) {
        case 1:
            return wall
        case 2:
            return column
        case 10:
            return skeleton
        case 0:
        default:
            return floor
    }
}

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
            [1, 0, 2, 0, 0, 0, 10, 2, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 2, 10, 0, 0, 0, 2, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]


        level = level.map(r => r.map(t => mapTileId(t)))

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