(function () {

    function calculateBonus (salary, bonus) {
        if (bonus === true) {
          console.log(salary * 10);
        }
        else {
          console.log(salary);
        }
    };

    calculateBonus(10000, false);
    calculateBonus(45000, true);

})();

(function () {
    const groceryList = [
        {
            item: 'bread',
            walmartPrice: 3.50,
            costCoPrice: 3.75
        },
        {
            item: 'milk',
            walmartPrice: 1.75,
            costCoPrice: 2.15
        },
        {
            item: 'cookies',
            walmartPrice: 4.35,
            costCoPrice: 3.10
        },
        {
            item: 'apples',
            walmartPrice: 5.00,
            costCoPrice: 4.75
        }
    ];

    function goShopping (groceryList) {
      let total = 0;
        for (item in groceryList) {
          console.log(groceryList[item].item);
          if (groceryList[item].walmartPrice > groceryList[item].costCoPrice) {
            console.log(groceryList[item].costCoPrice);
            total += groceryList[item].costCoPrice;
          } else {
            console.log(groceryList[item].walmartPrice);
            total += groceryList[item].walmartPrice;
          }
        }
        console.log(total);
    };

    goShopping(groceryList);
})();


(function () {
    const translations = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    };

    function welcome (translations, language) {
        // your code goes here
          console.log(translations[language]);

    };

    welcome(translations, 'french');
    welcome(translations, 'polish');
    welcome(translations, 'english');
    welcome(translations, 'estonian');
    })();
