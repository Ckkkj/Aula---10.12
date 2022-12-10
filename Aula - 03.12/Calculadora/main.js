class Calculadora{
    constructor(){
        this.display = document.querySelector('.display')
        this.inicia = () =>{
            this.capturaCliques();
            this.capturaEnter();
        };

        this.capturaEnter = () =>{
            document.addEventListener('keyup', event =>{
                if(event.keyCode === 13){
                    this.realizaConta();
                }
            });
        };
        this.capturaCliques = () =>{
            document.addEventListener('click', e =>{
                const el = e.target;
                if(el.classList.contains('btn-num'))
                    this.addNumDisplay(el);
                if(el.classList.contains('btn-clear'))
                    this.clear();
                if(el.classList.contains('btn-del'))
                    this.del();
                if(el.classList.contains('btn-equal'))
                    this.realizaConta();
            });
        };
            this.realizaConta = () =>{
                const conta = eval(this.display.value);
                try {
                    if(!conta){
                        alert('Conta Inválida')
                        return;
                    }
                    this.display.value = conta;
                }catch(e) {
                    alert('Conta inválida');
                    return;
                }
                };
                 this.addNumDisplay = el =>{
                    this.display.value += el.innerText;
                    this.display.focus();
                 };

                 this.clear = () =>{
                    this.del = () => this.display.value.slice (0, -1);
                 }
            }
    }

const calculadora = new Calculadora();
calculadora.inicia();
