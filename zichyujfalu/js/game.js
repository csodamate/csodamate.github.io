let list = [["--------------------------?", "----", "----", "----", "----", "d"],
["--------------------------?", "----", "----", "----", "----", "d"],
["--------------------------?", "----", "----", "----", "----", "d"],
["--------------------------?", "----", "----", "----", "----", "d"],
["--------------------------?", "----", "----", "----", "----", "d"],
["--------------------------?", "----", "----", "----", "----", "d"],
["--------------------------?", "----", "----", "----", "----", "d"]
];

let abcd = ["a","b","c","d"]

let num = 0;
score = 0;
number = Math.round(Math.random()*(list.length-1));

document.getElementById("text").innerHTML = list[number][0]
document.getElementById("a").innerHTML = list[number][1]
document.getElementById("b").innerHTML = list[number][2]
document.getElementById("c").innerHTML = list[number][3]
document.getElementById("d").innerHTML = list[number][4]


function restart(){

        list = [["--------------------------?", "----", "----", "----", "----", "d"],
        ["--------------------------?", "----", "----", "----", "----", "d"],
        ["--------------------------?", "----", "----", "----", "----", "d"],
        ["--------------------------?", "----", "----", "----", "----", "d"],
        ["--------------------------?", "----", "----", "----", "----", "d"],
        ["--------------------------?", "----", "----", "----", "----", "d"],
        ["--------------------------?", "----", "----", "----", "----", "d"]
        ];

    let abcd = ["a","b","c","d"]

    num = 0;
    score = 0;
    number = Math.round(Math.random()*(list.length-1));
    
    document.getElementsByClassName("end")[0].style.display = "none";

    document.getElementById("text").innerHTML = list[number][0]
    document.getElementById("a").innerHTML = list[number][1]
    document.getElementById("b").innerHTML = list[number][2]
    document.getElementById("c").innerHTML = list[number][3]
    document.getElementById("d").innerHTML = list[number][4]
    
    
   
    document.body.style.pointerEvents = "all";
}


function answer(data){
    
    document.body.style.pointerEvents = "none";

    let i =  abcd.indexOf(list[number][5])
    abcd.splice(i, 1)

    good = list[number][5];


    if(data == list[number][5]){

        score ++;
        document.getElementsByClassName(list[number][5])[0].style.border = "green solid 3px";

        document.getElementsByClassName(abcd[0])[0].style.visibility = "hidden";
        document.getElementsByClassName(abcd[1])[0].style.visibility = "hidden";
        document.getElementsByClassName(abcd[2])[0].style.visibility = "hidden";

    }
    else{
        let i =  abcd.indexOf(data)
        abcd.splice(i, 1)
        document.getElementsByClassName(list[number][5])[0].style.border = "green solid 3px";
        document.getElementsByClassName(data)[0].style.border = "red solid 3px";
        document.getElementsByClassName(abcd[0])[0].style.visibility = "hidden";
        document.getElementsByClassName(abcd[1])[0].style.visibility = "hidden";

    }

    num ++;
    if (num == 5) {
        setTimeout(function(){
            document.getElementsByClassName("end")[0].style.display = "flex";
        }, 2000)
        
        document.getElementById("score").innerHTML = "5 / "+score; 
    }


    let j =  list.indexOf(list[number])
    list.splice(j, 1)

    abcd = ["a","b","c","d"]

    setTimeout( function () {
        random(data, good)
    }, 2000)
}

function random(data, good){

    document.getElementsByClassName(data)[0].style.border = "none";
    document.getElementsByClassName(good)[0].style.border = "none";

    number = Math.round(Math.random()*(list.length-1));

    document.getElementById("text").innerHTML = list[number][0]
    document.getElementById("a").innerHTML = list[number][1]
    document.getElementById("b").innerHTML = list[number][2]
    document.getElementById("c").innerHTML = list[number][3]
    document.getElementById("d").innerHTML = list[number][4]

    document.getElementsByClassName("a")[0].style.visibility = "visible";
    document.getElementsByClassName("b")[0].style.visibility = "visible";
    document.getElementsByClassName("c")[0].style.visibility = "visible";
    document.getElementsByClassName("d")[0].style.visibility = "visible";

    document.body.style.pointerEvents = "all";

}






