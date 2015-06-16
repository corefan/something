#Mesh
* parent : [Matrix](Matrix.md) < [MoGL](MoGL.md)
* [constructor](#constructor)


**field**

* [material](#material) - 이 Mesh의 재질을 표현하는 [Ma...
* [geometry](#geometry) - 이 Mesh의 기하구조 정보를 가지는...
* [culling](#culling) - 이 Mesh의 기하구조 정보를 가지는...

**static**

* [getMD](#getMD) - 해당 클래스를 마크다운 형식으로 문서...
* [getInstance](#getInstance) - uuid 또는 id를 기반으로 인스턴...
* [extend](#extend) - 이 클래스를 상속하는 자식클래스를 만...
* [error](#error) - 정적함수에서 표준화된 예외를 처리함(...
* [count](#count) - 이 클래스로 부터 만들어져 활성화된...

**constant**

* [cullingNone](#cullingNone) - Mesh Face Culling을 하...
* [cullingFront](#cullingFront) - Mesh FrontFace를 그리지...
* [cullingBack](#cullingBack) - Mesh BackFace를 그리지않음

[top](#)

<a name="constructor"></a>
##Constructor

**description**

기하구조와 재질을 포함할 수 있는 하나의 렌더링 단위인 Mesh를 생성함.

**param**

1. geometry:* - 기하구조체를 받으며 다음과 같은 형식이 올 수 있음.
   * [Geometry](Geometry.md) - 직접 [Geometry](Geometry.md)객체를 지정함.
2. material:* - 해당 기하구조에 적용할 재질을 받으며 다음과 같은 형식이 올 수 있음.
   * [Material](Material.md) - 직접 [Material](Material.md) 객체를 지정함.

**exception**

none

**sample**

```javascript
var mesh1 = new Mesh(
   new Geometry( vertex, index ),
   new Material('#f00')
);

// 씬에 등록된 Geometry, Material 사용
var mesh2 = new Mesh( scene.getGeometry(geometryID), scene.getMaterial(materialID) )

//팩토리함수로도 사용가능
var mesh3 = Mesh( scene.getGeometry(geometryID), scene.getMaterial(materialID) );
```

[top](#)

<a name="material"></a>
###material

_field_


**description**

이 Mesh의 재질을 표현하는 [Material](Material.md) 객체

**setting**

*writable*:true, *enumerable*:false, *configurable*:false

**defaultValue**

none

**sample**

```javascript
// 씬에 등록된 재질로 교체할수 있음 - set
mesh1.material = scene.getMaterial(materialID);

// 다른 Mesh에 재질 객체를 알려줄수 있음 - get
mesh2.material = mesh1.material;
```

[top](#)

<a name="geometry"></a>
###geometry

_field_


**description**

이 Mesh의 기하구조 정보를 가지는 [Geometry](Geometry.md) 객체

**setting**

*writable*:true, *enumerable*:false, *configurable*:false

**defaultValue**

none

**sample**

```javascript
// 씬에 등록된 기하구조로 교체할수 있음 - set
mesh1.geometry = scene.getGeometry(geometryID);

// 다른 Mesh에 기하구조 객체를 알려줄수 있음 - get
mesh2.geometry = mesh1.geometry;
```

[top](#)

<a name="culling"></a>
###culling

_field_


**description**

이 Mesh의 기하구조 정보를 가지는 [Geometry](Geometry.md) 객체

**setting**

*writable*:true, *enumerable*:false, *configurable*:false

**defaultValue**

none

**sample**

```javascript
// 씬에 등록된 기하구조로 교체할수 있음 - set
mesh1.geometry = scene.getGeometry(geometryID);

// 다른 Mesh에 기하구조 객체를 알려줄수 있음 - get
mesh2.geometry = mesh1.geometry;
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

<a name="cullingNone"></a>
###cullingNone

_const_


**description**

Mesh Face Culling을 하지 않음.

**setting**

*writable*:false, *enumerable*:false, *configurable*:false

**value**

cullingNone

**sample**

```javascript


```

[top](#)

<a name="cullingFront"></a>
###cullingFront

_const_


**description**

Mesh FrontFace를 그리지 않음.

**setting**

*writable*:false, *enumerable*:false, *configurable*:false

**value**

cullingFront

**sample**

```javascript


```

[top](#)

<a name="cullingBack"></a>
###cullingBack

_const_


**description**

Mesh BackFace를 그리지않음

**setting**

*writable*:false, *enumerable*:false, *configurable*:false

**value**

cullingBack

**sample**

```javascript


```

[top](#)
