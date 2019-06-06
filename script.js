var scale = document.getElementById("scale");

scale.onchange = function () {
    var value = scale.options[scale.selectedIndex].value;
    if (value == "chromatic") {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].include = true;
        }
        checked = 0;
        resetPitch();
        radioChange();
        valid = true;
    }
    else if (value == "major" || value == "ionian") {
        if (included.length == 7) {
            nodes[0].selected = included[0].selected;
            nodes[1].selected = false;
            nodes[2].selected = included[1].selected;
            nodes[3].selected = false;
            nodes[4].selected = included[2].selected;
            nodes[5].selected = included[3].selected;
            nodes[6].selected = false;
            nodes[7].selected = included[4].selected;
            nodes[8].selected = false;
            nodes[9].selected = included[5].selected;
            nodes[10].selected = false;
            nodes[11].selected = included[6].selected;
            resetPitch();
            radioChange();
        }
        else {
            resetPitch();
            checked = 0;
        }
        nodes[0].include = true;
        nodes[1].include = false;
        nodes[2].include = true;
        nodes[3].include = false;
        nodes[4].include = true;
        nodes[5].include = true;
        nodes[6].include = false;
        nodes[7].include = true;
        nodes[8].include = false;
        nodes[9].include = true;
        nodes[10].include = false;
        nodes[11].include = true;
        valid = true;
    }
    else if (value == "harmonic") {
        if (included.length == 7) {
            nodes[0].selected = included[0].selected;
            nodes[1].selected = false;
            nodes[2].selected = included[1].selected;
            nodes[3].selected = included[2].selected;
            nodes[4].selected = false;
            nodes[5].selected = included[3].selected;
            nodes[6].selected = false;
            nodes[7].selected = included[4].selected;
            nodes[8].selected = included[5].selected;
            nodes[9].selected = false;
            nodes[10].selected = false;
            nodes[11].selected = included[6].selected;
            resetPitch();
            radioChange();
        }
        else {
            resetPitch();
            checked = 0;
        }
        nodes[0].include = true;
        nodes[1].include = false;
        nodes[2].include = true;
        nodes[3].include = true;
        nodes[4].include = false;
        nodes[5].include = true;
        nodes[6].include = false;
        nodes[7].include = true;
        nodes[8].include = true;
        nodes[9].include = false;
        nodes[10].include = false;
        nodes[11].include = true;
        valid = true;
    }
    else if (value == "melodic") {
        if (included.length == 7) {
            nodes[0].selected = included[0].selected;
            nodes[1].selected = false;
            nodes[2].selected = included[1].selected;
            nodes[3].selected = included[2].selected;
            nodes[4].selected = false;
            nodes[5].selected = included[3].selected;
            nodes[6].selected = false;
            nodes[7].selected = included[4].selected;
            nodes[8].selected = false;
            nodes[9].selected = included[5].selected;
            nodes[10].selected = false;
            nodes[11].selected = included[6].selected;
            resetPitch();
            radioChange();
        }
        else {
            resetPitch();
            checked = 0;
        }
        nodes[0].include = true;
        nodes[1].include = false;
        nodes[2].include = true;
        nodes[3].include = true;
        nodes[4].include = false;
        nodes[5].include = true;
        nodes[6].include = false;
        nodes[7].include = true;
        nodes[8].include = false;
        nodes[9].include = true;
        nodes[10].include = false;
        nodes[11].include = true;
        resetPitch();
        radioChange();
        valid = true;
    }
    else if (value == "natural") {
        if (included.length == 7) {
            nodes[0].selected = included[0].selected;
            nodes[1].selected = false;
            nodes[2].selected = included[1].selected;
            nodes[3].selected = included[2].selected;
            nodes[4].selected = false;
            nodes[5].selected = included[3].selected;
            nodes[6].selected = false;
            nodes[7].selected = included[4].selected;
            nodes[8].selected = included[5].selected;
            nodes[9].selected = false;
            nodes[10].selected = included[6].selected;
            nodes[11].selected = false;
            resetPitch();
            radioChange();
        }
        else {
            resetPitch();
            checked = 0;
        }
        nodes[0].include = true;
        nodes[1].include = false;
        nodes[2].include = true;
        nodes[3].include = true;
        nodes[4].include = false;
        nodes[5].include = true;
        nodes[6].include = false;
        nodes[7].include = true;
        nodes[8].include = true;
        nodes[9].include = false;
        nodes[10].include = true;
        nodes[11].include = false;
        valid = true;
    }
    else if (value == "dorian") {
        if (included.length == 7) {
            nodes[0].selected = included[0].selected;
            nodes[1].selected = false;
            nodes[2].selected = included[1].selected;
            nodes[3].selected = included[2].selected;
            nodes[4].selected = false;
            nodes[5].selected = included[3].selected;
            nodes[6].selected = false;
            nodes[7].selected = included[4].selected;
            nodes[8].selected = false;
            nodes[9].selected = included[5].selected;
            nodes[10].selected = included[6].selected;
            nodes[11].selected = false;
            resetPitch();
            radioChange();
        }
        else {
            resetPitch();
            checked = 0;
        }
        nodes[0].include = true;
        nodes[1].include = false;
        nodes[2].include = true;
        nodes[3].include = true;
        nodes[4].include = false;
        nodes[5].include = true;
        nodes[6].include = false;
        nodes[7].include = true;
        nodes[8].include = false;
        nodes[9].include = true;
        nodes[10].include = true;
        nodes[11].include = false;
        valid = true;
    }
    else if (value == "phrygian") {
        if (included.length == 7) {
            nodes[0].selected = included[0].selected;
            nodes[1].selected = included[1].selected;
            nodes[2].selected = false;
            nodes[3].selected = included[2].selected;
            nodes[4].selected = false;
            nodes[5].selected = included[3].selected;
            nodes[6].selected = false;
            nodes[7].selected = included[4].selected;
            nodes[8].selected = included[5].selected;
            nodes[9].selected = false;
            nodes[10].selected = included[6].selected;
            nodes[11].selected = false;
            resetPitch();
            radioChange();
        }
        else {
            resetPitch();
            checked = 0;
        }
        nodes[0].include = true;
        nodes[1].include = true;
        nodes[2].include = false;
        nodes[3].include = true;
        nodes[4].include = false;
        nodes[5].include = true;
        nodes[6].include = false;
        nodes[7].include = true;
        nodes[8].include = true;
        nodes[9].include = false;
        nodes[10].include = true;
        nodes[11].include = false;
        valid = true;
    }
    else if (value == "lydian") {
        if (included.length == 7) {
            nodes[0].selected = included[0].selected;
            nodes[1].selected = false;
            nodes[2].selected = included[1].selected;
            nodes[3].selected = false;
            nodes[4].selected = included[2].selected;
            nodes[5].selected = false;
            nodes[6].selected = included[3].selected;
            nodes[7].selected = included[4].selected;
            nodes[8].selected = false;
            nodes[9].selected = included[5].selected;
            nodes[10].selected = false;
            nodes[11].selected = included[6].selected;
            resetPitch();
            radioChange();
        }
        else {
            resetPitch();
            checked = 0;
        }
        nodes[0].include = true;
        nodes[1].include = false;
        nodes[2].include = true;
        nodes[3].include = false;
        nodes[4].include = true;
        nodes[5].include = false;
        nodes[6].include = true;
        nodes[7].include = true;
        nodes[8].include = false;
        nodes[9].include = true;
        nodes[10].include = false;
        nodes[11].include = true;
        valid = true;
    }
    else if (value == "mixolydian") {
        if (included.length == 7) {
            nodes[0].selected = included[0].selected;
            nodes[1].selected = false;
            nodes[2].selected = included[1].selected;
            nodes[3].selected = false;
            nodes[4].selected = included[2].selected;
            nodes[5].selected = included[3].selected;
            nodes[6].selected = false;
            nodes[7].selected = included[4].selected;
            nodes[8].selected = false;
            nodes[9].selected = included[5].selected;
            nodes[10].selected = included[6].selected;
            nodes[11].selected = false;
            resetPitch();
            radioChange();
        }
        else {
            resetPitch();
            checked = 0;
        }
        nodes[0].include = true;
        nodes[1].include = false;
        nodes[2].include = true;
        nodes[3].include = false;
        nodes[4].include = true;
        nodes[5].include = true;
        nodes[6].include = false;
        nodes[7].include = true;
        nodes[8].include = false;
        nodes[9].include = true;
        nodes[10].include = true;
        nodes[11].include = false;
        valid = true;
    }
    else if (value == "aeolian") {
        if (included.length == 7) {
            nodes[0].selected = included[0].selected;
            nodes[1].selected = false;
            nodes[2].selected = included[1].selected;
            nodes[3].selected = included[2].selected;
            nodes[4].selected = false;
            nodes[5].selected = included[3].selected;
            nodes[6].selected = false;
            nodes[7].selected = included[4].selected;
            nodes[8].selected = included[5].selected;
            nodes[9].selected = false;
            nodes[10].selected = included[6].selected;
            nodes[11].selected = false;
            resetPitch();
            radioChange();
        }
        else {
            resetPitch();
            checked = 0;
        }
        nodes[0].include = true;
        nodes[1].include = false;
        nodes[2].include = true;
        nodes[3].include = true;
        nodes[4].include = false;
        nodes[5].include = true;
        nodes[6].include = false;
        nodes[7].include = true;
        nodes[8].include = true;
        nodes[9].include = false;
        nodes[10].include = true;
        nodes[11].include = false;
        valid = true;
    }
    else if (value == "locrian") {
        checked = 0;
        if (included.length == 7) {
            nodes[0].selected = included[0].selected;
            nodes[1].selected = included[1].selected;
            nodes[2].selected = false;
            nodes[3].selected = included[2].selected;
            nodes[4].selected = false;
            nodes[5].selected = included[3].selected;
            nodes[6].selected = included[4].selected;
            nodes[7].selected = false;
            nodes[8].selected = included[5].selected;
            nodes[9].selected = false;
            nodes[10].selected = included[6].selected;
            nodes[11].selected = false;
            resetPitch();
            radioChange();
        }
        else {
            resetPitch();
            checked = 0;
        }
        nodes[0].include = true;
        nodes[1].include = true;
        nodes[2].include = false;
        nodes[3].include = true;
        nodes[4].include = false;
        nodes[5].include = true;
        nodes[6].include = true;
        nodes[7].include = false;
        nodes[8].include = true;
        nodes[9].include = false;
        nodes[10].include = true;
        nodes[11].include = false;
        valid = true;
    }
    else if (value == "custom") {
        state = "define";
        document.getElementById("edit").innerHTML = 'OK';
        for (i = 0; i < nodes.length; i++) {
            nodes[i].include = false;
            nodes[i].selected = false;
        }
        checked = 0;
        resetPitch();
        radioChange();
        valid = true;
    }
}

