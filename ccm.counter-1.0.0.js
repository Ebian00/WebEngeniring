(() => {
    const component = {
      name: 'counter',
      version:[1,0,0],
      ccm: 'https://ccmjs.github.io/ccm/ccm.js',
      config: {
        counter: 0,   
        clicks:0   
      },
      Instance: function () {
        const Increament = document.createElement('button');
        const decreament = document.createElement('button');
        Increament.innerText = 'Increament';
        Increament.onclick = () => {
          this.counter+=1;
          this.clicks++;
          this.start()
        };
        decreament.innerText = 'Decreament';
        decreament.onclick = () => {
          this.counter-=1;
          this.clicks++;
          this.start();
        }
        this.start = async () => {
          this.element.innerHTML = `<div> current number of the counter : ${this.counter}</div>
           <div> current number of clicks:  ${this.clicks}</div> </p>`
          this.element.appendChild(Increament)
          this.element.appendChild(decreament)
        
         
        }
      }
    }
  
    let b = "ccm." + component.name + (component.version ? "-" + component.version.join(".") : "") + ".js"; if (window.ccm && null === window.ccm.files[b]) return window.ccm.files[b] = component; (b = window.ccm && window.ccm.components[component.name]) && b.ccm && (component.ccm = b.ccm); "string" === typeof component.ccm && (component.ccm = { url: component.ccm }); let c = (component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/) || ["latest"])[0]; if (window.ccm && window.ccm[c]) window.ccm[c].component(component); else { var a = document.createElement("script"); document.head.appendChild(a); component.ccm.integrity && a.setAttribute("integrity", component.ccm.integrity); component.ccm.crossorigin && a.setAttribute("crossorigin", component.ccm.crossorigin); a.onload = function () { window.ccm[c].component(component); document.head.removeChild(a) }; a.src = component.ccm.url }
  })();

