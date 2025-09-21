function link() {
    const btn = document.querySelector('.promo__btn');
    const anchor = document.querySelector('.promo__link');
    const link = ['omelody.com/click?pid=94071&offer_id=25'];
    const ditail = ['123xhttps://tone.aff'];

    // btn.addEventListener('click', () => {
    //     btn.addEventListener('click', () => {
    //         const result = ditail + link;
    //         const clean = result.replace(/^123x/, '');

    //         anchor.href = clean;
    //     });
    // });

    btn.addEventListener('click', () => {
        const result = ditail + link;

        setTimeout(() => {
        const clean = result.replace(/^123x/, '');
        anchor.href = clean;
        window.open(clean, '_blank');
        }, 6000); // 6 секунд
    });
}

link();