<template>
  <section class="w-full">
    <div class="bg-[#000425] flex py-[15px] px-[20px] gap-[20px] flex-wrap lg:bg-[#F8F8FA]">
      <RouterLink to="/" >
        <img src="/icons/arrow-left-dark.svg" alt="Arrow Left Icon" class="cursor-pointer w-[20px] hidden lg:block">
      </RouterLink>
      <RouterLink to="/" >
        <img src="/icons/arrow-left-light.svg" alt="Arrow Left Icon" class="cursor-pointer w-[16px] lg:hidden">
      </RouterLink>
      
      <h4 class="text-[#FFFFFF] text-sm font-bold lg:text-xl lg:text-[#222222]">
        Resumen de compra
      </h4>
    </div>

    <ul class="w-full px-[20px] mt-[50px] mb-[30px] flex flex-col gap-y-[50px] min-[320px]:gap-y-[20px]">
      <li v-for="course in courses" :key="course.id"
        class="grid grid-cols-[100%] gap-x-[20px] gap-y-[20px] min-[320px]:grid-cols-[133px_auto] min-[550px]:grid-cols-[133px_auto_auto]">
        <picture class="flex w-[100%] h-[100%] items-center">
          <img :src="course.image" :alt="course.title" class="w-full rounded-[5px]">
        </picture>

        <div class="flex flex-col justify-between">
          <div class="flex flex-col mb-[12px]">
            <p class="text-[#222222] font-bold text-xs mb-[8px] min-[550px]:text-base">
              {{ course.title }}
            </p>
            <span class="text-[#5640FF] font-bold text-xs min-[550px]:text-sm">
              Dto. {{ course.discount }}%
            </span>
            <span v-if="course.gift" class="text-[#222222] text-xs min-[550px]:text-sm">
              Regalo para: {{ course.gift }}
            </span>
          </div>

          <div class="flex justify-end gap-[5px] flex-wrap">
            <span class="text-[#222222] font-bold text-xs min-[550px]:hidden">
              {{ formatPrice(course.price) }}
            </span>
          </div>
        </div>

        <div class="hidden min-[550px]:flex min-[550px]:justify-end">
          <span class="text-[#222222] font-bold text-base">
            {{ formatPrice(course.price) }}
          </span>
        </div>
      </li>
    </ul>

    <div class="flex justify-between px-[20px] flex-wrap gap-x-[20px] py-[30px] border-solid border-t-[1px] border-[#C4C4C4]">
      <span class="text-[#5640FF] text-xl font-bold">
        Precio final
      </span>
      <span class="text-[#5640FF] text-xl font-bold">
        {{ totalPriceFormatted }}
      </span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        {
          id: 1,
          image: '/imgs/shopping-course.png',
          title: 'Gestión de Envases, Empaques y Embalajes',
          discount: 25,
          price: 269,
          gift: null
        },
        {
          id: 2,
          image: '/imgs/shopping-course.png',
          title: 'Gestión de Envases, Empaques y Embalajes',
          discount: 10,
          price: 269,
          gift: null
        },
        {
          id: 3,
          image: '/imgs/shopping-course.png',
          title: 'Gestión de Envases, Empaques y Embalajes',
          discount: 40,
          price: 269,
          gift: 'panda@gmail.com'
        }
      ]
    };
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString('es-PE', {
        style: 'currency',
        currency: 'PEN'
      });
    }
  },
  computed: {
    totalPrice() {
      return this.courses.reduce((total, course) => {
        const discountedPrice = course.price * (1 - course.discount / 100);
        return total + discountedPrice;
      }, 0);
    },
    totalPriceFormatted() {
      return this.formatPrice(this.totalPrice);
    }
  }
};
</script>
