function SidePanel() {
    
    const scrollToSection = (sectionId) => {
        const headerOffset = 72; // This is my header hight
        const element = document.getElementById(sectionId); //This stores the element i want to be shown
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;   //
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <div className="side-nav-bar">
            <ul className="nav-bar-buttons">
                <li><button onClick={() => scrollToSection('section1')}>About</button></li>
                <li><button onClick={() => scrollToSection('section2')}>Education</button></li>
                <li><button onClick={() => scrollToSection('section3')}>Work Experience</button></li>
                <li><button onClick={() => scrollToSection('section4')}>Projects</button></li>
            </ul>
        </div>
    );
}

export default SidePanel;
