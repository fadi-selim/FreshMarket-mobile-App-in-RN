const processCategory = cat => ({
    cat:cat
  })
  
  export const fetchCategories = async () => {
    const response = await fetch('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
    const results = await response.json()

    return results
  }
  
  export const fetchProducts = async (id) => {
    const response = await fetch('https://5bcce576cf2e850013874767.mockapi.io/task/categories'+'/'+id.toString())
    const results = await response.json()
    return results
  }

  export const getImageURi = async (id) => {
    const response = await fetch('https://5bcce576cf2e850013874767.mockapi.io/task/categories'+'/'+id.toString())
    const results = await response.json()
    if (id===1) return 'https://media.istockphoto.com/photos/fresh-fruits-and-vegetables-picture-id589415708?k=6&m=589415708&s=612x612&w=0&h=yk6a8hZI3HnGuPgCkJqWjqzmfbGqy9bucx1ZUXkXwA8='
    return results.category_img
  }