Vue.component('nieto',{
template: //html
`
<div :class="['bg-success']">
<h2>{{message}}</h2>
</div>
`,
data(){
return{
message:'Componente 2'
}
}
});