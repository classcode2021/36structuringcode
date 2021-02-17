class Form{
    constructor(){

    }
    display(){
        var title=createElement("h1")
        title.html("Multi Player Car Racing Game")
        title.position(360,0)

        var input=createInput("name")
        input.position(480,160)

        var button=createButton("Play")
        button.position(520,200)

        var greeting=createElement("h2")

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Hello  "+name)
            greeting.position(510,200)
        })
    }
}