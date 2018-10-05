// JavaScript Document

         //script aside
        var aside = getUrlParameter('aside');
        if (aside == 0) {
            $('#aside').append('<div include-html="aside/asideproxmox.html"></div>');
        }

        if (aside == 1) {
            $('#aside').append('<div include-html="aside/asidegit.html"></div>');
        }
        if (aside == 2) {
            $('#aside').append('<div include-html="aside/asidesolucion.html"></div>');
        }
            //script section
        var section = getUrlParameter('section');

        if (section == 0) {

            $('#section').append('<div include-html="section/UsbBooteable.html"></div>');
        }
        if (section == 1) {

            $('#section').append('<div include-html="section/proxmox.html"></div>');
        }
        if (section == 2) {

            $('#section').append('<div include-html="section/ubuntu.html"></div>');
        }
        if (section == 3) {

            $('#section').append('<div include-html="section/xamp.html"></div>');
        }
        if (section == 4) {

            $('#section').append('<div include-html="section/git.html"></div>');
        }

        if (section == 5) {

            $('#section').append('<div include-html="section/versiones.html"></div>');
        }
        if (section == 6) {

            $('#section').append('<div include-html="section/lenguajes.html"></div>');
        }
        if (section == 7) {

$('#section').append('<div include-html="section/problemas.html"></div>');
}

        includeHTML();
