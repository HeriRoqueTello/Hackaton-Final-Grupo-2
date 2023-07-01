<template>
    <div class="container-c py-12 px-12 shadow-xl grid grid-rows-3 grid-column-3 mx-auto right-aligned mr-32">
        <div class="content-center col-start-3 w-80">
            <h2 class="text-[#5640FF] title text-left ">¡Compra exitosa!</h2>
            <p class="paragraph my-3">La boleta o factura solicitada será enviada a tu correo en unos momentos.</p> 
            <button class="bg-[#5640ff] rounded-xl text-white text-center next py-4 mt-4">Volver a mis cursos</button>  
        </div>
        
    </div>
</template>
<script>

export default {

    data(){
        return {

        }   
    },
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.container-c{
    max-width: 433px;
    max-height: 283px;
    border-radius: 5px;
}

.title{
    font-family: 'Poppins',sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #222222;
}

.next {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    width: 90%;
    font-weight: bold;
}

.paragraph {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    text-align: left;
}

.right-aligned {
  /* Ajustar el posicionamiento a la derecha */
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

</style>