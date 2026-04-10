window.onload = () => {
    const savedCode = ProjectManager.load();
    if (savedCode) document.getElementById('code-editor').value = savedCode;
    ProjectManager.updateStorageLabel();
};

function handleAction(action) {
    const editor = document.getElementById('code-editor');
    
    switch(action) {
        case 'RUN':
            TerminalEngine.clear();
            try {
                new Function(editor.value)();
                TerminalEngine.log("Process finished.", "success");
            } catch (e) {
                TerminalEngine.log(e.message, "error");
            }
            break;

        case 'BUILD':
            document.getElementById('build-modal').style.display = 'flex';
            CompilerCore.startBuild(() => {
                TerminalEngine.log("APK generated locally.", "success");
            });
            break;

        case 'STORAGE':
            document.getElementById('storage-modal').style.display = 'flex';
            break;
    }
}
