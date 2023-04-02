document.addEventListener('DOMContentLoaded', () => {
    const quill = new Quill('#editor', {
        theme: 'snow',
    });
});
/*
const API_URL = '/api/documents';

const saveBtn = document.getElementById('save-btn');
const documentTitle = document.getElementById('document-title');

saveBtn.addEventListener('click', async () => {
    const content = quill.root.innerHTML;
    const title = documentTitle.value.trim();

    if (!title || !content) {
        alert('Please enter a title and content.');
        return;
    }

    const documentData = { title, content };
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(documentData),
        });
        const jsonResponse = await response.json();

        if (response.ok) {
            alert('Document saved successfully!');
            documentTitle.value = '';
            quill.setContents([]);
        } else {
            throw new Error(jsonResponse.message);
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});

 */