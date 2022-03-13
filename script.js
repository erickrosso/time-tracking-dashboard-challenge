const inBox = document.querySelectorAll(".in-work");

const daily = ["5hrs", "1hr", "0hrs", "1hr", "1hr", "0hrs"];
const dailyPrev = ["7hrs", "2hrs", "1hr", "1hr", "3hrs", "1hr"];

const weekly = ["32hrs", "10hrs", "4hrs", "4hrs", "5hrs", "2hrs"];
const weeklyPrev = ["36hrs", "8hrs", "7hrs", "5hrs", "10hrs", "2hrs"];

const monthly = ["103hrs", "23hrs", "13hrs", "11hrs", "21hrs", "7hrs"];
const monthlyPrev = ["128hrs", "29hrs", "19hrs", "18hrs", "23hrs", "11hrs"];

const buttom = document.querySelectorAll(".item");
buttom[0].addEventListener("click", dailyFunc);
buttom[1].addEventListener("click", weeklyFunc);
buttom[2].addEventListener("click", monthlyFunc);

dailyFunc();

function dailyFunc() {

    inBox.forEach((x, y, z) => {
        inBox[y].childNodes[3].innerHTML = daily[y];
        inBox[y].childNodes[5].innerHTML = 'Lest Week - ' + dailyPrev[y];
    });

};

function weeklyFunc() {

    inBox.forEach((x, y, z) => {
        inBox[y].childNodes[3].innerHTML = weekly[y];
        inBox[y].childNodes[5].innerHTML = 'Lest Week - ' + weeklyPrev[y];
    });

};

function monthlyFunc() {

    inBox.forEach((x, y, z) => {
        inBox[y].childNodes[3].innerHTML = monthly[y];
        inBox[y].childNodes[5].innerHTML = 'Lest Week - ' + monthlyPrev[y];
    });

};

var edicao = document.createElement("div");
edicao.classList = "inputEdit"

const edit = document.querySelectorAll(".edit");
edit.forEach((x, y, z) => {
    edit[y].addEventListener("click", editar);
    edit[y].value = y;
});

function editar() {
    
    if (Boolean(!document.querySelector(".inputEdit"))){
        this.parentElement.parentElement.appendChild(edicao);
        document.querySelector(".inputEdit").innerHTML = 
        ' Daily: <input oninput="editdaily(0)" type="text" class="input" value="'+ daily[this.value] +'">'  +
        ' Previous: <input oninput="editdailyp()" type="text" class="input" value="'+ dailyPrev[this.value] +'">' + 
        ' Weekly: <input oninput="editweekly()" type="text" class="input" value="'+ weekly[this.value] +'">' +
        ' Previous: <input oninput="editweeklyp()" type="text" class="input" value="'+ weeklyPrev[this.value] +'">' +
        ' Monthly: <input oninput="editmonthly()" type="text" class="input" value="'+ monthly[this.value] +'">' +
        ' Previous: <input oninput="editmonthlyp()" type="text" class="input" value="'+ monthlyPrev[this.value] +'">';
    }
    else document.querySelector(".inputEdit").remove();
};

function editdaily(i) {
    console.log(this);
};



