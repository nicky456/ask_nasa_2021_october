//set Current date as default in date picker
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

document.getElementById("myDate").defaultValue = today;


var form = document.getElementById("date")
var dateSelector = document.getElementById("myDate")
var selectedDate = ""

dateSelector.addEventListener('change',updateDate)

function updateDate(){
    changeDate()
    getData()
}

function changeDate(){
    selectedDate = dateSelector.value
    console.log(selectedDate)
}
changeDate()

console.log(changeDate())


async function getData () {
    let url = "https://api.nasa.gov/planetary/apod?api_key=KPv9OlHrMZTqcWLwFGLghm7EfZiPV5KhlH4H5CMw&date=" + selectedDate
    
    let response = await fetch(url)
    let parsedData = await response.json()
        
    var pElement = document.createElement('p')
    pElement.innerHTML = parsedData.date
    pElement.setAttribute ('id', "date")
    
    // document.getElementById('date').appendChild(pElement)

    // var postDate = document.getElementById(date)
    // postDate.innerHTML = parsedData.date
    
    var title = document.getElementById('title')
    title.innerHTML = parsedData.title + '<br>' + parsedData.date
    // document.getElementById('dateAndTitle').appendChild(title)
    
    // var content = document.getElementById('content')
    // document.getElementById('dailyPost').appendChild(content)
    // content.setAttribute ('id', "content")

    if (parsedData.media_type == 'video') {
        var videoHolder = document.getElementById('iframe')
        // document.getElementById('content').appendChild(videoHolder)
        // videoHolder.setAttribute ('id', "media")
        var image = document.getElementById ('image')
        image.setAttribute ('width', "0")

        videoHolder.setAttribute ('src', parsedData.url)
        videoHolder.setAttribute ('width', "800px")
        videoHolder.setAttribute ('height', "auto")

        // videoHolder.setAttribute ('frameborder', "0")
    } else {
        var imgHolder = document.getElementById ('image')
        // document.getElementById('content').appendChild(imgHolder)
        var vidi = document.getElementById ('iframe')
        vidi.setAttribute ('width', "0")
        
        imgHolder.setAttribute ('src', parsedData.url)
        // imgHolder.setAttribute ('id', "media")
        //imgHolder.setAttribute ('width', "810")
        imgHolder.setAttribute ('width', "600")
        imgHolder.setAttribute ('height', "auto")
        }


    var explanation = document.getElementById('details')
    explanation.innerHTML = parsedData.explanation
    // document.getElementById('content').appendChild(explanation)
    // explanation.setAttribute ('id', "details")

}

getData()