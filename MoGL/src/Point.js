var Point = (function () {
    'use strict';
    var pointFrame, pointFrameColor;

    pointFrame = {},
    pointFrameColor = {};

    $setPrivate('Point', {
        pointFrameColor: pointFrameColor,
        pointFrame: pointFrame
    });
    return Matrix.extend('Point',{
        description:"점을 이루는 Mesh",
        param:[
            '?color:string - 재질의 기본적인 색상. 생략하면 색상 없음. 다음과 같은 형태가 올 수 있음.',
            'r, g, b, a : 각각 0~1 사이의 소수를 받으며 각각 대응함.'
        ],
        sample:[
            "var mat1 = new Point(geometry, '#f00');",
            "//팩토리함수로도 사용가능",
            "var mat5 = Material(geometry, '#ff00000.8');"
        ],
        value:function Mesh(geometry, color) {
            pointFrameColor[this] = color,
            pointFrame[this] = geometry
        }
    })
    .field('size', {
        description: "점의 크기",
        sample: [
            '// 미구현상태임'
        ],
        defaultValue:'1'
        //get: $getter(count, false, 0)
    })
    .build();
})();