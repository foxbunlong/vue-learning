Vue execute behind the scene with Proxy to create reactivity
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

Virtual DOM which build up the mechanism of Vue
https://vuejs.org/guide/extras/rendering-mechanism.html#virtual-dom

Vue CLI
1. Create new app:
 `vue create app-name`

Plugins for VScode
1. Vetur
2. Prettier
    -Add new config for Vue in settings:
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },

Routing
1. Install package
    yarn add vue-router
2. Animated route
    yarn add vue-router

State management
1. Install VueX
    yarn add vuex@next

Javascript animation library
1. Greensock https://greensock.com/

Deploy to Firebase
1. Setup as required on Firebase
2. Init project: Configure as a single-page app -> y (this will re init the routing in client site)
3. No overriding the index.html

===== ADVANCED =====
Mixin
- Mixin class is in javascript files
- Mixin now can be shared between components. No need to import child class in all components
- Mixin data variables can be overriden by add the same variables in target components