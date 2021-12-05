import { useEffect } from 'react';

const useSelect = (ref, page) => {

  useEffect(() => {
    if (ref && page) {
      const arr = ref.current.children;
      const len = arr.length;
      let name;

      // merge into 1 for loop! change arr[i]
      if(page.name) {
        name = page.name.split(' ')[0].toLowerCase();
        for (let i = 0; i < len; i++) {
          if (arr[i].id === name) {
            arr[i].classList.add('selected');
          } else {
            arr[i].classList.remove('selected');
          }
        }
      } else {
        name = page.split('/')[1];
        if (!name) {
          name = 'home';
        }
        for (let i = 0; i < len; i++) {
          if (arr[i].innerText.toLowerCase().replace(/[0-9]/g, '').trim() === name) {
            arr[i].classList.add('selected');
          } else {
            arr[i].classList.remove('selected');
          }
        }
      }
    }
  })
}

export default useSelect;