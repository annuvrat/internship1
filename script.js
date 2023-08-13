document.addEventListener('DOMContentLoaded', function () {
    const textEditor = document.getElementById('text-editor');
    const imageInput = document.getElementById('image-input');
    const imagePreview = document.getElementById('image-preview');
    const videoUrlInput = document.getElementById('video-url');
    const videoPreview = document.getElementById('video-preview');
    const publishButton = document.getElementById('publish-button');

    imageInput.addEventListener('change', (event) => {
        const selectedImage = event.target.files[0];
        const imageUrl = URL.createObjectURL(selectedImage);
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imagePreview.innerHTML = '';
        imagePreview.appendChild(imageElement);
    });

    videoUrlInput.addEventListener('input', () => {
        const videoUrl = videoUrlInput.value;
        const videoElement = document.createElement('iframe');
        videoElement.src = videoUrl;
        videoElement.width = '560';
        videoElement.height = '315';
        videoPreview.innerHTML = '';
        videoPreview.appendChild(videoElement);
    });

    publishButton.addEventListener('click', () => {
        const textContent = textEditor.value;
        const imageSrc = imagePreview.querySelector('img') ? imagePreview.querySelector('img').src : '';
        const videoSrc = videoPreview.querySelector('iframe') ? videoPreview.querySelector('iframe').src : '';

        // You can handle publishing logic here, like sending the content to a server.
        // This is a simplified example, and actual publishing would involve more complexity.
        console.log('Text content:', textContent);
        console.log('Image source:', imageSrc);
        console.log('Video source:', videoSrc);
    });
});
