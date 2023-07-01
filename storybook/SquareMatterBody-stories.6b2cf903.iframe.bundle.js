"use strict";(self.webpackChunk_pixi_module=self.webpackChunk_pixi_module||[]).push([[848],{"./src/stories/SquareMatterBody.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>SquareMatterBody_stories,squareMatterBody:()=>squareMatterBody});var matter=__webpack_require__("./node_modules/matter-js/build/matter.js"),lib=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),core_lib=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var SquareMatterBody=function(_Graphics){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(SquareMatterBody,_Graphics);var _super=_createSuper(SquareMatterBody);function SquareMatterBody(world,params,options){var _params$angle,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SquareMatterBody),function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_assertThisInitialized(_this=_super.call(this)),"disableSelfCleanup",!1),_this.world=world;var x=params.x,y=params.y,width=params.width,height=params.height,color=params.color;return _this.body=matter.Bodies.rectangle(x,y,width,height,options),matter.Composite.add(world,_this.body),_this.body.angle=null!==(_params$angle=params.angle)&&void 0!==_params$angle?_params$angle:0,_this.beginFill(color).drawRect(-width/2,-height/2,width,height),core_lib.vB.shared.add(_this.update,_assertThisInitialized(_this)),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(SquareMatterBody,[{key:"update",value:function update(){this.x=this.body.position.x,this.y=this.body.position.y,this.rotation=this.body.angle,!this.disableSelfCleanup&&this.y-this.height>window.innerHeight&&this.destroy()}},{key:"destroy",value:function destroy(options){var _this$parent;core_lib.vB.shared.remove(this.update,this),null===(_this$parent=this.parent)||void 0===_this$parent||_this$parent.removeChild(this),matter.Composite.remove(this.world,this.body),_get(_getPrototypeOf(SquareMatterBody.prototype),"destroy",this).call(this,options)}},{key:"beforeUnload",value:function beforeUnload(){}},{key:"resetPosition",value:function resetPosition(x,y){matter.Body.setPosition(this.body,{x,y}),matter.Body.setVelocity(this.body,{x:0,y:0}),matter.Body.setAngularVelocity(this.body,0)}}]),SquareMatterBody}(lib.TC),argTypes=__webpack_require__("./src/stories/utils/argTypes.ts"),display_lib=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs");function SquareMatterBody_stories_typeof(obj){return SquareMatterBody_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},SquareMatterBody_stories_typeof(obj)}function SquareMatterBody_stories_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,SquareMatterBody_stories_toPropertyKey(descriptor.key),descriptor)}}function SquareMatterBody_stories_toPropertyKey(arg){var key=function SquareMatterBody_stories_toPrimitive(input,hint){if("object"!==SquareMatterBody_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==SquareMatterBody_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===SquareMatterBody_stories_typeof(key)?key:String(key)}var args={restitution:1},Story=function(){function Story(props){!function SquareMatterBody_stories_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Story),function SquareMatterBody_stories_defineProperty(obj,key,value){return(key=SquareMatterBody_stories_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(this,"view",new display_lib.W2),this.engine=matter.Engine.create(),this.body=new SquareMatterBody(this.engine.world,{x:window.innerWidth/2,y:-20,width:50,height:50,color:"red"},{restitution:props.restitution}),this.body.disableSelfCleanup=!0;var leftBody=new SquareMatterBody(this.engine.world,{x:window.innerWidth/2-30,y:window.innerHeight/2-70,width:50,height:50},{isStatic:!0}),middleBody=new SquareMatterBody(this.engine.world,{x:window.innerWidth/2+100,y:window.innerHeight/2-30,width:50,height:50},{isStatic:!0}),rightBody=new SquareMatterBody(this.engine.world,{x:window.innerWidth/2+30,y:window.innerHeight/2+70,width:50,height:50},{isStatic:!0});this.view.addChild(this.body,leftBody,middleBody,rightBody),matter.Runner.run(this.engine)}return function SquareMatterBody_stories_createClass(Constructor,protoProps,staticProps){return protoProps&&SquareMatterBody_stories_defineProperties(Constructor.prototype,protoProps),staticProps&&SquareMatterBody_stories_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Story,[{key:"update",value:function update(){this.body&&this.body.y>window.innerHeight&&this.body.resetPosition(window.innerWidth/2,-20)}}]),Story}(),squareMatterBody=function squareMatterBody(params){return new Story(params)};const SquareMatterBody_stories={parameters:{storySource:{source:"import { Engine, Runner } from 'matter-js';\nimport { SquareMatterBody } from '../SquareMatterBody';\nimport { argTypes, getDefaultArgs } from './utils/argTypes';\nimport { Container } from '@pixi/display';\n\nconst args = {\n    restitution: 1\n};\n\ntype Args = typeof args;\n\nclass Story\n{\n    view = new Container();\n    engine: Engine;\n    body: SquareMatterBody;\n\n    constructor(props: Args)\n    {\n        // Step 1: create matterJS engine\n        this.engine = Engine.create();\n\n        // Step 2: create hybrid pixiJS-matterJS body component\n        this.body = new SquareMatterBody(\n            this.engine.world, // pass matterJS world as parameter\n            {\n                x: window.innerWidth / 2,\n                y: -20,\n                width: 50,\n                height: 50,\n                color: 'red',\n            }, {\n                restitution: props.restitution,\n            });\n\n        // by default, body will be destroyed and removed form the world when it falls off the screen\n        // we are disabling it here as we will reset the body position manually in the update loop\n        this.body.disableSelfCleanup = true;\n\n        const leftBody = new SquareMatterBody(this.engine.world, {\n            x: (window.innerWidth / 2) - 30,\n            y: (window.innerHeight / 2) - 70,\n            width: 50,\n            height: 50,\n        }, {\n            isStatic: true,\n        });\n\n        const middleBody = new SquareMatterBody(this.engine.world, {\n            x: (window.innerWidth / 2) + 100,\n            y: (window.innerHeight / 2) - 30,\n            width: 50,\n            height: 50,\n        }, {\n            isStatic: true,\n        });\n\n        const rightBody = new SquareMatterBody(this.engine.world, {\n            x: (window.innerWidth / 2) + 30,\n            y: (window.innerHeight / 2) + 70,\n            width: 50,\n            height: 50,\n        }, {\n            isStatic: true,\n        });\n\n        // Step 3: Add hybrid pixiJS-matterJS body to the stage\n        this.view.addChild(this.body, leftBody, middleBody, rightBody);\n\n        // Step 4: Run matterJS engine\n        Runner.run(this.engine);\n    }\n\n    update()\n    {\n        if (!this.body) return;\n\n        if (this.body.y > window.innerHeight)\n        {\n            this.body.resetPosition(window.innerWidth / 2, -20);\n        }\n    }\n}\n\nexport const squareMatterBody = (params: any) => new Story(params);\n\nexport default {\n    title: 'Basic',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args)\n};\n",locationsMap:{"square-matter-body":{startLoc:{col:32,line:85},endLoc:{col:66,line:85},startBody:{col:32,line:85},endBody:{col:66,line:85}}}}},title:"Basic",argTypes:(0,argTypes.P)(args),args:(0,argTypes.V)(args)};var __namedExportsOrder=["squareMatterBody"]},"./src/stories/utils/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{P:()=>argTypes,V:()=>getDefaultArgs});var controls={select:{control:{type:"select"}},check:{control:{type:"check"}},color:{control:{type:"color"}},count:{control:{type:"range"}},type:{control:{type:"radio"}},date:{control:{type:"date"}},switch:{control:{type:"boolean"}}},argTypes=function argTypes(args){var exportArgTypes={};for(var key in args)if("number"==typeof args[key]){var min=0,number=args[key];(key.includes("font")||key.includes("amount"))&&(min=1),exportArgTypes[key]=number>=0?number>=100?{control:{type:"range",min,max:1e3,step:10}}:number>10?{control:{type:"range",min,max:100,step:1}}:number<=1?{control:{type:"range",min,max:1,step:.1}}:{control:{type:"range",min,max:10,step:1}}:number<=-100?{control:{type:"range",min:-1e3,max:1e3,step:10}}:number<-10?{control:{type:"range",min:-100,max:100,step:10}}:number>=-1?{control:{type:"range",min:-1,max:0,step:.1}}:{control:{type:"range",min:-10,max:10,step:1}}}else switch(getArgType(key)&&(exportArgTypes[key]=getArgType(key)),_typeof(args[key])){case"object":exportArgTypes[key]={},exportArgTypes[key]=_objectSpread({},controls.select),Array.isArray(args[key])?exportArgTypes[key].options=args[key]:exportArgTypes[key].options=Object.keys(args).map((function(key){return args[key]}));break;case"boolean":exportArgTypes[key]=controls.switch}return exportArgTypes};function getArgType(type){for(var control in controls)if(type.toLowerCase().indexOf(control)>-1)return controls[control]}var getDefaultArgs=function getDefaultArgs(args){var exportArgs={};for(var key in args)if("object"===_typeof(args[key]))Array.isArray(args[key])&&(exportArgs[key]=args[key][0]);else exportArgs[key]=args[key];return exportArgs}}}]);