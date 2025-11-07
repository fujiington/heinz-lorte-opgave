/**
 * @param {*} routes 
 * @param {*} sel 
 */
export async function router(routes, sel = '#container') {
  const el = document.querySelector(sel);

  const render = async () => {
    // Use only the path part of the hash (ignore query string) so routes like
    // '#/?category=foo' map to '/' and don't cause mismatches.
    console.log(location.hash);
    const raw = location.hash.slice(1) || '/';
    console.log({raw});
    const key = raw.split('?')[0] || '/';

    const v = routes[key] ?? routes['*'] ?? '';   
    const output = (typeof v === 'function') ? await v() : v;

    el.innerHTML = '';

    if (output instanceof Node) {
      el.append(output);      
    } else {
      el.innerHTML = String(output);   
    }
  };

  addEventListener('hashchange', render);
  render();
}

export const go = (path) => (location.hash = path);
