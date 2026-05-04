function checkLoanEligibility(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): void {

    console.log("Checking loan eligibility for:", customerName);

    
    // 1. Credit Score (3 Points)
    // ==============================

    
    if (creditScore > 750) {                                // Point 1: Credit Score > 750
        console.log("Loan Approved (Credit Score > 750)");
        return;
    }

    // 
    if (creditScore < 650) {                                // Point 3: Credit Score < 650
        console.log("Loan Denied (Credit Score < 650)");
        return;
    }

    
    console.log("Additional Checks Required (650 - 750)");    //Point 2: Credit Score between 650–750 

    
    // 2. Income Check
    // ==============================

    if (income < 50000) {
        console.log("Loan Denied (Low Income)");
        return;
    }

  
    // 3. Employment Status (2 Points)
    // ==============================

    if (!isEmployed) {
        console.log("Loan Denied (Unemployed)");
        return;
    } else {
        console.log("Customer is Employed → Proceed to next checks");
    }

    // 4. Debt-to-Income Ratio (3 Points)
    // ==============================

    if (debtToIncomeRatio < 40) {
        console.log("Loan Approved (DTI < 40%)");
    } else {
        console.log("Loan Denied (DTI >= 40%)");
    }
}


// Given Data
let customerName = "John Doe";
let creditScore = 720;
let income = 55000;
let isEmployed = true;
let debtToIncomeRatio = 35.0;

// Function Call
checkLoanEligibility(
    customerName,
    creditScore,
    income,
    isEmployed,
    debtToIncomeRatio
);