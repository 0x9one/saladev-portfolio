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


/*=============== SCROLL REVEAL ANIMATION ===============*/