var optionCounter = 0;
edit.onclick = function () {
    if (state == "define") {
        document.getElementById("edit").innerHTML = 'Edit';
        state = "select";
    }
    else {
        state = "define";
        document.getElementById("edit").innerHTML = 'OK';
    }
}

function resetPitch() {
    var value = parseInt(key.options[key.selectedIndex].value);
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].audio = audio[i + value];
    }
}

function keyChange() {
    var value = parseInt(key.options[key.selectedIndex].value);
    labels[0] = "C";
    labels[1] = "C♯";
    labels[2] = "D";
    labels[3] = "D♯";
    labels[4] = "E";
    labels[5] = "F";
    labels[6] = "F♯";
    labels[7] = "G";
    labels[8] = "G♯";
    labels[9] = "A";
    labels[10] = "A♯";
    labels[11] = "B";
    var temp = [];
    for (var i = 0; i < labels.length; i++) {
        temp[i] = labels[(i + value) % 12];
    }
    for (var i = 0; i < temp.length; i++) {
        labels[i] = temp[i];
    }
}

key.onchange = function () {
    resetPitch();
    radioChange();
    keyChange();
    valid = true;
}

var radios = document.getElementsByName('inversion');

play.onclick = function () {
    valid = true;
}

save.onclick = function () {
    doNotPlay = true;
    var c2 = document.createElement("CANVAS");
    c2.id = "canvas" + counter;

    var square = document.getElementById("leftBarInner").clientWidth - 1;
    if (square < 300) {
        square *= 2;
        if (square > 400) {
            square = 400;
        }
    }
    c2.height = square / 2;
    c2.width = square / 2;
    var size = c2.height;

    var ctx = c2.getContext("2d");
    ctx.clearRect(0, 0, c.height, c.height);

    //draw interface

    ctx.fillStyle = "#000";
    ctx.font = size / 11.5 + "px Arial";

    for (i = 0; i < nodes.length; i++) {
        var ang = 2 * Math.PI / nodes.length * i - Math.PI / 2;
        nodes[i].x = Math.cos(ang) * (size * 0.6 / 2) + (size / 2);
        nodes[i].y = Math.sin(ang) * (size * 0.6 / 2) + (size / 2);
    }

    for (i = 0; i < nodes.length; i++) {
        var ang = 2 * Math.PI / nodes.length * i - Math.PI / 2;
        var x = Math.cos(ang) * (size * 0.8 / 2) + (size / 2);
        var y = Math.sin(ang) * (size * 0.8 / 2) + (size / 2);
        var ctx = c2.getContext("2d");
        if (!nodes[i].include) {
            ctx.fillStyle = "#fff";
        }
        else {
            ctx.fillStyle = "#000";
        }
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(labels[i], x, y);
    }


    //draw lines

    for (i = 0; i < graph.length; i++) {
        for (j = 0; j < graph.length; j++) {
            if (graph[i][j] == 1) {
                var ctx = c2.getContext("2d");
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();
            }
        }
    }

    //draw nodes in array
    for (i = 0; i < nodes.length; i++) {
        var ctx = c2.getContext("2d");
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, size / 80, 0, 2 * Math.PI);
        if (nodes[i].selected) {
            ctx.fillStyle = "#f00";
        }
        else if (nodes[i].include) {
            ctx.fillStyle = "#000";
        }

        else {
            ctx.fillStyle = "#fff";
        }
        ctx.fill();
    }

    document.getElementById("leftBarInner").appendChild(c2);
    var savedScale = scale.options[scale.selectedIndex].value;
    var savedKey = parseInt(key.options[key.selectedIndex].value);
    if (radios.length = 0) {
        checked = 0;
    }
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checked = i;
        }
    }
    var savedInversion = checked;
    var savedNodes = [];
    for (var i = 0; i < nodes.length; i++) {
        var newNode = new Node();
        newNode.x = nodes[i].x;
        newNode.y = nodes[i].y;
        newNode.selected = nodes[i].selected;
        newNode.include = nodes[i].include;
        newNode.audio = nodes[i].audio;
        savedNodes.push(newNode);
    }

    document.getElementById("canvas" + counter).onclick = function () {
        nodes = [];
        for (var i = 0; i < savedNodes.length; i++) {
            var newNode = new Node();
            newNode.x = savedNodes[i].x;
            newNode.y = savedNodes[i].y;
            newNode.selected = savedNodes[i].selected;
            newNode.include = savedNodes[i].include;
            newNode.audio = savedNodes[i].audio;
            nodes.push(newNode);
        }
        // if (!radios.length == 0) {
        //     radios[savedInversion].checked = true;
        // }
        scale.value = savedScale;
        key.value = savedKey;
        keyChange();
        checked = savedInversion;
        var base = parseInt(key.options[key.selectedIndex].value);
        for (var i = 0; i < radios.length; i++) {
            if (i == checked) {
                checked = i;
                for (var j = 0; j < nodes.length; j++) {
                    nodes[j].audio = audio[(j + base)];
                }
                var j = 0;
                var flag = false;
                for (var k = 0; k < nodes.length; k++) {
                    if (j < i) {
                        if (nodes[k].selected) {
                            nodes[k].audio = audio[(k + 12 + base)];
                            if (k + base > 11) {
                                flag = true;
                            }
                            j++;
                        }
                    }
                }
                if (flag) {
                    for (var j = 0; j < nodes.length; j++) {
                        if (nodes[j].selected) {
                            nodes[j].audio = audio[(j + base - 12)];
                        }
                    }
                    var j = 0;
                    for (var k = 0; k < nodes.length; k++) {
                        if (j < i) {
                            if (nodes[k].selected) {
                                nodes[k].audio = audio[(k + base)];
                                j++;
                            }
                        }
                    }
                }
            }
        }
        valid = true;
    }
    counter++;
    valid = true;
}

