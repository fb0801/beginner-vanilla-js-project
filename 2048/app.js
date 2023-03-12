document.addEventListener("DOMContentLoaded" ,() => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const resultDisplay = document.getElementById('result')
    let squares = []
    const width = 4

    //create a board
    function createBoard (){
        for (let i = 0; i < width* width; i++){
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
    }
        createBoard()

        //generate ran number

        function generate (){
            let randomNumber = math.floor(Math.random() * squares.length)
            if (squares[randomNumber].innerHTML ==0) {
                squares[randomNumber].innerHTML == 2

            }else generate()
        }

        //swipe rght
        function moveRight () {
            for (let i=0; i < 16; i++) {
                if (i %4 ===0) {
                    let totalOne = squares[i].innerHTML
                    let totalTwo = squares[i+1].innerHTML
                    let totalThree = squares[i+2].innerHTML
                    let totalFour = squares[i+3].innerHTML
                    let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]


                    let filteredRow = row.filter(num => num)
                    let missing = 4 - filteredRow.length
                    let zeros = Array(missing).fill(0)
                    let newRow = zeros.concat(filteredRow)

                    squares[i].innerHTML = newRow[0]
                    squares[i+1].innerHTML = newRow[1]
                    squares[i+2].innerHTML = newRow[2]
                    squares[i+3].innerHTML = newRow[3]

                }
            }
        }

        //mve left
        function moveLeft () {
            for (let i=0; i < 16; i++) {
                if (i %4 ===0) {
                    let totalOne = squares[i].innerHTML
                    let totalTwo = squares[i+1].innerHTML
                    let totalThree = squares[i+2].innerHTML
                    let totalFour = squares[i+3].innerHTML
                    let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]


                    let filteredRow = row.filter(num => num)
                    let missing = 4 - filteredRow.length
                    let zeros = Array(missing).fill(0)
                    let newRow = filteredRow.concat(zeros)

                    squares[i].innerHTML = newRow[0]
                    squares[i+1].innerHTML = newRow[1]
                    squares[i+2].innerHTML = newRow[2]
                    squares[i+3].innerHTML = newRow[3]

                }
            }
        }


//swipe dwn
 function moveDown(){
    for( let i =0; i <4; i++){
        let totalOne = squares[i].innerHTML
        let totalTwo = squares[i+width].innerHTML
        let totalThree = squares[i+(width*2)].innerHTML
        let totalFour = squares[i+(width*3)].innerHTML
        let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

        let filteredColumn = column.filter(num => num)
        let missing = 4 - filteredColumn.length
        let zeros = Array(missing).fill(0)
        let newColumn = zeros.concat(filteredColumn)

        squares[i].innerHTML = newColumn[0]
        squares[i+width].innerHTML = newColumn[1]
        squares[i+(width*2)].innerHTML = newColumn[2]
        squares[i+(width*3)].innerHTML = newColumn[3]

    }
 }
    
//swipe up
 function moveUp(){
    for( let i =0; i <4; i++){
        let totalOne = squares[i].innerHTML
        let totalTwo = squares[i+width].innerHTML
        let totalThree = squares[i+(width*2)].innerHTML
        let totalFour = squares[i+(width*3)].innerHTML
        let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

        let filteredColumn = column.filter(num => num)
        let missing = 4 - filteredColumn.length
        let zeros = Array(missing).fill(0)
        let newColumn = filteredColumn.concat(zeros)

        squares[i].innerHTML = newColumn[0]
        squares[i+width].innerHTML = newColumn[1]
        squares[i+(width*2)].innerHTML = newColumn[2]
        squares[i+(width*3)].innerHTML = newColumn[3]

    }
 }

      function combinedRow(){
        for (let i =0; i<15 ; i++){
            if (squares[i].innerHTML ===squares[i+1].innerHTML){
                let combinedTotal =parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i].innerHTML = 0 
            }
        }
      }


      function combinedColumn(){
        for (let i =0; i<12 ; i++){
            if (squares[i].innerHTML ===squares[i+1].innerHTML){
                let combinedTotal =parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i].innerHTML = 0 
            }
        }
      }

      //keycodes

      function control(e){
        if (e.keycode === 39) {
            keyRight()
        }else if (e.keycode ===37) {
            keyLeft()
        }
      }
      document.addEventListener('keyup', control)

      function keyRight(){
        moveRight()
        combinedRow()
        moveRight()
        generate()
      }


      function keyLeft(){
        moveLeft()
        combinedRow()
        moveLeft()
        generate()
      }

})