const products = [
  {
    id: 1,
    name_en: 'Monocrystalline Panel 450W Longi',
    name_uk: 'Монокристалічна панель 450W Longi',
    category: 'mono',
    price: 8500,
    oldPrice: 9500,
    img: 'assets/img/solar-panels.jpg',
    specs_en: 'Efficiency 22.5% | 450W | 25-year warranty',
    specs_uk: 'ККД 22.5% | 450 Вт | 25 років гарантії',
    badgeKey: 'badgeHit'
  },
  {
    id: 2,
    name_en: 'Monocrystalline Panel 550W JinkoSolar',
    name_uk: 'Монокристалічна панель 550W JinkoSolar',
    category: 'mono',
    price: 10200,
    img: 'assets/img/field-clear.jpg',
    specs_en: 'Efficiency 22.8% | 550W | N-type',
    specs_uk: 'ККД 22.8% | 550 Вт | N-тип',
    badgeKey: 'badgeNew'
  },
  {
    id: 3,
    name_en: 'Monocrystalline Panel 400W Trina Solar',
    name_uk: 'Монокристалічна панель 400W Trina Solar',
    category: 'mono',
    price: 7200,
    img: 'assets/img/rows-field.jpg',
    specs_en: 'Efficiency 21.3% | 400W | Double-glass',
    specs_uk: 'ККД 21.3% | 400 Вт | Двопрозора'
  },
  {
    id: 4,
    name_en: 'Polycrystalline Panel 380W Canadian Solar',
    name_uk: 'Полікристалічна панель 380W Canadian Solar',
    category: 'poly',
    price: 6400,
    oldPrice: 7200,
    img: 'assets/img/field-panels.jpg',
    specs_en: 'Efficiency 19.8% | 380W | Reliable classic',
    specs_uk: 'ККД 19.8% | 380 Вт | Надійна класика'
  },
  {
    id: 5,
    name_en: 'Polycrystalline Panel 330W JA Solar',
    name_uk: 'Полікристалічна панель 330W JA Solar',
    category: 'poly',
    price: 5500,
    img: 'assets/img/solar-roof.jpg',
    specs_en: 'Efficiency 19.2% | 330W | Best price',
    specs_uk: 'ККД 19.2% | 330 Вт | Оптимальна ціна'
  },
  {
    id: 6,
    name_en: 'Polycrystalline Panel 450W',
    name_uk: 'Полікристалічна панель 450W',
    category: 'poly',
    price: 7800,
    oldPrice: 8800,
    img: 'assets/img/solar-farm.jpg',
    specs_en: 'Efficiency 20.1% | 450W | Sale',
    specs_uk: 'ККД 20.1% | 450 Вт | Акція',
    badgeKey: 'badgeSale'
  },
  {
    id: 7,
    name_en: 'Flexible Panel 200W SunPower',
    name_uk: 'Гнучка панель 200W SunPower',
    category: 'flex',
    price: 5200,
    img: 'assets/img/solar-panels.jpg',
    specs_en: '2.5mm | 3.2kg | For cars/boats',
    specs_uk: '2.5 мм | 3.2 кг | Для авто/човнів'
  },
  {
    id: 8,
    name_en: 'Flexible Panel 100W ECO-WORTHY',
    name_uk: 'Гнучка панель 100W ECO-WORTHY',
    category: 'flex',
    price: 3200,
    img: 'assets/img/field-clear.jpg',
    specs_en: '1.8mm | 1.8kg | For camping',
    specs_uk: '1.8 мм | 1.8 кг | Для походів'
  },
  {
    id: 9,
    name_en: 'Flexible Panel 300W Renogy',
    name_uk: 'Гнучка панель 300W Renogy',
    category: 'flex',
    price: 7100,
    img: 'assets/img/rows-field.jpg',
    specs_en: '3mm | 4.5kg | High power',
    specs_uk: '3 мм | 4.5 кг | Висока потужність'
  },
  {
    id: 10,
    name_en: 'Inverter Deye 5kW',
    name_uk: 'Інвертор Deye 5kW',
    category: 'accessories',
    price: 18500,
    img: 'assets/img/field-panels.jpg',
    specs_en: '5kW | Hybrid | Wi-Fi',
    specs_uk: '5 кВт | Гібридний | Wi-Fi',
    badgeKey: 'badgeTop'
  },
  {
    id: 11,
    name_en: 'Battery Pylontech 3.6kWh',
    name_uk: 'Акумулятор Pylontech 3.6kWh',
    category: 'accessories',
    price: 22500,
    img: 'assets/img/solar-roof.jpg',
    specs_en: 'LiFePO4 | 3.6kWh | BMS',
    specs_uk: 'LiFePO4 | 3.6 кВт·год | BMS'
  },
  {
    id: 12,
    name_en: 'Solar Cable 6mm² (100m)',
    name_uk: 'Кабель сонячний 6мм² (100м)',
    category: 'accessories',
    price: 1800,
    img: 'assets/img/solar-farm.jpg',
    specs_en: '6mm² | Copper | UV resistant',
    specs_uk: '6 мм² | Мідний | Стійкий до УФ'
  }
];
