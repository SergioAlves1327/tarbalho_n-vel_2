const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const shuffle = (arr, n) => {
  for (let i = 0; i < n; i++) {
    const j = Math.floor(Math.random() * n);
    swap(arr, i, j);
  }

  return arr;
}

const bubble_sort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

const selection_sort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
}

const particionamento = (arr, left, right, pivot) => {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

const quick_sort = (arr, left, right) => {
  if (arr.length > 1) {
    const pivot = arr[Math.floor((left + right) / 2)];
    const index = particionamento(arr, left, right, pivot);
    if (left < index - 1) {
      quick_sort(arr, left, index - 1);
    }
    if (index < right) {
      quick_sort(arr, index, right);
    }
  }
}