function radioChange() {
    var base = parseInt(key.options[key.selectedIndex].value);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checked = i;
            for (var j = 0; j < nodes.length; j++) {
                nodes[j].audio = audio[(j + base)];
            }
            var j = 0;
            var flag = false;
            for (var k = 0; k < nodes.length; k++) {
                if (j < i) {
                    if (nodes[k].selected) {
                        nodes[k].audio = audio[(k + 12 + base)];
                        if (k + base > 11) {
                            flag = true;
                        }
                        j++;
                    }
                }
            }
            if (flag) {
                for (var j = 0; j < nodes.length; j++) {
                    if (nodes[j].selected) {
                        nodes[j].audio = audio[(j + base - 12)];
                    }
                }
                var j = 0;
                for (var k = 0; k < nodes.length; k++) {
                    if (j < i) {
                        if (nodes[k].selected) {
                            nodes[k].audio = audio[(k + base)];
                            j++;
                        }
                    }
                }
            }
        }
    }
    valid = true;
}

var left = document.getElementById("left");

left.onclick = function () {
    var temp = [];
    var j = 0;
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].include) {
            temp[j] = nodes[i].selected;
            j++;
        }
    }
    var k = 0;
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].include) {
            nodes[i].selected = temp[(((k + 1) % j + j) % j)];
            k++;
        }
    }
    resetPitch();
    radioChange();
    valid = true;
}

