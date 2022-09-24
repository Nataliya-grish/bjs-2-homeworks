function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let objectInCache = cache.findIndex((item) => item.hash === hash);
    if (objectInCache !== -1) {
      console.log("Из кэша: " + cache[objectInCache].value);
      return "Из кэша: " + cache[objectInCache].value;
    } else {
      let result = func(...args);
      cache.push({ hash: hash, value: result });
      if (cache.length > 5) {
        cache.shift()
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(func, delay) {
  let timeout = null;
  let flag = false;
  function wrapper(...args) {

    if (!flag) {
      func(...args)
      flag = true;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
        flag = false
      }, delay);
    }
  }
  return wrapper
}

function debounceDecorator2(func, delay) {
  let timeout = null;
  let flag = false;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count++;
    if (!flag) {
      func(...args)
      flag = true;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
        flag = false
      }, delay);
    }
  }
  return wrapper
}

