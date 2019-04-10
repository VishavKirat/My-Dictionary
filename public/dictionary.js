

function start(){
   let formSubmitButton = document.getElementById('submit');
   axios.get('/dictionary-api')
    .then(function (response) {
        let data = response.data;
        show(data);
    })
    .catch(error =>{
        console.log(error)
    })
   formSubmitButton.addEventListener('click',function(e){
        e.preventDefault();
        let word = document.getElementById('word').value;
        let definition = document.getElementById('definition').value
        axios.post('/dictionary-api',{
            word: word,
            definition: definition
        },show)
          document.getElementById('word').value = '';
          document.getElementById('definition').value =''
   })
}

async function show(data){                   //to display it onto the index.html page
    let showWords = document.querySelector('.showWords')
    let ul = document.createElement('ul');
    showWords.appendChild(ul);
    data.forEach(function(item){
        let li = document.createElement('li');
        ul.appendChild(li)
        li.textContent = `"${item.word}", means ${item.definition}`
    })

}




window.addEventListener('load',start());

