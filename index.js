var img = document.getElementById("cat-image");
img.src = "https://www.linkpicture.com/q/catphoto.jpeg"; //link to image that requires authentication to open
img.onload = function () {
    var xhr = new window.XMLHttpRequest()
    xhr.open('POST', '/visited', true)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.send(null)
    img.onerror = function () {
        var xhr2 = new window.XMLHttpRequest()
        xhr2.open('POST', '/notvisited', true)
        xhr2.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        xhr2.send(null)
    }
}