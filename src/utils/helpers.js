export default () => {};

export function dump(obj) {
  return Object.keys(obj).map(key => (
    <div key={key}>
      {`${JSON.stringify(key)} : ${JSON.stringify(obj[key])}`}
    </div>
  ));
}

export function mergeObjects(...args) {
  const dst = {};
  let src;
  const aargs = [].splice.call(args, 0);

  const mergeIfRequired = p => {
    if (toString.call(src[p]) === '[object Object]') {
      dst[p] = mergeObjects(dst[p] || {}, src[p]);
    } else {
      dst[p] = src[p];
    }
  };

  while (aargs.length > 0) {
    const idx = 0;
    src = aargs.splice(0, 1)[idx];
    if (toString.call(src) === '[object Object]') {
      Object.keys(src).forEach(mergeIfRequired);
    }
  }

  return dst;
}
