/*
A theater employee wants to display every seat in the main room.
In said room, seats are arranged like this:
- There are 26 columns of seats, labelled from "1" to "26"
- Every column contains 100 seats, labelled from "1" to "100"
Your final list should like this:
  1-1
  1-2
  1-3
  .
  .
  .
  26-98
  26-99
  26-100
*/

function theaterSieges() {
    // Your code here !

    const seatsArray = []
    for (seat = 1;seat<27;seat++) {
        for (column = 1; column<101; column++) {
            //seatsArray.push(`Column: ${column} - Seat: ${seat}`)
            seatsArray.push(`${seat} - ${column}`)
        }
    }
    return seatsArray
}
  
  console.log(theaterSieges());