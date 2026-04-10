const TerminalEngine = {
    output: document.getElementById('terminal-output'),
    
    log: function(message, type = 'info') {
        const div = document.createElement('div');
        div.style.color = type === 'error' ? '#cf222e' : (type === 'success' ? '#2ea44f' : '#d1d7dd');
        div.textContent = `> ${message}`;
        this.output.appendChild(div);
        this.output.scrollTop = this.output.scrollHeight;
    },

    clear: function() {
        this.output.innerHTML = '> Console cleared...';
    }
};
