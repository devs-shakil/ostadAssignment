

const calculate = () =>{
    const heightFeet = document.querySelector('#heightFeet').value;
    const heightInches = document.querySelector('#heightInches').value;
    const weightInput = document.querySelector('#weightInput').value;
    const commentBtn = document.querySelector('#comment');
    
    const weight = parseFloat(weightInput);
    const inches = parseFloat(heightFeet) * 12 + parseFloat(heightInches);
    const meter = inches *  0.0254;
    let bmi = weight /(meter * meter);
    bmi = Math.round(bmi);
    output.innerHTML = bmi;
    document.getElementById('output').innerHTML = bmi;

    let comment = " ";
    if(bmi < 16){
        comment = "Severe Thinness";
    }else if(bmi <= 18){
        comment = "Moderate Thinness";
    }else if(bmi < 25){
        comment = "Normal";
    }else if(bmi < 30 ){
        comment = "Overweight";
    }else if(bmi < 35){
        comment = "Obese Class 1"
    }else{
        comment = "Obese Class 3"
    }
    commentBtn.innerHTML = comment;
   
}



// console.log(meter)
// console.log(weight)
// console.log(bmi)

