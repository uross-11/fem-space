import { useEffect } from 'react';

const useSelect = (ref, page) => {

  useEffect(() => {
    const arr = ref.current.children;
    const len = arr.length;
    const name = page.name.split(' ')[0].toLowerCase();

    for (let i = 0; i < len; i++) {
      if (arr[i].id === name) {
        arr[i].classList.add('selected');
      } else {
        arr[i].classList.remove('selected');
      }
    }
  })
}

export default useSelect;