#Career
* parent : [MoGL](MoGL.md)
* [constructor](#constructor)


**field**

* [vertexCount](#vertexCount) - 지오메트리를 구성하는 버텍스 갯수
* [triangleCount](#triangleCount) - 지오메트리를 구성하는 삼각형 갯수
* [volume](#volume) - 지오메트리의 최대 부피값.
* [position](#position) - 지오메트리를 구성하는 버텍스의 포지션...
* [normal](#normal) - 지오메트리를 구성하는 버텍스의 노멀...
* [uv](#uv) - 지오메트리를 구성하는 버텍스의 UV...
* [color](#color) - 지오메트리를 구성하는 버텍스의 컬러...
* [index](#index) - 지오메트리를 인덱스 배열을 반환

**static**

* [extend](#extend) - 이 클래스를 상속하는 자식클래스를 만...
* [getInstance](#getInstance) - uuid 또는 id를 기반으로 인스턴...
* [count](#count) - 이 클래스로 부터 만들어져 활성화된...
* [error](#error) - 정적함수에서 표준화된 예외를 처리함(...
* [getMD](#getMD) - 해당 클래스를 마크다운 형식으로 문서...

[top](#)

<a name="constructor"></a>
##Constructor

**description**

- Geometry 클래스

**param**

1. vertex:Array or Float32Array - 지오메트리를 구성할 버텍스 배열 정보
2. index:Array or Uint16Array - 지오메트리를 구성할 인덱스 배열 정보
3. ?info:Array - 하나의 정점에 대한 구성요소를 별도로 제공함. 기본값은 ['x','y','z']임

**exception**

- none

**sample**

```javascript
var geo = new Geometry(vertex, index, info);
```

[top](#)

<a name="vertexCount"></a>
###vertexCount

_field_


**description**
