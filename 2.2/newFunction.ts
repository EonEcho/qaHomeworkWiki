export function myFunction(myNum: number): string {
    if (myNum == 5) {
        return 'true';
    } else if(myNum > 5 && myNum >=0) {
        return 'false';
    }else if (myNum < 5) {
        return 'To Big';
    }else{
        return "negative"
    }
    }
}
// big and negative for the one above
/* 
EN: Add your own function starting on line 20 
!Write a function that returns a movie when the user inputs movieOne - movieFive
!The movies are up to you use the 'writeIfElseStatment' example from class for help 
!Add expects to the test checking to make sure you are getting back the correct movie.
*/

function blockbuster(movie: string): string {
    if (movie == "MovieOne") {
      return "MovieOne";
    }if else (movie == "Movie Two") {
      return "Movie Two";
    }if else (movie == "Movie Three") {
      return "Movie Three";
    }if else (movie == "Movie Four") {
      return "Movie Four"
    }if else (movie == "Movie Five") {
      return "Movie Five";
    }else {
      return `We do not have that ${movie}`
    }
  }
export function blockBuster() {

}