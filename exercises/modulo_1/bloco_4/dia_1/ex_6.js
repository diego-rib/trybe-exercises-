let piece = '';
let pieceNoSensitiveCase = piece.toLowerCase();

switch (pieceNoSensitiveCase) {
  case king:
    console.log('king -> one square in any direction');
    break;
   
  case queen:
    console.log('queen -> diagonally, horizontally, or vertically any number of squares');
    break;
   
  case rook:
    console.log('rook -> horizontally or vertically any number of squares');
    break;
   
  case bishop:
    console.log('bishop -> diagonally any number of squares');
    break;
   
  case knight:
    console.log('knight -> in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically');
    break;
   
  case pawn:
    console.log('pawn -> vertically forward one square, with the option to move two squares if they have not yet moved');
    break;
  default:
    console.log('Invalid piece name inserted');
}
