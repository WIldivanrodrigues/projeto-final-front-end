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
                        
                        const recipes = [
                            { country: 'Brasileira', links: ['acaraje.html', 'baiao.html', 'carreteiro.html', 'moqueca.html', 'tacaca.html'] },
                            { country: 'Chinesa', links: ['dumplings.html', 'peking-duck.html', 'kung-pao-chicken.html', 'sweet-and-sour-pork.html', 'mapo-tofu.html'] },
                            { country: 'Italiana', links: ['tiramisu.html', 'spaghetti-alla-carbonara.html', 'pizza-margherita.html', 'lasagna-alla-bolognese.html', 'risotto-alla-milanese.html'] },
                            { country: 'Japonesa', links: ['takoyaki.html', 'okonomiyaki.html', 'tonkatsu.html', 'gyoza.html', 'unagi.html'] }
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