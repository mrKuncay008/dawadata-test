function main() {
    let n = parseInt(prompt("Input the number of families:"));
    if (isNaN(n) || n <= 0) {
        console.log("Invalid input for number of families.");
        return;
    }

    let familyMembers = prompt("Input the number of members in the family (separated by a space):")
                        .split(' ')
                        .map(Number);

    if (familyMembers.length !== n || familyMembers.some(m => m <= 0 || isNaN(m))) {
        console.log("Invalid input for family members.");
        return;
    }

    let totalMembers = familyMembers.reduce((sum, members) => sum + members, 0);
    let busesRequired = Math.ceil(totalMembers / 4);

    console.log(`Minimum bus required is: ${busesRequired}`);
}

main();
