let flyt = [
    ['X', 'X', 'X', 'X', 'O', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'O', 'O', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'O', 'O', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'O', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
];

// Print Matrix
for(var i = 0; i < flyt.length; i++) {
    let line = "";
    
    for(var j = 0; j < flyt[i].length; j++) {
        line += flyt[i][j] + "   ";
    }

    console.log(line);
}
