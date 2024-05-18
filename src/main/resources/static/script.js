function checkFiles(files) {
    console.log(files);

    if (files.length != 1) {
        alert("Please upload exactly one file.");
        return;
    }

    const fileSize = files[0].size / 1024 / 1024; // in MiB
    if (fileSize > 10) {
        alert("File too large (max. 10Mb)");
        return;
    }

    document.getElementById('answerPart').style.visibility = "visible";
    const file = files[0];

    // Preview
    if (file) {
        document.getElementById('preview').src = URL.createObjectURL(files[0]);
    }

    // Upload
    const formData = new FormData();
    formData.append("image", file);

    fetch('/analyze', {
        method: 'POST',
        body: formData
    }).then(
        response => {
            console.log(response);
            response.text().then(function (text) {
                document.getElementById('answer').innerHTML = text;
            });
        }
    ).catch(
        error => console.log(error)
    );
}
