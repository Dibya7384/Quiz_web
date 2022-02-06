
var skipPage = document.getElementById('skip');	/*getting the proprtyies of skip id(name as skip) from the doc*/
var score = document.getElementById('score');	/*getting the proprtyies of skip id(name as score) from the doc*/
var totalScore= document.getElementById('totalScore'); 	/*getting the proprtyies of skip id(name as totalscore) from the doc*/
var countdown = document.getElementById('countdown');	/*getting the proprtyies of skip id(name as countdown) from the doc*/
var count = 0;
var scoreCount = 0;
var duration = 0;
var qaSet = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');

skipPage.addEventListener('click',function(){	/*adding a event function on the veriable that is click*/
	step()
	duration = 10
})

qaAnsRow.forEach(function(qaAnsRowSingle) {
	qaAnsRowSingle.addEventListener('click', function(){
		setTimeout(function(){
			step()
			duration = 10
		},500)

		var valid=this.getAttribute("valid");
		if(valid == "valid")
		{
			scoreCount +=20;
			score.innerHTML = scoreCount;
			totalScore.innerHTML = scoreCount;
		}
		else
		{
			scoreCount -=20;
			score.innerHTML = scoreCount;
			totalScore.innerHTML = scoreCount;
		}
	})
});

function step() {
	count += 1;
	for(var i = 0; i < qaSet.length; i++){
		qaSet[i].className= 'qa_set';
	}
	qaSet [count].className= 'qa_set active'; 
	if(count == 5) {
		skipPage.style.display = 'none' ;
		clearInterval(durationTime);
		countdown.innerHTML = 0;
	}
}

var durationTime = setInterval(function(){
	if(duration == 10)
	{
		duration=0;
	}
	duration +=1;
	countdown.innerHTML = duration;
	if(countdown.innerHTML == "10")
	{
		step();
	}
},1000)