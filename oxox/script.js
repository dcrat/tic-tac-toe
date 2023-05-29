         console.log("Welcome to Tic Tac Toe")    
        let audioTurn = new Audio("ting.mp3")
        var currentPlayer = "X";
        var gameBoard = ["", "", "", "", "", "", "", "", ""];
        var cells = document.getElementsByClassName("cell");
        var message = document.querySelector(".message");
        var resetButton = document.getElementById("reset");

        for (var i = 0; i < cells.length; i++) {
            cells[i].addEventListener("click", handleMove);
        }

        resetButton.addEventListener("click", resetGame);

        function handleMove() {
            var cellIndex = Array.prototype.indexOf.call(cells, this);

            if (gameBoard[cellIndex] === "") {
                gameBoard[cellIndex] = currentPlayer;
                this.textContent = currentPlayer;

                if (checkWin(currentPlayer)) {
                    message.textContent = currentPlayer + " wins! 🥳";
                    disableCells();
                } else if (!gameBoard.includes("")) {
                    message.textContent = "It's a draw!";
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
            audioTurn.play();
        }

        function checkWin(player) {
            var winningCombos = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            for (var i = 0; i < winningCombos.length; i++) {
                var combo = winningCombos[i];
                if (
                    gameBoard[combo[0]] === player &&
                    gameBoard[combo[1]] === player &&
                    gameBoard[combo[2]] === player
                ) {
                    return true;
                }
            }

            return false;
        }

        function disableCells() {
            for (var i = 0; i < cells.length; i++) {
                cells[i].removeEventListener("click", handleMove);
            }
        }

        function resetGame() {
            currentPlayer = "X";
            gameBoard = ["", "", "", "", "", "", "", "", ""];
            message.textContent = "";
            for (var i = 0; i < cells.length; i++) {
                cells[i].textContent = "";
                cells[i].addEventListener("click", handleMove);
            }
        }
