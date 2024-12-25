class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendants = [];
    }
}

var dict = new Object();
dict['A'] = "Is the quality of decision important?" 
dict['B'] = "Is there sufficient information to make a high-quality decision right now?"
dict['C'] = "Is the problem structured?"
dict['D'] = "Is acceptance of the decision by subordinates important for effective implementation?"
dict['E'] = "If the leader was to make the decision by themselves, is it reasonable that it would be accepted by subordinates?"
dict['F'] = "Are subordinates motivated to attain organizational goals?"
dict['G'] = "Are subordinates likely to disagree with proposed solutions?"
dict['R1'] = "ALAI, CL, CI, GII"
dict['R2'] = "GII"
dict['R3'] = "AI, AE, CI, CII, GII"
dict['R4'] = "AI, AL, CI, CII"
dict['R5'] = "GII"
dict['R6'] = "CII"
dict['R6B'] = "CI, CII"
dict['R7'] = "AII, CI, CII"
dict['R8'] = "AII, CI, CII, GII"
dict['R9'] = "CII"
dict['R10'] = "CII, GII"
dict['R11'] = "GII"
dict['R12'] = "CII"

const FirstQuestion = new TreeNode(dict.A);
const SecondQuestion = new TreeNode(dict.B);
const ThirdQuestion = new TreeNode(dict.C);
const FourthQuestionA = new TreeNode(dict.D);
const FourthQuestionB = new TreeNode(dict.D);
const FourthQuestionC = new TreeNode(dict.D);
const FourthQuestionD = new TreeNode(dict.D);
const FifthQuestionA = new TreeNode(dict.E);
const FifthQuestionB = new TreeNode(dict.E);
const FifthQuestionC = new TreeNode(dict.E);
const FifthQuestionD = new TreeNode(dict.E);
const SixthQuestionA = new TreeNode(dict.F);
const SixthQuestionB = new TreeNode(dict.F);
const SixthQuestionC = new TreeNode(dict.F);
const SixthQuestionD = new TreeNode(dict.F);
const SixthQuestionE = new TreeNode(dict.F);
const SeventhQuestion = new TreeNode(dict.G);
const Result1 = new TreeNode(dict.R1);
const Result2 = new TreeNode(dict.R2);
const Result3 = new TreeNode(dict.R3);
const Result4 = new TreeNode(dict.R4);
const Result5 = new TreeNode(dict.R5);
const Result6 = new TreeNode(dict.R6);
const Result6b = new TreeNode(dict.R6B);
const Result7 = new TreeNode(dict.R7);
const Result8 = new TreeNode(dict.R8);
const Result9 = new TreeNode(dict.R9);
const Result10 = new TreeNode(dict.R10);
const Result11 = new TreeNode(dict.R11);
const Result12 = new TreeNode(dict.R12);

FirstQuestion.descendants.push(SecondQuestion);
FirstQuestion.descendants.push(FourthQuestionA);
SecondQuestion.descendants.push(FourthQuestionB);
SecondQuestion.descendants.push(ThirdQuestion);
ThirdQuestion.descendants.push(FourthQuestionC);
ThirdQuestion.descendants.push(FourthQuestionD);
FourthQuestionA.descendants.push(FifthQuestionA);
FourthQuestionA.descendants.push(Result1);
FourthQuestionB.descendants.push(FifthQuestionB);
FourthQuestionB.descendants.push(SixthQuestionA);
FourthQuestionC.descendants.push(FifthQuestionC);
FourthQuestionC.descendants.push(SixthQuestionC);
FourthQuestionD.descendants.push(FifthQuestionD);
FourthQuestionD.descendants.push(SixthQuestionD);
FifthQuestionA.descendants.push(Result1);
FifthQuestionA.descendants.push(Result2);
FifthQuestionB.descendants.push(SixthQuestionA);
FifthQuestionB.descendants.push(SixthQuestionB);
FifthQuestionC.descendants.push(SixthQuestionC);
FifthQuestionC.descendants.push(SixthQuestionB);
FifthQuestionD.descendants.push(SixthQuestionD);
FifthQuestionD.descendants.push(SixthQuestionE);
SixthQuestionA.descendants.push(Result3);
SixthQuestionA.descendants.push(Result4);
SixthQuestionB.descendants.push(Result5);
SixthQuestionB.descendants.push(SeventhQuestion);
SixthQuestionC.descendants.push(Result8);
SixthQuestionC.descendants.push(Result7);
SixthQuestionD.descendants.push(Result10);
SixthQuestionD.descendants.push(Result9);
SixthQuestionE.descendants.push(Result11);
SixthQuestionE.descendants.push(Result12);
SeventhQuestion.descendants.push(Result6);
SeventhQuestion.descendants.push(Result6b);

let currentNode = FirstQuestion;

function displayQuestionOrResult() {
    const questionContainer = document.getElementById('question-container');
    const resultDiv = document.getElementById('result');
    const restartButton = document.getElementById('restart-button');

    if (currentNode.descendants.length === 0) {
        questionContainer.style.display = 'none';
        resultDiv.style.display = 'block';
        resultDiv.innerText = `Result: ${currentNode.value}`;
        restartButton.style.display = 'block';
    } else {
        document.getElementById('question').innerText = `Question: ${currentNode.value}`;
        restartButton.style.display = 'none';
    }
}

function answer(choice) {
    currentNode = choice === 'yes' ? currentNode.descendants[0] : currentNode.descendants[1];
    displayQuestionOrResult();
}

function restartQuiz() {
    currentNode = FirstQuestion;
    const questionContainer = document.getElementById('question-container');
    const resultDiv = document.getElementById('result');
    const restartButton = document.getElementById('restart-button');

    questionContainer.style.display = 'block';
    resultDiv.style.display = 'none';
    restartButton.style.display = 'none';
    displayQuestionOrResult();
}

displayQuestionOrResult();
