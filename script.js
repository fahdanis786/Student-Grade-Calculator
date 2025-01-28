function cal() {
    let phy = document.getElementById("phy").value
    let chem = document.getElementById("chem").value
    let bio = document.getElementById("bio").value
    let maths = document.getElementById("math").value



    let sum = parseFloat(phy) + parseFloat(chem) + parseFloat(maths)
        + parseFloat(bio)
alert(sum)
    document.getElementById("demo").innerHTML = `Total mark is =${sum}`
    let percentage = (sum / 400) * 100;

    document.getElementById("demo").innerHTML = `percentage is =${percentage}`


    if (percentage >= 100) {
        document.getElementById("demo2").innerHTML = `A`;
    } else if (percentage >= 80) {
        document.getElementById("demo2").innerHTML = `B`;
    } else if (percentage >= 60) {
        document.getElementById("demo2").innerHTML = `C`;
    } else if (percentage >= 40) {
        document.getElementById("demo2").innerHTML = `D`;
    } else {
        document.getElementById("demo2").innerHTML = `F`
    }
}