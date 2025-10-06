//Sets the amount of all your items to 1.
x = PIXI.game.prodigy.player.backpack.data.item
for (i in x) {
    x[i] = {"ID": x[i].ID, "N": 1}
}
