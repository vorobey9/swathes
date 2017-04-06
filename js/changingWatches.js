/**
 * Created by Andrey on 06.04.2017.
 */
function changeWatch(_this) {

    // $(".type").removeClass('active');
    // $(_this).addClass('active');

    var color = $(_this).attr('data-color');
    var pathOfImg = 'img/';
    switch (color) {
        case 'white':
            pathOfImg += 'withoutBackground-1.png';
            break;
        case 'green':
            pathOfImg += 'withoutBackground-7.png';
            break;
        case 'red':
            pathOfImg += 'withoutBackground-4.png';
            break;
        case 'black':
            pathOfImg += 'withoutBackground-3.png';
            break;
        case 'pink':
            pathOfImg += 'withoutBackground-5.png';
            break;
        case 'blue':
            pathOfImg += 'withoutBackground-6.png';
            break;
        case 'navy blue':
            pathOfImg += 'withoutBackground-2.png';
            break;
    }
    $(".changingImage").attr('src', pathOfImg);
}