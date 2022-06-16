Vue.component('segundocomponente',{
template://html

`
<div :class="['p-4','bg-info']">
<h4>somo el segundo componente</h4>
<h5>{{miDato}}</h5>
<h4 > {{misApellidos}}</h4>
<input type='text' v-model="misApellidos">
</div>
`,
props:['miDato'], /// uso de props para obtener dato del primer componente al segundo
data(){
return{
misApellidos:'Rosales Cadillo'   
}    
},
mounted() {
this.$emit('DatoApellido',this.misApellidos)    
},
});