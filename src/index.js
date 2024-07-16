import generateQuote from "./generateQuote";
import './styles/main.scss';
import './styles/test.css';
import thinking from './assets/thinking-emoji.svg';

const thinkImg = document.getElementById('thinkImg');
thinkImg.src = thinking;

generateQuote();

const btn = document.getElementById('quoteBtn');
btn.addEventListener('click', generateQuote);