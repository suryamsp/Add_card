import { Price_card } from './Price_card';

export function Price_card_list() {
  const data = [{
    "id":"1",
    "name": "Fancy Product",
    "price": "$40.00-$80.00",
    "btn_name": "View options",
  }, {
    "id":"2",
    "name": "Special item",
    "rating": "⭐⭐⭐⭐⭐",
    "price": "$18.00",
    "dis_price": "$20.00",
    "btn_name": "Add to cart",
  }, {
    "id":"3",
    "name": "Sales item",
    "price": "$50.00",
    "dis_price": "$25.00",
    "btn_name": "Add to cart",
  }, {
    "id":"4",
    "name": "Popular item",
    "rating": "⭐⭐⭐⭐⭐",
    "price": "$40.00",
    "dis_price": "",
    "btn_name": "Add to cart",
  }, {
    "id":"5",
    "name": "Sales item",
    "price": "$50.00",
    "dis_price": "$25.00",
    "btn_name": "Add to cart",
  },
  {"id":"6",
    "name": "Fancy Product",
    "price": "$120.00-$280.00",
    "btn_name": "View options",
  },
  {"id":"7",
    "name": "Special item",
    "rating": "⭐⭐⭐⭐⭐",
    "price": "$18.00",
    "dis_price": "$20.00",
    "btn_name": "Add to cart",
  },
  {
    "id":"8",
    "name": "Popular item",
    "rating": "⭐⭐⭐⭐⭐",
    "price": "$40.00",
    "dis_price": "",
    "btn_name": "Add to cart",
  }
  ];

  return (
    <div className='main_con'>
      {data.map((item, index) => (<Price_card detail={item}
      id={item.id} key={index}  />))}
    </div>
  );
}
