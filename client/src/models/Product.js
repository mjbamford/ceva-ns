export default {
  _data: [
    {
      id: 666,
      imageUrl: '/images/products/ambroxol-injection.png',
      name: 'Ambroxol',
      description: 'Mucolytic for horses & camels: a mucolytic expectorant to clear and maintain airways',
      information: `
        Mucolytic for horses & camels: a mucolytic expectorant to clear and maintain airways
        <p><b>COMPOSITION</b>: Ambroxol hydrochloride 6mg/mL</p>
        <p><b>ACTIONS:</b>
        AMBROXOL is a mucolytic expectorant. AMBROXOL is an active metabolite of bromhexine, and acts to reduce the thickness of mucus secretions.  This results in a productive cough which aids removal of mucous, and assists in clearing and keeping clear the bronchioles and alveoli, reducing breathlessness.
        </p>
        <p>
        AMBROXOL enhances the concentrations of other drugs in bronchial secretions to result in a more rapid recovery.
        </p>
      `,
      indications: `
        AMBROXOL is indicated to aid in the treatment of mucous producing inflammation in the upper respiratory tract in horses and camels.
        <p>Specific indications include: Chest Infections: acute and chronic bronchopneumonia, catarrhal rhinitis, strangles, post-viral cough.</p>
      `,
      directions: `
        Horses:
        <ul>
        <li>0.3 mg/kg (5mL/100kg) bodyweight twice daily.</li>
        <li>(25ml per 500kg horse)</li>
        <li>Administer AMBROXOL by intravenous injection.</li>
        </ul>
      `,
      link: '/products/666'
    },
    {
      id: 667,
      imageUrl: '/images/products/sedamed.png',
      name: 'Sedamed Injection',
      description: 'Reversible medetomidine sedative and analgesic',
      link: '/products/667'
    }
  ],
  all: function() { return this._data },
  find: function(id) {
    const _id = Number(id)
    return this._data.find(p => p.id === _id )
  }
}
