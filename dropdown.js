document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseleave', function() {
            const dropdown = card.querySelector('.dropdown-menu');
            if (dropdown) {
                dropdown.remove();
            }
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const dropdown = document.createElement('div');
            dropdown.classList.add('dropdown-menu', 'show');
            card.style.position = 'relative';

            const recipes = [
                { country: 'Brasileira', links: ['Acarajé.html', 'Baião.html', 'Carreteiro.html', 'Moqueca.html', 'Tacaca.html'] },
                { country: 'Chinesa', links: ['Dumplings.html', 'Pato-de-Pequim.html', 'Frango-Kung-Pao.html', 'Porco-Agridoce.html', 'Mapo-Tofu.html'] },
                { country: 'Italiana', links: ['Tiramisù.html', 'Espaguete-Carbonara.html', 'Pizza-Marguerita.html', 'Lasanha-Bolonhesa.html', 'Risoto-de-Açafrão.html'] },
                { country: 'Japonesa', links: ['Takoyaki.html', 'Okonomiyaki.html', 'Tonkatsu.html', 'Gyoza.html', 'Unagi.html'] }
            ];

            const country = card.querySelector('.card-title').textContent;
            const recipe = recipes.find(r => r.country === country);

            if (recipe) {
                recipe.links.forEach(link => {
                    const a = document.createElement('a');
                    a.classList.add('dropdown-item');
                    a.href = `receitas/receitas_em_si/${link}`;
                    a.textContent = link.split('.')[0].replace(/-/g, ' ');
                    dropdown.appendChild(a);
                });
            }

            card.appendChild(dropdown);
        });
    });
});