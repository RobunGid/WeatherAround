export default async function(name) {
    const response = await fetch(`https://lingva.ml/api/v1/en/ru/${name})`)
    const dataJson = await response.json()
    console.log(dataJson)

      return dataJson.translation
}