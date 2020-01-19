new Vue({
    el: '#app',
    data: {
/*         unification de la barre de navigation */
        inPageProduct: false,
        
        products: {
            currentIndex: 0,
            data: [
                {
                    name: 'Casque audio',
                    img: 'img/portfolio1.jpg',
                    client: 'Envato 1',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018'
                },
                {
                    name: 'Ecrase-oignons',
                    img: 'img/portfolio2.jpg',
                    client: 'Envato 2',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018'
                },
                {
                    name: 'Chaussure Nike bleue',
                    img: 'img/portfolio3.jpg',
                    client: 'Envato 2',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018'
                },
                {
                    name: 'Game Boy Jaune',
                    img: 'img/portfolio4.jpg',
                    client: 'Envato 2',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018'
                },
                {
                    name: 'Montre connectée ',
                    img: 'img/portfolio5.jpg',
                    client: 'Envato 2',
                    categories: ['Fashion', 'Design'],
                    visit: 'envato.com',
                    date: '01.09.2018'
                }
            ]
        },
       
        // unification du système accordéon dans la section FAQ
        faq: {
            currentQuestion: 0,
            questions: [
                {
                    sentence: 'Started several mistake joy say painful removed reached end',
                    answer: 'Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.Widow downs you new shade drift hopes small.So otherwise commanded sweetness we improving.'
                },
                {
                    sentence: 'Although moreover mistaken kindness me feelings do be marianne?',
                    answer: 'Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.Widow downs you new shade drift hopes small.So otherwise commanded sweetness we improving.'
                },
                {
                    sentence: 'By in no ecstatic wondered disposal my speaking?',
                    answer: 'Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.Widow downs you new shade drift hopes small.So otherwise commanded sweetness we improving.'
                }
            ]
        },
       
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
        currentProduct: function() {
            return this.products.data[this.products.currentIndex]
        }
    },
    methods: {
        showProduct: function(i) {
            this.products.currentIndex = i
            this.inPageProduct = true
            window.scrollTo(0, 0)
        },
        homeLink: function() {
            this.inPageProduct = false
        }
    }
    
})
