document.addEventListener('DOMContentLoaded', function() {
    const storyContainer = document.getElementById('storyContainer');
    const togglePinyinButton = document.getElementById('togglePinyin');
    const tooltip = document.getElementById('tooltip');

    // Function to create a word container
    function createWordContainer(word, pinyin, translation) {
        const wordContainer = document.createElement('div');
        wordContainer.className = 'word-container hsk2';

        wordContainer.innerHTML = `
            <span class="pinyin">${pinyin}</span>
            <span class="word" data-translation="${translation}">${word}</span>
        `;

        // Add event listeners for tooltips
        wordContainer.addEventListener('mouseover', function(event) {
            tooltip.innerHTML = translation;
            tooltip.style.display = 'block';
            tooltip.style.left = (event.clientX - tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = (event.clientY - tooltip.offsetHeight - 20) + 'px';
        });

        wordContainer.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });

        return wordContainer;
    }

    // Split the story into words and process each word
    const words = text.split(' ');
    words.forEach(word => {
        const trimmedWord = word.trim();
        if (trimmedWord.length > 0 && translationDatabase[trimmedWord]) {
            const { pinyin, translation } = translationDatabase[trimmedWord];
            const wordContainer = createWordContainer(trimmedWord, pinyin, translation);
            storyContainer.appendChild(wordContainer);
        }
    });

    // Toggle Pinyin display
    togglePinyinButton.addEventListener('click', function() {
        storyContainer.classList.toggle('show-pinyin');
    });
});
