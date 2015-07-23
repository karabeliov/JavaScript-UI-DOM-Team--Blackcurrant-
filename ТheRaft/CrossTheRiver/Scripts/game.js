var game = (function () {
    game = Object.create({});
    
    //var mother = Object.create(mother).init(150,50,25);
    
    Object.defineProperty(game, 'init', {
        value: function (renderer) {
            this.renderer = renderer;
            this.mother = Object.create(mother).init(150, 50, 25);
            this.father = Object.create(father).init(250, 50, 25);
            this.son = Object.create(son).init(170, 150, 25);
            this.daughter = Object.create(daughter).init(195, 50, 25);
            this.cop = Object.create(cop).init(290, 50, 25);
            this.prisoner = Object.create(prisoner).init(350, 50, 25);
            this.raft = Object.create(raft).init(150, 450, 25);
            this.tree = Object.create(tree).init(250, 450, 25);
            this.river = Object.create(river).init(350, 450, 25);
            return this;
        }
    });
    Object.defineProperty(game, 'getGame', {
        value: function () {
            var drawOperations = {
                drawMother: renderer.drawMother(this.renderer, this.mother),
                drawFather: renderer.drawFather(this.renderer, this.father),
                drawSon: renderer.drawSon(this.renderer, this.son),
                drawDaughter: renderer.drawDaughter(this.renderer, this.daughter),
                drawCop: renderer.drawCop(this.renderer, this.cop),
                drawPrisoner: renderer.drawPrisoner(this.renderer, this.prisoner),
                drawRiver: renderer.drawRiver(this.renderer, this.river),
                drawRaft: renderer.drawRaft(this.renderer, this.raft),
                drawTree: renderer.drawTree(this.renderer, this.tree)
            }
           return this;
        }
    });
    return game;
} ())
