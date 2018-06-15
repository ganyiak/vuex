import Vue from 'vue'
import Vuex from 'vuex'
import { setTimeout } from 'timers';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: [
            {name:'马云',price:200},
            {name:'柳传志',price:220},
            {name:'马冬梅',price:620},
            {name:'钢铁侠',price:20}
          ]
    },
    getters: {
        salePro:(state) =>{
            const salePro = state.products.map((pro) =>{
                return {
                    name: "ABC" + pro.name + "CBA",
                    price:"UUU" + pro.price + "UUU"
                };
            });
            return salePro;
        }   
    },
    mutations: {
        reducePrice:(state,payload) =>{
            state.products.forEach((pro) => {
                pro.price -= payload
            })
        }
    },
    actions: {
        reducePrice:(context,payload) =>{
            setTimeout(function(){
                context.commit('reducePrice',payload)
            },3000)
        }
    }
})