// Define Custom Grammar for PrismJS
Prism.languages.myLanguage = {
    'keyword-blue': {
        pattern: /\b(function|const|let|var)\b/g,
        alias: 'keyword'
    },
    'keyword-red': {
        pattern: /\b(if|else|return)\b/g,
        alias: 'keyword'
    },
    // ... add more patterns as necessary
};

// Event Listener to Trigger Highlighting on Input
document.getElementById("textbox").addEventListener("input", function() {
    Prism.highlightElement(document.getElementById("textbox"));

    // Set focus and place the cursor at the end
    const el = document.getElementById("textbox");
    const range = document.createRange();
    const sel = window.getSelection();
    range.setStart(el, el.childNodes.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
});

document.getElementById("textbox").addEventListener("input", function() {
    const code = document.getElementById("textbox").innerText;
    document.getElementById("display").innerHTML = Prism.highlight(code, Prism.languages.myLanguage, 'myLanguage');
});