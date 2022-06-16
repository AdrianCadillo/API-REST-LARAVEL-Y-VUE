
/// uso de componentes en Vue.js --> componenetes dentro de otro componete
Vue.component('contenedor',{
template: //html
`<div :class="['bg-danger']">
<h1>{{contador}}</h1>
<button @click="contador++">dar click</button>
<nieto></nieto> 
</div>
`,
 data(){
  return{
  mensaje:'Hola a todos, somos developers' ,
  contador:0  
  }   
 },
 methods: {
 metodoClick(){
    
 }    
 },
});