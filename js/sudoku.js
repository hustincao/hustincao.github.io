$(document).ready(draw_9x9)
        document.getElementById("getGrid").addEventListener("click", get_9x9)
        document.getElementById("clearGrid").addEventListener("click",clearGrid)
        
        var x = new Array(9)
        for(var i = 0; i < 9; i++)
            x[i] = new Array(9)
        function clearGrid()
        {
            for(var i = 0; i < 9; i++)
            {
                for(var j = 0; j < 9; j++)
                {
                    document.getElementById('C'+(i*9+j)).value = ""
                }
            }
        }
        function draw_9x9() { // generate the grid and fill it (called "onLoad")
            // generate the grid
            var s = '<table class="table">\n'
            for (var i = 0; i < 9; ++i) {
                s += '<tr>'
                for (var j = 0; j < 9; ++j) {
                    var c = 'cell'
                    if ((i+1)%3 == 0 && j%3 == 0) c = 'cell3'
                    else if ((i+1)%3 == 0) c = 'cell1'
                    else if (j%3 == 0) c = 'cell2'
                    s += '<td class="' + c + '"><input class="input" type="text" size="1" maxlength="1" id="C' + (i*9+j) + '"></td>';
                }
                s += '</tr>\n'
            }
            s += '</table>'
            document.getElementById('9x9').innerHTML = s
        }

        function get_9x9()
        {
            for(var i = 0; i < 9; i++)
            {
                for(var j = 0; j < 9; j++)
                {
                    if($.isNumeric(document.getElementById('C'+(i*9+j)).value))
                    {
                        x[i][j] = parseInt(document.getElementById('C'+(i*9+j)).value)
                    }
                    else
                    {
                        x[i][j] = 0;
                    }
                }
            }
            var t1 = new Date().getTime()
            solve()
            var t2 = (new Date().getTime())
            console.log(t2-t1)
            console.log(x)
            for(var i = 0; i < 9; i++)
            {
                for(var j = 0; j < 9; j++)
                {
                    document.getElementById('C'+(i*9+j)).value = x[i][j]
                }
            }
            console.log('finished')
        }

        function solve()
        {
            if(!findEmpty())
            {
                return true
            }
            for(var i = 0; i < 9; i++)
            {
                for(var j = 0; j < 9; j++)
                {
                   
                    if(x[i][j] == 0)
                    {
                        for(var k = 1; k<=9;k++)
                        {
                            x[i][j] = k
                            if(valid_board())
                            {
                                if(solve())
                                {
                                    return true
                                }
                            }
                        }
                        x[i][j] = 0
                        return false
                    }
                }
            }
            return false
        }
        function findEmpty()
        {
            for(var i = 0; i < 9; i++)
            {
                for(var j = 0; j < 9; j++)
                {
                    if(x[i][j] == 0)
                        return true
                }
            }
            return false
        }
        function valid_board()
        {
            if(valid_lines() && valid_squares())
            {
                return true
            }
            return false
        }
        function valid_set(set)
        {
            for(var i = 0; i < 8; i++)
            {
                for(var j = i+1; j < 9; j++)
                {
                    if(set[i]!=0  && set[j] !=0)
                    {
                        if(set[i] == set[j])
                        {
                            return false
                        }
                    }
                }
            }
            return true
        }
        function valid_lines()
        {
            var line1 = new Array(9)
            var line2 = new Array(9)
            for(var i = 0; i < 9; i++)
            {
                for(var j = 0; j < 9; j++)
                {
                    line1[j] = x[i][j]
                    line2[j] = x[j][i]
                }
                if(valid_set(line1)==false || valid_set(line2)==false)
                {
                    return false
                }
            }
            return true
        }
        function valid_squares()
        {
            var line = new Array(9)
            for(var k = 0; k < 3;k++)
            {
                for(var l = 0; l < 3; l++)
                {
                    var count = 0;
                    for(var i = 3*l; i < 3*(l+1); i++)
                    {
                        for(var j = 3*k; j < 3*(k+1); j++)
                        {
                            line[count++] = x[i][j]
                        }
                    }
                    if(!valid_set(line))
                    {
                        return false
                    }
                }
            }
            return true
        }