(function () {
    // setting language
    var language = window.navigator ? (window.navigator.language ||
                  window.navigator.systemLanguage ||
                  window.navigator.userLanguage) : "en";
    language = language.substr(0, 2).toLowerCase();

    switch(language) {
        case 'en':
            setLanguage('en');
            break;
        case 'ru':
            setLanguage('ru');
            break;
        default:
            setLanguage('en');
    }
    
    function setLanguage(param) {
        let filePath  = './lang/' + param + '.json';

        $.getJSON(filePath, function(data) {
            let resultData = data;

            $('[data-lang-key]').each(function () {
                let $self = $(this);
                $self.html(resultData[$self.data('lang-key')]);
            });
        });
    }
})();    
