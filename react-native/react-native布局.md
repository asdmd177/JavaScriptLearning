- ####像素无关

  - ReactNative中没有单位
    - 安卓中View的长宽被自动转成dp，字体被转换成sp
    - ios中单位自动转成pt





![avatar](/Users/asdmd177/Sublime_Workspace/react-native/rn-layout.png)

- ####父视图约束子视图的属性

  - flexDirection

    - row: 主轴是水平方向，从左往右依次排列（start => end）
    - row-reverse: 主轴是水平方向，从右往左
    - column: 主轴是垂直方向，从上往下排列 ***(默认)***
    - column-reverse: 主轴是水平方向，从下往上排列（end => start）

  - flexWrap

    - wrap:  子元素能在父视图里多行排列
    - nowrap: 禁止子元素在父视图里多行排列

  - justifyContent

    - flex-start: 从main start开始排列 ***(默认)***

    - flex-end: 从main end开始排列

    - center: 沿着main axios居中对齐

    - space-between: 沿着main axis均匀排列,第一个元素和main start对齐，最后一个元素和main end对齐

    - space-around: 和space-between相似，但是第一/最后一个元素和

      main start/main end的距离是子元素相隔距离的1/2

  - alignItems

    - flex-start：从cross start开始排列
    - flex-end：从cross end开始排列
    - center：沿着cross axios居中对齐
    - stretch：(不指定宽高)将元素拉伸到容器同样的宽/高度 ***（默认）***







- ####子视图属性

  - alignSelf -- 用于重写父视图的alignItems属性

    - auto： 继承父视图的alignItems属性  ***（默认）***
    - flex-start：从cross start开始排列
    - flex-end：从cross end开始排列
    - center：沿着cross axios居中对齐
    - stretch：将元素拉伸到容器同样的宽/高度

  - flex

    - 定义了子元素和其他子元素的伸缩能力的权重比 默认值是 0

    - 例如，有两个子元素，flex分别是1和2，则子元素都进行拉伸充满父视图，且拉伸的比为1：2

      