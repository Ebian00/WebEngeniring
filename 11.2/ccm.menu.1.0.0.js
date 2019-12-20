( () => {
    const component = {
        name: 'menu',
        ccm: 'https://ccmjs.github.io/ccm/ccm.js',
        config: {
           data: ["HTML"," CSS", "JS" , "OTHER"]
            
        },
        Instance: function() {            
            this.start = async () => {  

                console.log(this.data)
                this.element.innerHTML= `<div id = 'menu'> <ul style="list-style-type:none"></ul><div>`
                var list = this.element.querySelector("ul");
               this.data.forEach(menuBtn => {
                    const listItem = document.createElement('li');
                    list.appendChild(listItem);
                    listItem.innerHTML = `<button>${menuBtn}</button>`;
                });
            }
        }
    };
    let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
  })();
  
  
  