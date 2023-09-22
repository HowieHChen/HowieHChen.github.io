var Q_DETAILS = new Array(
    "1.我和他/她属于一见钟情型。",
    "2.我很难明确的说我和他/她是何时从友情变成爱情的。",
    "3.对他/她做承诺之前，我会考虑他/她将来可能变成的样子。",
    "4.我总是试着帮他/她渡过难关。",
    "5.和他/她的关系不太对劲时，我的身体就会不舒服。",
    "6.我试着不给他/她明确的承诺。",
    "7.在选择他/她之前，我会试着先仔细规划我的人生。",
    "8.我宁愿自己痛苦，也不愿意让他/她受苦。",
    "9.失恋时，我会十分沮丧，甚至会有自杀的念头。",
    "10.我相信他/她不知道我的一些事，也不会受到伤害。",
    "11.我和他/她经常来电。",
    "12.我需要先经过一阵子的关心与照顾，才有可能产生爱情。",
    "13.我和他/她最好有相似的背景。",
    "14.有时候，我的防范他/她发现我还有其他情人。",
    "15.我和他/她的亲密行为是很热情且很令我满意。",
    "16.我有事会因为想到自己正在谈恋爱而兴奋地睡不着觉。",
    "17.我可以很容易，很快地忘掉过往的恋情。",
    "18.他/她如何看待我的家人是我选择他/她的主要考量。",
    "19.我希望和曾经相爱的他/她是永远的朋友。",
    "20.当他/她不注意我时，我会全身不舒服。",
    "21.我和他/她的爱情关系是最理想因为是由长久的友谊发展而成的。",
    "22.我觉得我和他/她是天生一对。",
    "23.自从和他/她谈恋爱后，我很难专心在其他任何事情上。",
    "24.他/她将来会不会是一个好父亲/母亲是我选择他/她的一个重要因素。",
    "25.除非我先让他/她快乐，否则我不会感到快乐。",
    "26.如果他/她知道我和其他人做了某些事后，他/她会不高兴。",
    "27.我和他/她的感情、亲密行为进展的很快。",
    "28.我和他/她的友情随着时间逐渐转变为爱情。",
    "29.当他/她太依赖我时，我会想和他/她疏远一些。",
    "30.我通常愿意牺牲自己的愿望，达成他/她的愿望。",
    "31.我和他/她的爱情是一种深刻的友情，而不是一种很神秘的情感。",
    "32.他/她可以任意使用我的东西。",
    "33.我和他/她非常了解彼此。",
    "34.当我怀疑他/她和其他人在一起时，我就无法放松。",
    "35.他/她如何看待我的职业会是我选择他/她的一个重要考量。",
    "36.他/她的外貌符合我的理想标准。",
    "37.我享受和他/她及一些不同的情人外爱情游戏。",
    "38.当他/她对我发脾气时，我仍然全心全意、无条件地爱他/她。",
    "39.在和他/她深入交往之前，我会试着了解他/她是否有良好的遗传基因。",
    "40.为了他/她，我愿意忍受任何事情。",
    "41.如果他/她忽略我一阵子，我会做出一些傻事来吸引他/她的注意力。",
    "42.我和他/她的爱情关系是最令人满意，因为是由良好友情发展成的。"
); //题目细节
var Q_NUMBER = Q_DETAILS.length; //题目总数

var A_DETAILS = new Array(
    "最注重的是对方的外表和身体的接触，只要是好看的，就容易跟对方坠入情网。",
    "视爱情为游戏，爱情的关系短暂，经常更换对象，承诺在这种类型的人身上几乎看不到。",
    "感情发展细水长流，平静而祥和，通常刚开始时都只是好朋友的关系，后来才慢慢从相知友谊发展成爱情。",
    "选择对象以理性条件的考虑为主，诸如教育背景、经济能力、社会地位、共同兴趣等。",
    "占有欲和妒忌心强烈，关系也有如风暴，起伏不定，对方一点爱意的表示就会让他狂喜，一点点降温或关系出现点小问题就会痛苦不已。",
    "与占有型相反，这种类型的人为爱人完全付出自己，关心对方而不求回报。这种人极有耐心、不要求对方，甚至不嫉妒。"
)


