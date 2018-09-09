export default {
  _data: [
    {
      id: 666,
      imageUrl: '/images/products/tildren.png',
      name: 'Tildren Injection',
      description: 'Treatment for bone and cartilage-related lameness such as that of Navicular Disease and Bone Spavin',
      link: '/products/666',
      seeAlso: [ 667 ]
    },
    {
      id: 667,
      imageUrl: '/images/products/sedamed.png',
      name: 'Sedamed Injection',
      description: 'Reversible medetomidine sedative and analgesic',
      link: '/products/667',
      seeAlso: [ 666 ]
    }
  ],
  all: function() { return this._data },
  find: function(id) {
    const _id = Number(id)
    return this._data.find(p => p.id === _id )
  }
}
