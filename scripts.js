document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        'nav-about-me': document.getElementById('about-me'),
        'nav-skills': document.getElementById('skills'),
        'nav-experience': document.getElementById('experience')
    };

    document.getElementById('nav-about-me').addEventListener('click', () => {
        showSection('nav-about-me');
    });

    document.getElementById('nav-skills').addEventListener('click', () => {
        showSection('nav-skills');
    });

    document.getElementById('nav-experience').addEventListener('click', () => {
        showSection('nav-experience');
    });

    function showSection(sectionId) {
        for (const id in sections) {
            if (id === sectionId) {
                sections[id].style.display = 'block';
            } else {
                sections[id].style.display = 'none';
            }
        }
    }
});
