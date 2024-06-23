import { getDocument } from 'pdfjs-dist';

onmessage = function(event) {
    const pdfUrl = event.data;
    console.log('Received data:', pdfUrl);

    getDocument(pdfUrl).promise.then(pdf => {
        pdf.getPage(1).then(page => {
            const viewport = page.getViewport({ scale: 1 });
            const canvas = new OffscreenCanvas(viewport.width, viewport.height);
            const context = canvas.getContext('2d');

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            page.render(renderContext).promise.then(() => {
                canvas.convertToBlob().then(blob => {
                    const reader = new FileReader();
                    reader.onload = function() {
                        postMessage({ imageData: reader.result });
                    };
                    reader.readAsArrayBuffer(blob);
                });
            });
        });
    }).catch(error => {
        console.error('Error loading PDF:', error);
    });
};