
const chessBoard = document.createElement('div');
chessBoard.className = '.chess-board';
chessBoard.style.display = "grid"
chessBoard.style.gridTemplateColumns = "repeat( 8,1fr)"


        for (let i = 0; i < 8; i++){
        	const row = document.createElement('div');
        	for (let j = 0; j < 8; j++) {
        		var cell = document.createElement('div');
            cell.style.width = '80px'
            cell.style.height = '80px'
        		if ((i + j) % 2 == 0) {
               cell.style.backgroundColor = 'black'
        			row.appendChild(cell);
        		}
        		else {
               cell.style.backgroundColor = 'white'
        			row.appendChild(cell);
        		}
        	}
        	chessBoard.appendChild(row);
      } 
        document.body.appendChild(chessBoard);