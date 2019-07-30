### 总结

- Node.js规定一个***JavaScript***文件就是一个模块（module）

- 模块内部使用 ***export对象*** 对成员进行导出

- 外部使用 ***require方法*** 对其他模块进行导入，***require方法*** 返回的对象就是 ***export对象***

- 此外也可以使用 ***module.export*** 对象进行成员导出

- 注意：

  - ***module.export*** 句柄指向的对象和 ***export*** 指向的对象***默认***是相同的

  - 但是当用户对***module.export*** 重新赋值之后，***export*** 指向的对象失效，一切情况以***module.export*** 指向的对象为准。

  - 因此当 ***重新指定export*** 的指向的对象是 ***错误*** 的写法

    ```javascript
    /**
     * 这种写法是错误的，无法暴露变量x，y的。因为module.export指向未变
     * 在其他文件中require返回的还是module.export指向的对象。
     */
    export = {
      x:1,
      y:2
    }
    ```

