export const customFetch = (products, setLoading) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            setLoading(false)
            resolve(products)
        }, 3000);
    })
}