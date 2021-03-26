init = function() {
    game.init();
    window.addEventListener('resize', game.size);
    document.getElementById('editor-field').value = '// Add code here';
    document.getElementById('check-code').addEventListener('click', _ => {
        processor.debug('#editor-field')
    })
}

init()