import { ComponentPublicInstance, defineComponent, VNode } from 'vue';


const colorable={
 
    props:{
        bgColor: {
            type: String,
            default: "bg-navy-blue-500",
        },
        bgColorHover: {
            type: String,
            default: "",
        },
        textColor: {
            type: String,
            default: "text-white",
        },
    },
    methods: {
        replaceColors(vm:any ,color:string,classes:Array<string>,regex:RegExp){
     
        let _classes=[...classes];
            let index = _classes.findIndex((cl) => {
                return cl.match(regex);
            });
        
            _classes[index] = vm[color];

            return _classes;
        }
    },

}


export default colorable;