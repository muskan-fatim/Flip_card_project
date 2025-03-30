let qaData = [
    {
        question: "پہلی وحی کون سی آیت تھی جو حضرت محمدﷺ پر نازل ہوئی؟",
        answer: "'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ' (اپنے رب کے نام سے پڑھو جس نے پیدا کیا) – (سورۃ العلق 96:1)"
    },
    {
        question: "قرآن مجید کی سب سے بڑی سورت کون سی ہے؟",
        answer: "سورۃ البقرہ"
    },
    {
        question: "آیت الکرسی کس سورۃ میں ہے؟",
        answer: "سورۃ البقرہ (2:255)"
    },
    {
        question: "قرآن پاک کی سب سے چھوٹی سورت کون سی ہے؟",
        answer: "سورۃ الکوثر"
    },
    {
        question: "قرآن میں سب سے زیادہ ذکر کس نبی کا آیا ہے؟",
        answer: "حضرت موسیٰ علیہ السلام"
    },
    {
        question: "قرآن پاک میں کتنے انبیاء علیہم السلام کے نام ذکر ہیں؟",
        answer: "25 انبیاء"
    },
    {
        question: "وہ کون سے نبی تھے جنہیں مچھلی نے نگل لیا تھا؟",
        answer: "حضرت یونس علیہ السلام"
    },
    {
        question: "قرآن مجید میں سب سے پہلا رکوع کس سورۃ میں ہے؟",
        answer: "سورۃ الفاتحہ"
    },
    {
        question: "قرآن کی سب سے لمبی آیت کون سی ہے؟",
        answer: "آیت الدین (سورۃ البقرہ 2:282)"
    },
    {
        question: "اللہ تعالیٰ کے نام 'الرحمن' کا کیا مطلب ہے؟",
        answer: "بے حد مہربان"
    },
    {
        question: "اللہ تعالیٰ کا وہ کون سا نام ہے جس کا مطلب ہے 'رزق دینے والا'؟",
        answer: "الرزاق"
    },
    {
        question: "اسلام کے کتنے بنیادی ارکان ہیں؟",
        answer: "پانچ (کلمہ، نماز، روزہ، زکوٰۃ، حج)"
    },
    {
        question: "مسلمانوں پر دن میں کتنی نمازیں فرض ہیں؟",
        answer: "پانچ وقت کی نمازیں"
    },
    {
        question: "سب سے زیادہ احادیث جمع کرنے والے صحابی کون تھے؟",
        answer: "حضرت ابو ہریرہ رضی اللہ عنہ"
    },
    {
        question: "وہ کون سی دعا ہے جو قرآن میں سب سے زیادہ پڑھی جاتی ہے؟",
        answer: "'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ' – (سورۃ البقرہ 2:201)"
    },
    {
        question: "سب سے پہلی مسجد کون سی تھی؟",
        answer: "مسجد قباء"
    },
    {
        question: "حضرت محمدﷺ کا پہلا معجزہ کیا تھا؟",
        answer: "چاند کو دو ٹکڑوں میں تقسیم کرنا"
    },
    {
        question: "کون سی جنگ میں مسلمانوں کی تعداد صرف 313 تھی؟",
        answer: "غزوہ بدر"
    },
    {
        question: "قرآن میں کس نبی کو ذبیح اللہ کہا گیا ہے؟",
        answer: "حضرت اسماعیل علیہ السلام"
    },
    {
        question: "اس حدیث کو مکمل کریں: 'طاقتور وہ شخص نہیں جو...' (صحیح بخاری)",
        answer: "'دوسروں کو پچھاڑ دے، بلکہ طاقتور وہ ہے جو غصے کے وقت اپنے آپ پر قابو رکھے۔'"
    }
];

// Function to load random question and answer
function loadRandomQA() {
    // Get random QA pair
    let randomQA = qaData[Math.floor(Math.random() * qaData.length)];
    
    // Update the question and answer elements
    document.getElementById("question").textContent = randomQA.question;
    document.getElementById("answer").textContent = randomQA.answer;
}

// Load initial question and answer
document.addEventListener("DOMContentLoaded", function() {
    loadRandomQA();
document.querySelector(".flip-card").addEventListener("click",()=>{
    this.querySelector(".flip-card-inner").style.transform = 
    this.querySelector(".flip-card-inner").style.transform === "rotateY(180deg)" ? "rotateY(0deg)": "rotateY(180deg)"
})
document.querySelector(".header").innerHTML += "<button class='btn' id='next-btn'>سوال تبدیل کریں</button>"
 document.getElementById("next-btn").addEventListener("click",(e)=>{
    loadRandomQA();
e.stopPropagation()
document.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)"
 });
});
