new Vue ({
    el: '#app',
    data: {
        // standardisation de la barre de navigation
        menu: [
            ['index.html#banner-section', 'Accueil'],
            ['index.html#section-portfolio', 'Projets'],
            ['index.html#section-screenshots', 'Screenshots'],
            ['index.html#section-faq', 'FAQ'],
            ['index.html#testimonial-section', 'Avis'],
            ['blog.html', 'Blog']

        ],
        // unification des portfolii dans index.html
        
        portfolio1: [
            {
                col: 'col-lg-6 cl',
                file: 'img/portfolio1.jpg',
                title: 'Audio helmet',
                product: 'Audio/Music'
            },
            {
                col: 'col-lg-6 cl',
                file: 'img/portfolio2.jpg',
                title: 'Onion Crasher',
                product: 'Kitchen'
            },
            {
                col: 'col-lg-12',
                file: 'img/portfolio3.jpg',
                title: 'Blue Nike Sneakers',
                product: 'Shoes'
            }
        ],
        portfolio2: [
            {
                col: 'col-lg-12',
                file: 'img/portfolio4.jpg',
                title: 'Yellow Game Boy',
                product: 'Video game console'
            }, {
                col: 'col-lg-12',
                file: 'img/portfolio5.jpg', 
                title: 'Connected Watch',
                product: 'Watch'
            }

            // ['col-lg-12', 'img/portfolio4.jpg', 'Yellow Game Boy', 'Video game console'],
            // ['col-lg-12', 'img/portfolio5.jpg', 'Connected Watch', 'Watch']
        ],
        // unification des images dans la section screenshots
        screenshots: [
            { 
                file: "img/screen/screen1.jpg",
                alt: "",
                title: ""
            },
            { 
                file: "img/screen/screen2.jpg",
                alt: "",
                title: ""
            },
            { 
                file: "img/screen/screen3.jpg",
                alt: "",
                title: ""
            },
            { 
                file: "img/screen/screen4.jpg",
                alt: "",
                title: ""
            },
            { 
                file: "img/screen/screen5.jpg",
                alt: "",
                title: ""
            },
            { 
                file: "img/screen/screen6.jpg",
                alt: "",
                title: ""
            },
            { 
                file: "img/screen/screen7.jpg",
                alt: "",
                title: ""
            }
        ],

        // unification du système accordéon dans la section FAQ
        accordion: [
            ['Started several mistake joy say painful removed reached end.', 'Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. '],
            ['Although moreover mistaken kindness me feelings do be marianne?', 'She consisted consulted elsewhere happiness disposing household any old the.'],
            ['By in no ecstatic wondered disposal my speaking?', 'She consisted consulted elsewhere happiness disposing household any old the.']
        ],
        // automatisation de la classe active
        isActive: false,
        // unification du contenu du blog
        blog: [
            {
                avatar: '',
                author: '',
                image: '',
                job: '',
                title: '',
                message: '',
                date: '',
                tags: ['', '']
            }
        ]

    },
    computed: {
        accordionCompute: function(){
            return this.active = this.isActive;
            
        }
    }
});
