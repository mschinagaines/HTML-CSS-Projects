// Eloquent Javascript Problem One -- Create a loop to console.log to output an 8-height pyramid

//My solution
for (let hashtag= "#", hashtag = "########"; hashtag += "#") {
    console.log(hashtag);
}

//Given solution
for (let line= "#" line.length < 8; line += "#") {
    console.log(line);
}

