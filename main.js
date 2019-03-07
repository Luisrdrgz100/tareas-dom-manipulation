document.addEventListener( 'DOMContentLoaded', function () {
    let createTemplateHtmlString = text =>  `<div class="task">
            <div class="text">${text}</div>
            <button>remove</button>
        </div>`
    let createNodeFromString = string => {
        let divNode = document.createElement('div');
        divNode.innerHTML = string;
        return divNode.firstChild;
    }
    let inputNode = document.querySelector( 'header input' );

    inputNode.addEventListener('keyup', function(event){
        if (event.keyCode === 13) {
            //get value from input
            let newTaskText = event.target.value;
            // console.log(newTaskText);

            // creat html string from value text
            let newTaskHtmlString = createTemplateHtmlString(newTaskText)
            // console.log(newTaskHtmlString);

            // node creation from html string
            let newTaskNode = createNodeFromString(newTaskHtmlString)
            // console.log(newTaskNode)

            // node inject to DOM in main
            document.querySelector('main').appendChild(newTaskNode)

            // clean value
            event.target.value = ''

        }
    })

} )
