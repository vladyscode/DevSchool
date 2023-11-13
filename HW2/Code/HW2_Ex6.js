function numOfNeighbour(mat, i, j, rows, cols)
{
    let count = 0;

    if (i > 0  && mat[i - 1][j]==='X')
        count++;

    if (j > 0  && mat[i][j - 1]==='X')
        count++;

    if (i < rows-1  && mat[i + 1][j]==='X')
        count++;

    if (j < cols-1 && mat[i][j + 1]==='X')
        count++;

    return count;
}

function landPerimeter(map)
{
    let perimeter = 0;
    let rows = map.length;
    let cols = map[0].length;

    for (let i = 0; i < rows; i++)
        for (let j = 0; j < cols; j++)
            if (map[i][j] === 'X')
                perimeter += (4 - numOfNeighbour(map, i , j, rows, cols));

    return "Total land perimeter: " + perimeter;
}

const map = ['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO']