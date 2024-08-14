import { iniciarCarrossel } from './carrossel.js';
import { rolagem } from './rolagem.js';
import { mudaHeader } from './mudaHeader.js';
import { fechaMenu } from './fechaMenu.js';

document.addEventListener('DOMContentLoaded', function () {

    iniciarCarrossel();
    rolagem();
    mudaHeader();
    fechaMenu()

});


