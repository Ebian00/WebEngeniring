( () => {
    const component = {
        name: 'menu',
        ccm: 'https://ccmjs.github.io/ccm/ccm.js',
        config: {
           data: ["HTML"," CSS", "JS" , "OTHER"],
           version: [1,0,0]
        },
        
        Instance: function() {   
                     
            
            this.start = async () => {  

                console.log(this.data)
                this.element.innerHTML= `
                <div class='table'>
                <button  @click="${this.clickHandlerHTML.bind(this)}" id = '${this.messages[0]}'  > ${this.messages[0]} </button>
                <button  @click="${this.clickHandlerCSS.bind(this)}" id = '${this.messages[1]}'  > ${this.messages[1]} </button>
                <button  @click="${this.clickHandlerJS.bind(this)}" id = '${this.messages[2]}'  > ${this.messages[2]} </button>
                <button  @click="${this.clickHandlerOTHER.bind(this)}" id = '${this.messages[3]}'  > ${this.messages[3]} </button>
              </div>
                `;
                var list = this.element.querySelector("ul");
               this.data.forEach(menuBtn => {
                    const listItem = document.createElement('li');
                    list.appendChild(listItem);
                    listItem.innerHTML = `<button>${menuBtn}</button>`;
                });
                function insertCheckText(){
                    document.getElementById('text').innerHTML="check";
               
                   }
                  function clickHandlerHTML() {
                       const ul = document.getElementById('ulbu');
                       ul.innerHTML = "";
                       const listItem = document.createElement('li');
                  ul.appendChild(listItem);
                  listItem.innerHTML =   " <button id = 'headings' class='button1'> headings </button> " ; 
                  const a = document.getElementById('headings');
                  a.onclick = function (){
                    document.getElementById('text').innerHTML = "some text from heading";
                   }
                   const listItem1 = document.createElement('li');
                  ul.appendChild(listItem1);
                  listItem1.innerHTML =   " <button id = 'paragraphs' class='button1'> paragraphs </button> " ; 
                  const paragraphs = document.getElementById('paragraphs');
                  paragraphs.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from paragraphs";
                   }
                   const listItem2 = document.createElement('li');
                  ul.appendChild(listItem2);
                  listItem2.innerHTML =   " <button id = 'links' class='button1'> links </button> " ; 
                  const links = document.getElementById('links');
                  links.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from links";
                         }
                   const listItem3 = document.createElement('li');
                  ul.appendChild(listItem3);
                  listItem3.innerHTML =   " <button id = 'images' class='button1'> images </button> " ; 
                  const images = document.getElementById('images');
                  images.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from images";
                   }
                   const listItem4 = document.createElement('li');
                  ul.appendChild(listItem4);
                  listItem4.innerHTML =   " <button id = 'tables' class='button1'> tables </button> " ; 
                  const tables = document.getElementById('tables');
                  tables.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from tables";
               
                  }
                 
                   }
                  function  clickHandlerCSS() {
                       const ul = document.getElementById('ulbu');
                       ul.innerHTML = "";
                       const listItem = document.createElement('li');
                  ul.appendChild(listItem);
                  listItem.innerHTML =   " <button id = 'selectors' class='button1'> selectors </button> " ; 
                  const selectors = document.getElementById('selectors');
                  selectors.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from selectors";
                   }
                   const listItem1 = document.createElement('li');
                  ul.appendChild(listItem1);
                  listItem1.innerHTML =   " <button id = 'colors' class='button1'> colors </button> " ; 
                  const colors = document.getElementById('colors');
                  colors.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from colors";
                   }
                   const listItem2 = document.createElement('li');
                  ul.appendChild(listItem2);
                  listItem2.innerHTML =   " <button id = 'boxes' class='button1'> boxes </button> " ; 
                  const boxes = document.getElementById('boxes');
                  boxes.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from boxes";
                   }
                   const listItem3 = document.createElement('li');
                  ul.appendChild(listItem3);
                  listItem3.innerHTML =   " <button id = 'display' class='button1'> display </button> " ; 
                  const display = document.getElementById('display');
                  display.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from display";
                   }
                   const listItem4 = document.createElement('li');
                  ul.appendChild(listItem4);
                  listItem4.innerHTML =   " <button id = 'float' class='button1'> float </button> " ; 
                  const float = document.getElementById('float');
                  float.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from float";
                   }
                  }
               
                   
                   function clickHandlerJS() {
                       const ul = document.getElementById('ulbu');
                       ul.innerHTML = "";
                       const listItem = document.createElement('li');
                  ul.appendChild(listItem);
                  listItem.innerHTML =   " <button id = 'functions' class='button1'> functions </button> " ; 
                  const functions = document.getElementById('functions');
                  functions.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from functions";
               
                   }
                   const listItem1 = document.createElement('li');
                  ul.appendChild(listItem1);
                  listItem1.innerHTML =   " <button id = 'objects' class='button1'> objects </button> " ; 
                  const objects = document.getElementById('objects');
                  objects.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from objects";
                   }
                   const listItem2 = document.createElement('li');
                  ul.appendChild(listItem2);
                  listItem2.innerHTML =   " <button id = 'scope' class='button1'> scope </button> " ; 
                  const scope = document.getElementById('scope');
                  scope.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from scope";
               
                   }
                   const listItem3 = document.createElement('li');
                  ul.appendChild(listItem3);
                  listItem3.innerHTML =   " <button id = 'events' class='button1'> events </button> " ; 
                  const events = document.getElementById('events');
                  events.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from events";
                   }
                   const listItem4 = document.createElement('li');
                  ul.appendChild(listItem4);
                  listItem4.innerHTML =   " <button id = 'hoisting' class='button1'> hoisting </button> " ; 
                  const hoisting = document.getElementById('hoisting');
                  hoisting.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from hoisting";
                   }
                   const listItem5 = document.createElement('li');
                  ul.appendChild(listItem5);
                  listItem5.innerHTML =   " <button id = 'strict_mode' class='button1'> strict_mode </button> " ; 
                  const strict_mode = document.getElementById('strict_mode');
                  strict_mode.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from strict_mode";
                   }
                   const listItem6 = document.createElement('li');
                  ul.appendChild(listItem6);
                  listItem6.innerHTML =   " <button id = 'JSON' class='button1'> JSON </button> " ; 
                  const jso = document.getElementById('JSON');
                  jso.onclick = function (){
                   document.getElementById('text').innerHTML = "some text from JSON";
                   }
                  
                   }
                   function clickHandlerOTHER() {
                       const ul = document.getElementById('ulbu');
                       ul.innerHTML = "";
                       document.getElementById('text').innerHTML = "some text from Others";
               
                       alert('Hello from other');
                   }
   
            }
        }
    };
    let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
  })();
  
  
  