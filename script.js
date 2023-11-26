document.addEventListener('DOMContentLoaded', () => {
    const hskLevelSelect = document.getElementById('hsk-level');
    const generateStoryBtn = document.getElementById('generate-story');
    const togglePinyinBtn = document.getElementById('toggle-pinyin');
    const storyContainer = document.getElementById('story-container');
    const tooltip = document.getElementById('tooltip');

    generateStoryBtn.addEventListener('click', () => {
        const selectedLevel = hskLevelSelect.value;
        if (selectedLevel && hskStories[selectedLevel]) {
            const randomStory = hskStories[selectedLevel][Math.floor(Math.random() * hskStories[selectedLevel].length)];
            displayStory(randomStory);
        } else {
            storyContainer.textContent = 'Please select an HSK level.';
        }
    });

    togglePinyinBtn.addEventListener('click', () => {
        storyContainer.classList.toggle('show-pinyin');
    });

    function displayStory(story) {
        storyContainer.innerHTML = '';
        const words = story.split(' ');
        words.forEach(word => {
            const wordData = translationDatabase[word.trim()];
            if (wordData) {
                const wordDiv = document.createElement('div');
                wordDiv.className = 'word-container';
                wordDiv.innerHTML = `
                    <span class="chinese">${word}</span>
                    <span class="pinyin">${wordData.pinyin}</span>
                `;
                wordDiv.addEventListener('mouseover', function(event) {
                    tooltip.textContent = wordData.translation;
                    tooltip.style.display = 'block';
                    tooltip.style.left = `${event.clientX}px`;
                    tooltip.style.top = `${event.clientY - 40}px`;
                });
                wordDiv.addEventListener('mouseout', function() {
                    tooltip.style.display = 'none';
                });
                storyContainer.appendChild(wordDiv);
            }
        });
    }
});
