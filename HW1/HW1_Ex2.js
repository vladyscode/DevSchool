function towersOfHanoi(disks, sourceRod, auxiliaryRod, finalRod) {
    if (disks === 1) {
        console.log(`Move disk 1 from rod ${sourceRod} to rod ${finalRod}`);
        return 1;
    }

    const move1 = towersOfHanoi(disks - 1, sourceRod, finalRod, auxiliaryRod);
    console.log(`Move disk ${disks} from rod ${sourceRod} to rod ${finalRod}`);
    const move2 = towersOfHanoi(disks - 1, auxiliaryRod, sourceRod, finalRod);

    return move1 + 1 + move2;
}

const numDisks = 3; // pass the number here
const sourceRod = 'A';
const auxiliaryRod = 'B';
const finalRod = 'C';

const totalMoves = towersOfHanoi(numDisks, sourceRod, auxiliaryRod, finalRod);
console.log(`Total moves needed to solve Towers of Hanoi with ${numDisks} disks: ${totalMoves}`);