import vueBytepath from './vue-bytepath.js';
import reactBytepath from './react-bytepath';

// let bytepath = {
//     vue: vuebytepath,
//     react: {},
//
//     /**
//      * Initialize bytepath into the framework of your choice
//      * @param framework the name of the framework you are using. vue only for now
//      * @returns Object
//      */
//     init(framework = 'vue') {
//         return this[framework].init();
//     }
// }

let bytepath = (framework = 'vue') => {
    let supportedFrameworks = {
        'vue': vueBytepath,
        'react': reactBytepath,
    }

    return supportedFrameworks[framework];
}

const defaultToVue = {
    get: function(obj, prop) {
        console.log("trying to find", prop, obj);
        return prop in obj ? obj[prop] : bytepath('vue')[prop];
    },
};

let retval = new Proxy(bytepath, defaultToVue);

export default retval;
