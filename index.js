// even numbers
evenNumber = () => {
    for (n = 0; n <= 1000; n++) {
        if (n % 2 == 0)
            console.log(n)

    }
}
evenNumber();

// integer numbers between -100 t0 100
integerNumber = () => {
    for (k = -200; k <= 100; k++) {
        console.log(k)
    }
}

integerNumber();



// money breakdown
moneyBreakdown = () => {
    let amount = 1000;
    const moneyArray = [100, 50, 20, 10, 5];

    // 100 naira notes
    let hunNotes = amount / moneyArray[0]
    console.log(hunNotes)

    // 50 naira notes
    let fiftyNotes = amount / moneyArray[1]
    console.log(fiftyNotes)

    // 20 naira notes
    let twentyNotes = amount / moneyArray[2]
    console.log(twentyNotes)

    // 10 naira notes
    let tenNotes = amount / moneyArray[3]
    console.log(tenNotes)

    // 5 naira notes
    let fiveNotes = amount / moneyArray[4]
    console.log(fiveNotes)
    
}

moneyBreakdown()