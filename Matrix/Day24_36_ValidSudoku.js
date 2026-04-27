// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
 
// Example 1:

// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
 */


// var isValidSudoku = function(board) {
//     let boxFlag = true;
//     let rowFlag = true;
//     let colFlag = true;

//     let boxBoard = {0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]}

//     for (let i = 0; i<board.length; i++){
//         for (let j = 0; j<board[i].length; j++){
//             if ((i<3)&&(j<3)){
//                 if (board[i][j]==".") continue
//                 boxBoard[0].push(parseInt(board[i][j]))
//             }else if ((i<3)&&(j>=3 && j<6)){
//                 if (board[i][j]==".") continue
//                 boxBoard[1].push(parseInt(board[i][j]))
//             }else if ((i<3)&&(j>=6 && j<9)){
//                 if (board[i][j]==".") continue
//                 boxBoard[2].push(parseInt(board[i][j]))
//             }else if ((i>=3 && i<6)&&(j<3)){
//                 if (board[i][j]==".") continue
//                 boxBoard[3].push(parseInt(board[i][j]))
//             }else if ((i>=3 && i<6)&&(j>=3 && j<6)){
//                 if (board[i][j]==".") continue
//                 boxBoard[4].push(parseInt(board[i][j]))
//             }else if ((i>=3 && i<6)&&(j>=6 && j<9)){
//                 if (board[i][j]==".") continue
//                 boxBoard[5].push(parseInt(board[i][j]))
//             }else if ((i>=6 && i<9)&&(j<3)){
//                 if (board[i][j]==".") continue
//                 boxBoard[6].push(parseInt(board[i][j]))
//             }else if ((i>=6 && i<9)&&(j>=3 && j<6)){
//                 if (board[i][j]==".") continue
//                 boxBoard[7].push(parseInt(board[i][j]))
//             }else if ((i>=6 && i<9)&&(j>=6 && j<9)){
//                 if (board[i][j]==".") continue
//                 boxBoard[8].push(parseInt(board[i][j]))
//             }
//         }
//     }

//     for (let k in boxBoard){
//         boxBoard[k] = boxBoard[k].sort((a,b)=>a-b);
//         for (let l=0;l<boxBoard[k].length;l++){
//             if ((boxBoard[k][l]==boxBoard[k][l+1]) && (l+1!==boxBoard[k].length)){
//                 boxFlag = false;
//             }
//         }
//     }


//     let rowBoard = {0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]}

//     for (let i = 0; i< board.length;i++){
//         for (let j = 0;j< board[i].length;j++){
//             if (board[i][j]==".") continue;
//             rowBoard[i].push(parseInt(board[i][j]))
//         }
//     }

//     for (let k in rowBoard){
//         rowBoard[k] = rowBoard[k].sort((a,b)=>a-b);
//         for (let l=0;l<rowBoard[k].length;l++){
//             if ((rowBoard[k][l]==rowBoard[k][l+1]) && (l+1!==rowBoard[k].length)){
//                 rowFlag = false;
//             }
//         }
//     }

//     let colBoard = {0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]}

//     for (let i = 0; i< board.length;i++){
//         for (let j = 0;j< board[i].length;j++){
//             if (board[j][i]==".") continue;
//             colBoard[i].push(parseInt(board[j][i]))
//         }
//     }

//     for (let k in colBoard){
//         colBoard[k] = colBoard[k].sort((a,b)=>a-b);
//         for (let l=0;l<colBoard[k].length;l++){
//             if ((colBoard[k][l]==colBoard[k][l+1]) && (l+1!==colBoard[k].length)){
//                 colFlag = false;
//             }
//         }
//     }

//     return boxFlag && rowFlag && colFlag;
// };


// code with less time complexity

var isValidSudoku = function(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];
            if (val === '.') continue;

            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                return false;
            }

            rows[r].add(val);
            cols[c].add(val);
            boxes[boxIndex].add(val);
        }
    }

    return true;
};

console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
]))

console.log(isValidSudoku([
["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
]));