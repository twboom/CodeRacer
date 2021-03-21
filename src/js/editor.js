editor = [];
editor.editor = document.getElementById('editor-field')

editor.check = function() {
    const problems = processor.debug(editor.editor.value)
    if (problems === 0) { return true }
    return false
}