function medium(){
    let physics,chemistry,biology,result;
    physics=parseInt(document.getElementById('a').value);
    chemistry=parseInt(document.getElementById('b').value);
    biology=parseInt(document.getElementById('c').value);
    result=(physics+chemistry+biology)/3;
    document.getElementById('kq').value=result;
}
