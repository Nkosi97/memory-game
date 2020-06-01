describe('Should test shuffleDeck() function', function() {

    it('call the function  shuffleDeck()', function() {
        var user = new shuffleDeck("board");

        spyOn(user, "shuffleDeck");

        user.getElementById();

        expect(user.getElementById).toHaveBeenCalled();
    })

    it('call the function turnOffAllCards', function() {
        var user = new turnOffAllCards("div.image:not(.match)");

        spyOn(user, "div.image:not(.match)");

        user.turnOffAllCards();

        expect(user.turnOffAllCards).toHaveBeenCalled();
        
    })
})