var right = document.getElementById("right");

right.onclick = function () {
    var temp = [];
    var j = 0;
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].include) {
            temp[j] = nodes[i].selected;
            j++;
        }
    }
    var k = 0;
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].include) {
            nodes[i].selected = temp[(((k - 1) % j + j) % j)];
            k++;
        }
    }
    resetPitch();
    radioChange();
    valid = true;
}

var c = document.getElementById("myCanvas");

var height = window.innerHeight;
var width = window.innerWidth;
c.height = height;
c.width = height;
var left = width / 2 - height / 2;
var sidebarWidth = (width - height) / 2;
var margin = height/6;
document.getElementById('myCanvas').setAttribute('style', 'left:' + left + 'px;');

document.getElementById('leftBarInner').setAttribute('style', 'height:' + height + 'px;width:' + sidebarWidth + 'px;');
document.getElementById('rightBar').setAttribute('style', 'height:' + height + 'px;width:' + sidebarWidth + 'px;');

var nodes = [];

var graph = [];

var included = [];

var selected = [];

var audio = [];

var size = 12;

var state = "select";

var valid = true;

var labels = [];

var checked = 0;

var counter = 0;

var savedNodes = [];

var doNotPlay = false;

var btn = document.createElement("BUTTON");

function Node(x, y) {
    this.x = x;
    this.y = y;
    this.selected = false;
    this.include = true;
    this.audio;
}

