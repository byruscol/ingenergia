/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function loadModules(){
    this.header = loadHeader;
    this.footer = loadFooter;
    this.init = init;
    this.init();
}

function loadHeader(){
    $("#header").load("modules/header.html");
}

function loadFooter(){
    $("#footer").load("modules/footer.html");
}

function init(){
    this.header();
    this.footer();
}