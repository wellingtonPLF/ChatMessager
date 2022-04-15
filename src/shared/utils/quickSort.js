export function sortObjectArray (vet) {
  quickSort(vet, 0, vet.length - 1)
}

function quickSort (vet, ini, fim) {
  let i = ini
  let f = fim
  const m = Math.floor((i + f) / 2)

  while (i < f) {
    while (vet[i].id < vet[m].id) {
      i++
    }

    while (vet[f].id > vet[m].id) {
      f--
    }

    if (i <= f) {
      let temp = vet[i]
      vet[i] = vet[f]
      vet[f] = temp
      temp = null
      i++
      f--
    }
  }

  if (f > ini) {
    quickSort(vet, ini, f)
  }

  if (i < fim) {
    quickSort(vet, i, fim)
  }
}
