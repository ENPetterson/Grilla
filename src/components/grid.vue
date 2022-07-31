<template>
  <section>
    <h3 id="titulo">Grilla de Clientes<v-btn icon color="green">
      <v-icon>mdi-cached</v-icon>
    </v-btn></h3>
      <v-text-field
        v-model="buscar"
        label="Buscar cliente"
        class="barra"
      ></v-text-field>
    <div data-app class="grilla-container">
      <v-data-table @click:row="rowClick" item-key="nombre"
          :headers="headers"
          :items="clientes"
          v-model="selected"
          show-select
          class="elevation-1"
      >
        <v-container id="asd">
          <v-row>
            <v-col cols="5" md="3">
              <v-layout v-for="cliente in clientes" :key="cliente.id">
                <v-flex>
                  <div>{{cliente.nombre}}</div>
                </v-flex>          
                <v-flex>
                  <div>{{cliente.edad}}</div>
                </v-flex> 
                <v-flex>
                  <div>{{cliente.genero}}</div>
                </v-flex> 
                <v-flex>   
                  <div>{{cliente.nacionalidad}}</div>
                </v-flex> 
                <v-flex>  
                  <div>{{cliente.empleo}}</div>
                </v-flex> 
              </v-layout>
            </v-col>
          </v-row>
        </v-container>
      </v-data-table>
    </div>
    <button id="boton">Agregar cliente</button>
    <button id="boton2">Editar cliente</button>
    <button id="boton3">Eliminar cliente</button>
  </section>
</template>

<script>
import { API } from "../data/API";
export default {
    data() {
        return {
            singleSelect: false,
            clientes: [],
            headers: [
              { text: 'Nombre', value: 'nombre'},
              { text: 'Edad', value: 'edad'},
              { text: 'Genero', value: 'genero'},
              { text: 'Nacionalidad', value: 'nacionalidad'},
              { text: 'Empleo', value: 'empleo'}
            ],
        }
    },
    async created() {
      this.clientes = await API.getClientes();
    },
    methods: {  
      cliente: function(idCliente) {
        return API.getClienteById(idCliente)
    },
      rowClick: function (item, row) {      
      row.select(true);
    }
  }
}
</script> 

<style>

.barra {
  width: 50%;
  margin-left: 50px;
}

#titulo {
  color: hsla(0, 4%, 42%, 0.685);
  font-size: xx-large;
  margin-left: 10px;
}

#boton {
  color: black;
  padding: 10px 20px;
  border: 1px solid black;
  margin-left: 10px;
  margin-top: 10px;
}

#boton2 {
  color: black;
  padding: 10px 20px;
  border: 1px solid black;
}

#boton3 {
  color: black;
  padding: 10px 20px;
  border: 1px solid black;
}


</style>

<!-- #primario {
  text-align: fixed;
  color: white;
  background-color: black;
  border: 1px solid black;
  padding-left: 10px;
}

.secundario {
  color: green;
  border: 1px solid black;
  padding-left: 10px;
}

.tabla .v-table tbody tr:not(:last-child) {
  border: 1px solid black;
} -->