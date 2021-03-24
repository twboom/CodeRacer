shell = [];

shell.log = function(content) {
    const element = document.createElement('p');
    element.setAttribute('class', 'shell-output');
    element.innerHTML = `> ${content}`;
    document.getElementById('shell').appendChild(element)
}