//list of video games to play for our loop
var videoGames: Array<string> = [
    "Red Dead Redemption 2",
    "Jedi: Fallen order",
    "Jedi: Survivor",
    "Call of Duty",
    "Fortnite",
    "Mario Kart",

];

for (let i = 0; i < videoGames.length; i++) {
    console.log(`Game to Play: ${i + 1}: ${videoGames[i]}`);
}
// (game) is an instructor set variable.
videoGames.forEach(game) => {
    console.log(`You should check out this game to play ${game}`);
});