var qGroup = new Array();//题目分组
qGroup[0] = new Array(1,7,13,19,25,31,37);
qGroup[1] = new Array(2,8,14,20,26,32,38);
qGroup[2] = new Array(3,9,15,21,27,33,39);
qGroup[3] = new Array(4,10,16,22,28,34,40);
qGroup[4] = new Array(5,11,17,23,29,35,41);
qGroup[5] = new Array(6,12,18,24,30,36,42);

var allValue = new Array(Q_NUMBER).fill(0); //题目答案对应值数组
var valueSum = new Array(0,0,0,0,0,0); //分类统计结果数组

function setValue(obj){
    var i = parseInt((obj.name).slice(1)) - 1; //截取问题id的数字部分
    allValue[i]=parseInt(obj.value); //将数值存入对应数组内
}

function onclickStart(){
    var allQuestions = "";
    for (var i = 0; i < Q_NUMBER; i++){
        allQuestions += ("<div class='container__answers'>" + Q_DETAILS[i] + "<br>"
            + "<label class='container__radio'><input class='radio' type='radio' name='q" + (i+1) + "' value='1' onclick='setValue(this)'>完全不符合</label><br>"
            + "<label class='container__radio'><input class='radio' type='radio' name='q" + (i+1) + "' value='2' onclick='setValue(this)'>不符合</label><br>"
            + "<label class='container__radio'><input class='radio' type='radio' name='q" + (i+1) + "' value='3' onclick='setValue(this)'>没意见</label><br>"
            + "<label class='container__radio'><input class='radio' type='radio' name='q" + (i+1) + "' value='4' onclick='setValue(this)'>符合</label><br>"
            + "<label class='container__radio'><input class='radio' type='radio' name='q" + (i+1) + "' value='5' onclick='setValue(this)'>完全符合</label><br>"
            + "</div>")
            
    }
    //输出问题
    document.getElementById("questions").innerHTML = allQuestions;
    //切换页面
    document.getElementById("answerPage").style.display="flex";
    document.getElementById("welcomePage").style.display="none";
}

function onclickResult(){
    var valueCheck = false;

    /*
    //调试部分快速赋值
    for (var i = 0; i < Q_NUMBER; i++){
        allValue[i] = (i + 1);
    }
    */

    //检查答题情况
    for (var i = 0; i < Q_NUMBER; i++){
        if (allValue[i] == 0){
            valueCheck = true;
            break;
        }
    }

    if (valueCheck){
        alert("请回答完所有问题！");
    }else{
        //统计结果
        for (var i = 0; i < 6; i++){
            valueSum[i] = 0;
            for (var j = 0; j < qGroup[i].length; j++ ){
                valueSum[i] += allValue[qGroup[i][j] - 1];
            }
            //console.log(i,valueSum[i]);
        }
        //输出结果
        document.getElementById("result1").innerHTML = valueSum[0].toString();
        document.getElementById("result2").innerHTML = valueSum[1].toString();
        document.getElementById("result3").innerHTML = valueSum[2].toString();
        document.getElementById("result4").innerHTML = valueSum[3].toString();
        document.getElementById("result5").innerHTML = valueSum[4].toString();
        document.getElementById("result6").innerHTML = valueSum[5].toString();
        //切换页面
        document.getElementById("answerPage").style.display="none";
        document.getElementById("resultPage").style.display="flex";
        document.getElementById("detailCard").style.display="none";
    }
}

function onclickBack(){
    document.getElementById("answerPage").style.display="flex";
    document.getElementById("resultPage").style.display="none";
}

function onclickDetail(obj){
    var tempstr = obj.value;
    var i = parseInt((obj.name).slice(8)) - 1; //截取id的数字部分
    document.getElementById("analysisType").innerHTML = tempstr;
    document.getElementById("analysisScore").innerHTML = valueSum[i].toString();
    document.getElementById("analysisDetail").innerHTML = A_DETAILS[i].toString();
    document.getElementById("detailCard").style.display="flex";
    document.getElementById("detailCard").style.flexDirection="column"
    document.getElementById("resultCard").style.display="none";
}

function onclickDetailBack(){
    document.getElementById("detailCard").style.display="none";
    document.getElementById("resultCard").style.display="flex";
}

function onclickDetailAnalysis(){
    var resultQuery = "result1=" + valueSum[0];
    for(var i = 1; i < valueSum.length; i++){
        resultQuery += ("&result" + (i + 1) + "=" + valueSum[i]);
    }
    url = "report.html?" + resultQuery;
    window.location.href = url;
}
