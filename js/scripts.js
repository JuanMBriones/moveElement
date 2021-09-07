var pane = $('#pane'),
    box = $('#box'),
    w = pane.width() - box.width(),
    d = {},
    x = 3;

function newv(v,a,b,c,e) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0) + (d[c] ? x : 0) - (d[e] ? x : 0) ;
    d[a] = d[b] = d[c] = d[e] = false;
    //console.log(n);
    return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });
$('#right').click(function(e) {d[1] = true; })
$('#left').click(function(e) {d[2] = true; })
$('#down').click(function(e) {d[3] = true; })
$('#up').click(function(e) {d[4] = true; })


setInterval(function() {
    box.css({
        left: function(i,v) { return newv(v, 37, 39, 1, 2); },
        top: function(i,v) { return newv(v, 38, 40, 3, 4); }
    });
}, 20);