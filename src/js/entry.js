import css from '../css/index.css';
import less from '../css/black.less';
import white from '../css/white.scss';

{
    let str = 'babel-loader in Webpack'
    document.getElementById('title').innerHTML=str
    $('.jq').fadeIn()
    setTimeout(() => {
        $('.jq').fadeOut()
    },2000)
}