function init() {

    for (var i = 0; i < size; i++) {
        nodes[i] = new Node();
    }

    for (var i = 0; i < size; i++) {
        graph[i] = [];
    }

    for (var i = 0; i < nodes.length; i++) {
        for (j = 0; j < nodes.length; j++) {
            graph[i][j] = 0;
        }
    }

    for (var i = 0; i < 24; i++) {
        var myAudio = new Audio(i + ".mp3");
        audio[i] = myAudio;
    }

    for (var i = 0; i < nodes.length; i++) {
        nodes[i].audio = audio[i];
    }

    labels[0] = "C";
    labels[1] = "C♯";
    labels[2] = "D";
    labels[3] = "D♯";
    labels[4] = "E";
    labels[5] = "F";
    labels[6] = "F♯";
    labels[7] = "G";
    labels[8] = "G♯";
    labels[9] = "A";
    labels[10] = "A♯";
    labels[11] = "B";

    //add lines to array
    // graph[0][2] = 1;
    // graph[2][3] = 1;
    // graph[0][3] = 1;
    // graph[1][4] = 1;
    // graph[1][3] = 1;

    var s = new CanvasState();
}

function CanvasState() {
    c.addEventListener('mousedown', function (e) {
        var mx = e.x - c.offsetLeft;
        var my = e.y - c.offsetTop;
        if (state === "select") {
            var value = parseInt(key.options[key.selectedIndex].value);
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].audio = audio[i + value];
            }
            for (i = 0; i < nodes.length; i++) {
                for (j = 0; j < nodes.length; j++) {
                    graph[i][j] = 0;
                }
            }

            for (var i = 0; i < nodes.length; i++) {
                if (mx > nodes[i].x - 50 && mx < nodes[i].x + 50 && my > nodes[i].y - 50 && my < nodes[i].y + 50 && nodes[i].include) {
                    nodes[i].selected = !nodes[i].selected;
                    checked = 0;
                    valid = true;
                }
            }

            // for (var i = 0; i < nodes.length; i++) {
            //     nodes[i].selected = false;
            //     valid = true;
            // }
        }
        else if (state === "define") {

            for (var i = 0; i < nodes.length; i++) {
                if (mx > nodes[i].x - 50 && mx < nodes[i].x + 50 && my > nodes[i].y - 50 && my < nodes[i].y + 50) {
                    nodes[i].include = !nodes[i].include;
                    if (nodes[i].include) {
                        nodes[i].audio.currentTime = 0;
                        nodes[i].audio.play();
                    }
                    checked = 0;
                    doNotPlay = true;
                    valid = true;
                    // if (nodes[i].selected == true) {
                    //     audio[i].currentTime = 0;
                    //     audio[i].play();
                    // }
                    // return;
                }
            }

            // for (var i = 0; i < nodes.length; i++) {
            //     nodes[i].selected = false;
            //     valid = true;
            // }
        }
    });
    setInterval(function () { draw(); }, 30);
}

