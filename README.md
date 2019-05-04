#### {} && {{}}
#### props
#### 子处理资料传递去母
#### function || class 
#### state || setState
#### React.Component || Component
#### event in React
#### life cycle
#### loading and display
#### this point to where?

* 组件 - 去App - 最后去index

#### function || class 
<p>能用function去写但是他不能setState也不能用lifeCycle hooks</p>
<p>function写的是用 return ( code to render ), 而class写的是 render(){return( code to render )}</p>

#### {} && {{}}
* {里面的是javascript}
* {{里面的是Object}} 所以是 {a: hi, b: halo}

#### props
<p>想象成是一个桥，帮助传递value去另外一个Component</p>
<p>从app(子体)传资料去另外一个Component(母体)，而不是Component传递给App</p>
<p>因为在ContactCard里 有一个Obj contact 里面的资料就会传递给ContactCard的母体 通过props</p>
<p>子体里收到资料 在母体写props去接收子体资料</p>

``` javascript
// App.js
import ContactCard from "./ContactCard";
function App(){
    return (
        <div>
            <ContactCard
                contact={{
                    name: "Mr. whoareyou",
                    imgUrl:"http://placekitten.com/300/200",
                    phone:"123333445",
                    email:"woshishui@hotmail.com"
                }}
            />
        </div>       
    )
}
// ContactCard
function ContactCard(props){
    return (
        <div className="contact-card">
          <img src={props.contact.imgUrl} />
          <h3>{props.contact.name}</h3>
          <p>Phone: {props.contact.phone}</p>  
          <p>Email: {props.contact.email}</p>
        </div> 
    )
}
```

---------------------

#### 子处理资料传递去母
<p>productData是一个资料库，Product是一个母的Component。把资料库的资料一个一个熏染去网页里，利用props去传递value去母Component。</p>
<p>注意：React里循环资料需要给他 一个id，也能利用 i 去添加key值</p>

``` javascript
// app.js
// productsData is a json
import productsData from './jsonDataBase';

function App(){
    // 子体 把资料传去母体， 那样就不必一个一个去写 只要写一行就能显示全部 jsondata
    const productComponents = productsData.map(item => <Product key={item.id} product={item} />)
    return (
        <div>   
            {productComponents}
        </div>       
    )
}
// 如果没有使用 map， 他会写很多个 子体
return(
    <div>
      <Product />
      <Product />
      <Product />
    </div>
)

// 母体 > text 是json里的资料
function Product(props){
    return (
        <div>
           <p>{props.item.text}</p>
        </div>
    )
}

// using class
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: productsData
        }
    }
    render(){
        const productComponents = this.state.map()
        return (
            <div>
              {productComponents}
            </div>
        )
    }
}
```

---------------------

---------------------

#### React.Component || Component

``` javascript
import React from "react";
// or
import React, { Component } from "react"

class App extends React.Component(){}
// or
class App entends Component(){}
```
<p>需要component才能使用 state和setState</p>

#### state || setState

<p>state里需要定义在construction里面，super()也是必须要有</p>
<b>setState</b>

#### this point to where?
<p>setState的方法是继承React.Component！handleClick方法是来之class的，然后它使用setState方法来之React的，所以需要指定this！</p>
<p>在方法里，使用 error function就不需要使用bind去绑定对象了</p>

``` javascript
// bind 是写在constructor(){里}
handleChange = e => {
    // 就不需要bind了，因为它的this.setState的this就是指向class了
}
```

``` javascript
this.state = { count: 0}
// setState的第一个参数 state里的值
handleClick(){
    this.setState(prevState => {
        return{
            count: prevState.count + 1
        }
    })
}
// 如果使用这样 他就不会一直加了 只会更改那个值然后render
this.setState({count: 1})

```

#### life cycle
1. componentDidMount() - only run once - 比喻刚出生
  * 当他出生完后，就能拿到data, 还没出生前是loading
2. componentWillReceiveProps(nextProps)
  * 检查props是不是一样的 如果不一样就会去做些东西
3. shouldComponentUpdate(nextProps, nextState)
  * return true如果要update， false的话就是不要
4. componentWillUnmount()
  * cleanup代码在component显示之前

#### loading and display

``` javascript
class App extends Component {
    constructor(){
        super();
        this.state = {
            laoding:false,
            character: undefined
        }
        
    }

    async componentDidMount(){
        this.setState({laoding: true})
        const a = await fetch("https://swapi.co/api/people/1")
        const res = await a.json();
        this.setState({
            laoding: false,
            character: res.name
        })

    }

    render(){
        const text = this.state.laoding ? "loading.." : this.state.character
        return (
            <div>{text}</div>
        )
    }
}
```

#### event in React
1. onClick
2. onChange
3. onSubmit
4. checked
