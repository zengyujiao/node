// 这是es6引入文件的方法（import）
import $ from 'jquery';
import 'weui';
import './style/style.css';
import './javas/hea';
import header from './tem/header.html';
import search from './tem/search.html';
import footer from './tem/footer.html';
import panel from './tem/panel.html';
import news from './javas/hea';
$('body').html(header + search + panel + footer);

news();
$('.weui-panel__ft').click(() => {
    news();
})