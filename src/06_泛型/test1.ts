/* 
泛型:
    指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。

    1、定义泛型：在函数/接口/类名的右侧定义一个不确定的类型
    2、使用泛型: 函数形参和函数体 / 接口的属性和方法 / 类的属性和方法
    3、指定泛型的具体类型:
          调用函数时,函数名的右侧
          定义接口的实现类时,接口名的右侧
          创建类的实例对象时,类名的右侧
*/

(() => {
  function createArray(value: any, count: number): any[] {
    const arr: any[] = []
    for (let index = 0; index < count; index++) {
      arr.push(value)
    }
    return arr
  }

  const arr1 = createArray(11, 3)
  const arr2 = createArray('aa', 3)
  console.log(arr1[0].toFixed(), arr2[0].split(''))
  
  /* 
  函数泛型
  */
  function createArray2 <T> (value: T, count: number) {
    const arr: Array<T> = []
    for (let index = 0; index < count; index++) {
      arr.push(value)
    }
    return arr
  }
  const arr3 = createArray2<number>(11, 3)
  console.log(arr3[0].toFixed())
  // console.log(arr3[0].split('')) // error
  const arr4 = createArray2<string>('aa', 3)
  console.log(arr4[0].split(''))
  // console.log(arr4[0].toFixed()) // error

  /* 多个泛型参数的函数 */
  function swap <K, V> (a: K, b: V): [K, V] {
    return [a, b]
  }
  const result = swap<string, number>('abc', 123)
  console.log(result[0].length, result[1].toFixed())

})()