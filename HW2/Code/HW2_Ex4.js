function unpackSausages (track){
    let unpackedBoxes = [];

    for (const box of track){
        unpackedBoxes.push(...box);
    }

    const sausageFilter = function (goods){
        function notDamaged (good){
            let check = true;

            for (let i = 2; i <= 4; i++){
                check = check && good[i] === good[1];
            }
            return check;
        }
        function areBreakets (good) {
            return good[0] === '[' && good[5] === ']';
        }
        return goods.length === 6 && notDamaged(goods) && areBreakets(goods);
    }

    let sausages = unpackedBoxes.filter(sausageFilter);

    for (let j = 4; j < sausages.length; j += 4){
        sausages.splice(j, 1);
    }

    sasuages = sausages.join("").replaceAll("]", "").replaceAll("[", "");
    return sasuages.split("").join(" ")
}

track =[["(-)", "[IIII]", "[))))]"], ["IuI", "[llll]"], ["[@@@@]", "UwU", "[IlII]"], ["IuI", "[))))]", "x", ], []];
console.log(unpackSausages(track));