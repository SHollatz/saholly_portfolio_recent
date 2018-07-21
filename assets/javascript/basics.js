
window.addEvent('domready', function(){
    var myMenu = new ImageMenu($('#linkedin'), {
        openWidth: 310,
        border: 2,
        onOpen: function(e, i) {
            if (e.indexOf('_b=1') > -1) {
                window.open(e);   
            } else {
                location = e;
            }
        }
    });
});