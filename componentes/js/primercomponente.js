Vue.component('primercomponente',{
template:// html
`
<div :class="[fondoPrimer,'container','p-5']">
<div style="padding:20%" :class="{'bg-warning':color,'bg-dark':!color,'text-primary':color,'text-white':!color,'p-4':!color,'p-4':color}">
<h3>dato del primer componente</h3>
<strong v-text="datoPrimerComponente"></strong>
<h3>{{miDatoApelllido}}</h3>
<br>
<input type='text' v-model="fondoPrimer">
<segundocomponente :miDato="datoPrimerComponente" @DatoApellido="miDatoApelllido=$event"></segundocomponente>
</div>
</div>
`,
data(){
return{
color:false,
fondoPrimer:'bg-success',
datoPrimerComponente:'Soy dato del primer componente',
miDatoApelllido:''  
}    
}
});