function draw() {
    if (valid) {

        for (var i = 0; i < nodes.length; i++) {
            if (!nodes[i].include) {
                nodes[i].selected = false;
            }
        }

        selected = [];

        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].selected) {
                var newNode = new Node();
                newNode.x = nodes[i].x;
                newNode.y = nodes[i].y;
                newNode.selected = nodes[i].selected;
                newNode.include = nodes[i].include;
                newNode.audio = nodes[i].audio;
                selected.push(newNode);
            }
        }

        included = [];

        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].include) {
                var newNode = new Node();
                newNode.x = nodes[i].x;
                newNode.y = nodes[i].y;
                newNode.selected = nodes[i].selected;
                newNode.include = nodes[i].include;
                newNode.audio = nodes[i].audio;
                included.push(newNode);
            }
        }

        for (var i = 0; i < nodes.length; i++) {
            for (var j = 0; j < nodes.length; j++) {
                graph[i][j] = 0;
            }
        }
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].selected & nodes[i].include) {
                for (var j = 0; j < nodes.length; j++) {
                    if (nodes[j].selected & nodes[j].include) {
                        graph[i][j] = 1;
                    }
                }
            }
        }

        if (!doNotPlay) {
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].selected) {
                    nodes[i].audio.currentTime = 0;
                    nodes[i].audio.play();
                }
            }
        }
        doNotPlay = false;

        var inversion = document.getElementById("inversion");
        while (inversion.firstChild) {
            inversion.removeChild(inversion.firstChild);
        }
        if (selected.length > 1) {
            var content = document.createTextNode("Inversion:");
            inversion.appendChild(content);
            var br = document.createElement('br');
            inversion.appendChild(br);
            var j = 0;
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].selected) {
                    var radios = document.createElement("INPUT");
                    radios.setAttribute("type", "radio");
                    radios.setAttribute("name", "inversion");
                    radios.setAttribute("value", j);
                    radios.setAttribute("onchange", "radioChange()");
                    if (j == checked) {
                        radios.setAttribute("checked", "checked");
                    }
                    var label = document.createElement('label');
                    label.appendChild(radios);
                    var content = document.createTextNode(j);
                    label.appendChild(content);
                    label.setAttribute("for", j);
                    label.style.display = "inline-block";
                    inversion.appendChild(label);
                    j++;
                }
            }
            var br1 = document.createElement('br');
            var br2 = document.createElement('br');
            inversion.appendChild(br1);
            inversion.appendChild(br2);
        }

        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.height, c.height);

        //add nodes to array
        for (i = 0; i < nodes.length; i++) {
            var ang = 2 * Math.PI / nodes.length * i - Math.PI / 2;
            nodes[i].x = Math.cos(ang) * (height * 0.75) / 2 + height / 2;
            nodes[i].y = Math.sin(ang) * (height * 0.75) / 2 + height / 2;
        }

        //draw interface

        ctx.fillStyle = "#000";
        ctx.font = height / 25 + "px Arial";

        for (i = 0; i < nodes.length; i++) {
            var ang = 2 * Math.PI / nodes.length * i - Math.PI / 2;
            var x = Math.cos(ang) * (height * 0.875) / 2 + height / 2;
            var y = Math.sin(ang) * (height * 0.875) / 2 + height / 2;
            var ctx = c.getContext("2d");
            if (!nodes[i].include) {
                ctx.fillStyle = "#eee";
            }
            else {
                ctx.fillStyle = "#000";
            }
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(labels[i], x, y);
        }

        //draw lines

        for (i = 0; i < graph.length; i++) {
            for (j = 0; j < graph.length; j++) {
                if (graph[i][j] == 1) {
                    var ctx = c.getContext("2d");
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }

        //draw nodes in array
        for (i = 0; i < nodes.length; i++) {
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.arc(nodes[i].x, nodes[i].y, height / 150, 0, 2 * Math.PI);
            if (nodes[i].selected) {
                ctx.fillStyle = "#f00";
            }
            else if (nodes[i].include) {
                ctx.fillStyle = "#000";
            }

            else {
                ctx.fillStyle = "#eee";
            }
            ctx.fill();
        }
        valid = false;
    }
}
init();