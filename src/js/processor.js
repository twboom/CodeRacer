processor = [];

processor.config = {
    'keywords': ['north', 'east', 'south', 'west', 'accelerate', 'brake']
}


// Function to format the text area in somthing predictable that we can use
processor.format = function(str) {
    const lines = str.toLowerCase().toLowerCase().split(/\r?\n/);
    let problems = 0;
    let formatted = [];
    for (let i = 0; i < lines.length; i++) {
        const args = lines[i].split(' ')
        if (lines[i] === '' || !processor.config.keywords.includes(args[0])) { problems++; continue }
        task = {}
        task.task = args[0]
        task.value = args [1]
        formatted.push(task)
    }
    shell.log(problems)
    return formatted
}

processor.debug = function(field) {
    let problems = 0;

    const text = document.querySelector(field)
    const lines = processor.format(text)

    shell.log(lines)

    return problems
}