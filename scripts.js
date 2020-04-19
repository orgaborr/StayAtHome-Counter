let number = 0;

$('#increment').click(() => {
    number++;
    $('#counter').text(number);
})

$('#decrement').click(() => {
    number--;
    $('#counter').text(number);
})