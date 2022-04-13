/*=============== FILTERS TABS ===============*/
let tabs        = document.querySelectorAll('[data-target]')
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.target)

        /*  tc => tabContents */
        tabContents.forEach(tc => {
            tc.classList.remove('filters_active')
        })

        target.classList.add('filters_active')

        /* t => tab */
        tabs.forEach(t => {
            t.classList.remove('filters_tab_active')
        })

        tab.classList.add('filters_tab_active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
let themeButton = document.getElementById('theme_button')
let darkTheme = 'dark_theme'
let iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
let selectedTheme = localStorage.getItem('selected_theme')
let selectedIcon = localStorage.getItem('selected_icon')

// We obtain the current theme that the interface has by validating the dark-theme class
let getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
let getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected_theme', getCurrentTheme())
    localStorage.setItem('selected_icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
