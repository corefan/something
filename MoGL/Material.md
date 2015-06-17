#Material
* parent : [MoGL](MoGL.md)
* [constructor](#constructor)


**field**

* [wireFrameColor](#wireFrameColor) - Field of Material
* [wireFrame](#wireFrame) - Field of Material
* [shading](#shading) - Field of Material
* [lambert](#lambert) - Field of Material
* [isLoaded](#isLoaded) - Field of Material
* [diffuse](#diffuse) - Field of Material
* [count](#count) - Field of Material
* [color](#color) - Field of Material

**method**

* [removeTexture](#removeTexture) - addTexture를 통해 등록된 텍...
* [addTexture](#addTexture) - [Mesh](Mesh.md)를 통해...

**static**

* [getMD](#getMD) - 해당 클래스를 마크다운 형식으로 문서...
* [getInstance](#getInstance) - uuid 또는 id를 기반으로 인스턴...
* [extend](#extend) - 이 클래스를 상속하는 자식클래스를 만...
* [error](#error) - 정적함수에서 표준화된 예외를 처리함(...
* [count](#count) - 이 클래스로 부터 만들어져 활성화된...

**event**

* [changed](#changed) - Event of Material

[top](#)

<a name="constructor"></a>
##Constructor

**description**

모든 재질의 부모가 되는 클래스로 Material 자체는 아무런 빛의 속성을 적용받지 않는 재질임.
* Material의 메서드는 대부분 메서드체이닝을 지원함.

**param**

?color:string - 재질의 기본적인 색상. 생략하면 색상 없음. 다음과 같은 형태가 올 수 있음.
r, g, b, a : 각각 0~1 사이의 소수를 받으며 각각 대응함.

**exception**

none

**sample**

```javascript
var mat1 = new Material('#f00');
var mat2 = new Material('#ff0000');
var mat3 = new Material('#ff00000.8');
var mat4 = new Material( 0xff/0xff, 0xaf/0xff, 0x45/0xff, 0.5 );

//팩토리함수로도 사용가능
var mat5 = Material('#ff00000.8');
```

[top](#)

<a name="wireFrameColor"></a>
###wireFrameColor

_field_


**description**

Field of Material

**setting**

*writable*:true, *enumerable*:false, *configurable*:false

**defaultValue**

none

**sample**

```javascript
//none
```

[top](#)

<a name="wireFrame"></a>
###wireFrame

_field_


**description**

Field of Material

**setting**

*writable*:true, *enumerable*:false, *configurable*:false

**defaultValue**

none

**sample**

```javascript
//none
```

[top](#)

<a name="shading"></a>
###shading

_field_


**description**

Field of Material

**setting**

*writable*:true, *enumerable*:false, *configurable*:false

**defaultValue**

none

**sample**

```javascript
//none
```

[top](#)

<a name="lambert"></a>
###lambert

_field_


**description**

Field of Material

**setting**

*writable*:true, *enumerable*:false, *configurable*:false

**defaultValue**

none

**sample**

```javascript
//none
```

[top](#)

<a name="isLoaded"></a>
###isLoaded

_field_


**description**

Field of Material

**setting**

*writable*:false, *enumerable*:false, *configurable*:false

**defaultValue**

none

**sample**

```javascript
//none
```

[top](#)

<a name="diffuse"></a>
###diffuse

_field_


**description**

Field of Material

**setting**

*writable*:true, *enumerable*:false, *configurable*:false

**defaultValue**

none

**sample**

```javascript
//none
```

[top](#)

<a name="count"></a>
###count

_field_


**description**

Field of Material

**setting**

*writable*:false, *enumerable*:false, *configurable*:false

**value**

count

**sample**

```javascript
//none
```

[top](#)

<a name="color"></a>
###color

_field_


**description**

Field of Material

**setting**

*writable*:true, *enumerable*:false, *configurable*:false

**defaultValue**

none

**sample**

```javascript
//none
```

[top](#)

<a name="removeTexture"></a>
###removeTexture(type, texture)

_method_


**description**

addTexture를 통해 등록된 텍스쳐를 제거함.

**param**

1. type
2. texture

**exception**

none

**return**

this - 메소드체이닝을 위해 자신을 반환함 - 메서드체이닝을 위해 자신을 반환함.

**sample**

```javascript
var mat1 = new Material('#f00').addTexture('temp');
mat.removeTexture('temp');
```

[top](#)

<a name="addTexture"></a>
###addTexture(type:string, textureId:string, ?index:int, ?blendMode:string)

_method_


**description**

[Mesh](Mesh.md)를 통해 최종적으로 포함될 [Scene](Scene.md)에 등록된 textureId를 사용함. 같은 textureId는 두번 등록되지 않음.
* [Scene](Scene.md)에 직접 등록되는 경우는 id를 [addMaterial](Scene.md#addmaterial-idstring-materialmaterial-)시점에 평가함.
* [Mesh](Mesh.md)에서 직접 생성하여 삽입하는 경우는 [addChild](Scene.md#addchild-idstring-meshmesh-)시점에 평가함.
* 이미 직간접적으로 [Scene](Scene.md)에 포함된 경우는 메서드호출시점에 평가함.

**param**

1. type:string
2. textureId:string
3. ?index:int
4. ?blendMode:string

**exception**

none

**return**

this - 메소드체이닝을 위해 자신을 반환함 - 메서드체이닝을 위해 자신을 반환함.

**sample**

```javascript
var lobby = world.getScene('lobby');

// 텍스쳐용 이미지 등록
lobby.addTexture( 'floor', document.getElementById('img0') );
lobby.addTexture( 'scratch', document.getElementById('img1') );

// Material 생성 및 Scene에 등록
var mat = lobby.addMaterial( 'floor', new Material()).getMaterial('floor');

try{
    //이미 Scene에 등록된 Material이므로 메서드 호출시점에 평가
    mat.addTexture('floor1');  //floor1가 존재하지 않으므로 에러발생
}catch(e){
    console.log( e ); // 'Material.addTexture:0'
    mat.addTexture('floor'); //floor는 존재하므로 문제없음.
}
//다중 texture 등록
mat.addTexture('scratch', null, BlendMode.multiply );

try{
    //이미 등록된 textureId를 다시 등록하려고 하면 에러발생.
    mat.addTexture('floor');
}catch(e){
    console.log(e); //'Material.addTexture:1'
}

//미등록된 Material이므로 무조건 통과됨.
var mat1 = new Material('#f00').addTexture('temp');
```

[top](#)

<a name="getMD"></a>
###getMD()

_static_


**description**

해당 클래스를 마크다운 형식으로 문서화하여 출력함

**param**


**exception**

none

**return**

string - 클래스에 대한 문서 마크다운

**sample**

```javascript
//none
```

[top](#)

<a name="getInstance"></a>
###getInstance(uuid:string)

_static_


**description**

uuid 또는 id를 기반으로 인스턴스를 얻어냄

**param**

1. uuid:string

**exception**

undefined.getInstance:u

**return**

Object - 해당되는 인스턴스

**sample**

```javascript
//none
```

[top](#)

<a name="extend"></a>
###extend(className:string, constructor:function)

_static_


**description**

이 클래스를 상속하는 자식클래스를 만들 수 있는 정의자(Defineder)를 얻음

**Defineder class의 메소드**

* 각 메서드는 체이닝됨
* Matrix = MoGL.extend('Matrix', function(){..}).static(..).field(..).build(); 형태로 사용
* field('x',{value:30}) - 속성을 정의함
* method('rotate',{value:function(){}}) - 메서드를 정의함
* constant('normalX',{value:'normalX'}) - 상수를 정의함
* event('updated',{value:'updated'}) - 이벤트를 정의함
* static('toString',{value:function(){}}) - 정적메서드를 정의함
* build() - 입력된 결과를 종합하여 클래스를 생성함

**param**

1. className:string
2. constructor:function

**exception**

none

**return**

Defineder - 클래스를 정의할 수 있는 생성전용객체

**sample**

```javascript
//none
```

[top](#)

<a name="error"></a>
###error(method:string, id:int)

_static_


**description**

정적함수에서 표준화된 예외를 처리함(정적함수 내부에서 사용)

**param**

1. method:string
2. id:int

**exception**

none

**return**

none

**sample**

```javascript
//none
```

[top](#)

<a name="count"></a>
###count()

_static_


**description**

이 클래스로 부터 만들어져 활성화된 인스턴스의 수

**param**


**exception**

none

**return**

int - 활성화된 인스턴스의 수

**sample**

```javascript
//none
```

[top](#)

<a name="changed"></a>
###changed

_event_


**description**

Event of Material

**setting**

*writable*:false, *enumerable*:false, *configurable*:false

**value**

changed

**sample**

```javascript
//none
```

[top](#)
