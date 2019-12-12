// function change() {
//     $('div .slide').transition({
//         animation: 'fade right',
//         duration: 500,
//     });
//     $('div .slide').transition({
//         animation: 'fade right',
//         duration: 500,
//     });
// }

// var start = function() {
//     if (counter <= 10) {
//         counter++;
//         change();
//     } else {
//         clearInterval(valid);
//     }
// }

$(document).ready(function() {

    //setInterval(change, 3000);
});

let counter = 0
let flag = 0
var valid = null


function change() {

    let todo_list_node = document.getElementsByClassName("todo-list")[0]
    let todo_list_child = todo_list_node.childNodes
    let list_length = todo_list_child.length
        //console.log(list_length)
    var randomnumber = Array.apply(null, { length: list_length }).map(Number.call, Number)
    $('div .slide').transition({
        animation: 'fade right',
        duration: 500,
        onComplete: function() {
            $('.slide').text(todo_list_child[randomnumber[counter]].getElementsByTagName("label")[0].innerText);
        }
    });
    console.log(todo_list_child[randomnumber[counter]].getElementsByTagName("label")[0].innerText);
    $('div .slide').transition({
        animation: 'fade right',
        duration: 500,
    });
    counter++
    if (counter >= list_length) {
        console.log(counter);
        clearInterval(valid);
        $('.slide').text(null);
        counter = 0
    }
}
var click = 0;
$("#start").click(function() {
    var valid = setInterval(change, 3000);
});


function start() {
    counter = 0;
    valid = setInterval(change, 3000); //do change every 1 sec
}